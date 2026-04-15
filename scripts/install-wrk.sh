#!/usr/bin/env bash
# Install wrk (https://github.com/wg/wrk) and verify it is on PATH.
# Idempotent: exits early if wrk is already available.

set -euo pipefail

if command -v wrk >/dev/null 2>&1; then
  echo "wrk is already installed at: $(command -v wrk)"
  exit 0
fi

OS="$(uname -s)"

case "$OS" in
  Darwin)
    if ! command -v brew >/dev/null 2>&1; then
      echo "Error: Homebrew is required to install wrk on macOS." >&2
      echo "Install Homebrew first: https://brew.sh" >&2
      exit 1
    fi
    echo "Installing wrk via Homebrew..."
    brew install wrk
    ;;

  Linux)
    echo "Building wrk from source on Linux..."
    if ! command -v make >/dev/null 2>&1 || ! command -v gcc >/dev/null 2>&1 || ! command -v git >/dev/null 2>&1; then
      echo "Error: build tools required (git, make, gcc). Install build-essential and git first." >&2
      exit 1
    fi
    BUILD_DIR="$(mktemp -d)"
    trap 'rm -rf "$BUILD_DIR"' EXIT
    git clone --depth 1 https://github.com/wg/wrk.git "$BUILD_DIR/wrk"
    (cd "$BUILD_DIR/wrk" && make)
    INSTALL_DIR="/usr/local/bin"
    if [ -w "$INSTALL_DIR" ]; then
      cp "$BUILD_DIR/wrk/wrk" "$INSTALL_DIR/wrk"
    else
      echo "Installing to $INSTALL_DIR requires sudo..."
      sudo cp "$BUILD_DIR/wrk/wrk" "$INSTALL_DIR/wrk"
    fi
    ;;

  *)
    echo "Error: unsupported OS '$OS'. Install wrk manually from https://github.com/wg/wrk" >&2
    exit 1
    ;;
esac

if ! command -v wrk >/dev/null 2>&1; then
  echo "Error: wrk installation completed but the binary is not on PATH." >&2
  exit 1
fi

echo "wrk installed at: $(command -v wrk)"
