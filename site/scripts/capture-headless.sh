#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../.."

# Chrome's native headless mode can omit WebGPU surfaces on NVIDIA/Linux.
# A private headless Wayland display preserves real GPU presentation without
# opening a window or moving the pointer on the artist's desktop.
if [[ "${CAPTURE_BROWSER_MODE:-}" == native || "$(uname -s)" != Linux ]]; then
  exec node site/scripts/capture.mjs
fi
if [[ "${1:-}" != --session ]]; then
  exec dbus-run-session -- bash site/scripts/capture-headless.sh --session
fi
capture_runtime=$(mktemp -d /tmp/capy-site-display.XXXXXX)
export XDG_RUNTIME_DIR="$capture_runtime"
export WAYLAND_DISPLAY=capy-site-capture
export CAPTURE_BROWSER_MODE=wayland
unset DISPLAY
mkdir -p artifacts/capture-review
mutter --headless --wayland --no-x11 --virtual-monitor=1920x1080@60 \
  --wayland-display="$WAYLAND_DISPLAY" > artifacts/capture-review/display.log 2>&1 &
capture_display_pid=$!
trap 'kill "$capture_display_pid" 2>/dev/null || true; wait "$capture_display_pid" 2>/dev/null || true; rm -rf "$capture_runtime"' EXIT
for ((capture_attempt=0; capture_attempt<100; capture_attempt++)); do
  [[ -S "$XDG_RUNTIME_DIR/$WAYLAND_DISPLAY" ]] && break
  kill -0 "$capture_display_pid" 2>/dev/null || { cat artifacts/capture-review/display.log; exit 1; }
  sleep .1
done
[[ -S "$XDG_RUNTIME_DIR/$WAYLAND_DISPLAY" ]]
node site/scripts/capture.mjs
