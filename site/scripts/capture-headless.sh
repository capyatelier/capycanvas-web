#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../.."

# Chrome's native headless mode can omit WebGPU surfaces on NVIDIA/Linux.
# Private headless Wayland displays preserve real GPU presentation without
# opening a window or moving the pointer on the artist's desktop.
if [[ "${CAPTURE_BROWSER_MODE:-}" == native || "$(uname -s)" != Linux ]]; then
  exec node site/scripts/capture.mjs
fi
if [[ "${1:-}" != --session ]]; then
  exec dbus-run-session -- bash site/scripts/capture-headless.sh --session
fi
capture_runtime=$(mktemp -d /tmp/capy-site-display.XXXXXX)
export XDG_RUNTIME_DIR="$capture_runtime"
export CAPTURE_BROWSER_MODE=wayland
unset DISPLAY
capture_review="${CAPTURE_REVIEW:-artifacts/capture-review}"
mkdir -p "$capture_review"
capture_displays=()
capture_pids=()
for ((index=0; index<${CAPTURE_JOBS:-16}; index++)); do
  display="capy-site-capture-$index"
  WAYLAND_DISPLAY="$display" mutter --headless --wayland --no-x11 --virtual-monitor=1920x1080@60 \
    --wayland-display="$display" > "$capture_review/display-$index.log" 2>&1 &
  capture_pids+=($!)
  capture_displays+=("$display")
done
trap 'kill "${capture_pids[@]}" 2>/dev/null || true; wait "${capture_pids[@]}" 2>/dev/null || true; rm -rf "$capture_runtime"' EXIT
for index in "${!capture_displays[@]}"; do
  for ((attempt=0; attempt<200; attempt++)); do
    [[ -S "$XDG_RUNTIME_DIR/${capture_displays[$index]}" ]] && break
    kill -0 "${capture_pids[$index]}" 2>/dev/null || { cat "$capture_review/display-$index.log"; exit 1; }
    sleep .1
  done
  [[ -S "$XDG_RUNTIME_DIR/${capture_displays[$index]}" ]]
done
CAPTURE_DISPLAYS=$(IFS=,; echo "${capture_displays[*]}") node site/scripts/capture.mjs
