#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../.."
if [[ "${CAPTURE_BROWSER_MODE:-}" == native || "$(uname -s)" != Linux ]]; then
  exec node "$@"
fi
if [[ "${CAPTURE_PRIVATE_SESSION:-}" != 1 ]]; then
  exec dbus-run-session -- env CAPTURE_PRIVATE_SESSION=1 bash site/scripts/run-private-capture.sh "$@"
fi
capture_runtime=$(mktemp -d /tmp/capy-private-capture.XXXXXX)
export XDG_RUNTIME_DIR="$capture_runtime"
export WAYLAND_DISPLAY=capy-private-capture
export CAPTURE_BROWSER_MODE=wayland
unset DISPLAY
mkdir -p artifacts/release
mutter --headless --wayland --no-x11 --virtual-monitor=1920x1080@60 \
  --wayland-display="$WAYLAND_DISPLAY" > artifacts/release/private-display.log 2>&1 &
capture_compositor=$!
trap 'kill "$capture_compositor" 2>/dev/null || true; wait "$capture_compositor" 2>/dev/null || true; rm -rf "$capture_runtime"' EXIT
for ((attempt=0; attempt<200; attempt++)); do
  [[ -S "$XDG_RUNTIME_DIR/$WAYLAND_DISPLAY" ]] && break
  kill -0 "$capture_compositor" 2>/dev/null || { cat artifacts/release/private-display.log; exit 1; }
  sleep .1
done
[[ -S "$XDG_RUNTIME_DIR/$WAYLAND_DISPLAY" ]]
node "$@"
