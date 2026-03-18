#!/usr/bin/env bash
set -euo pipefail

echo "Packing mion packages..."
bash ../mion/scripts/pack-packages.sh

echo "Copying tarballs to ./mion-tarballs..."
mkdir -p ./mion-tarballs
rm -rf ./mion-tarballs/*
cp ../mion/test-publish/tarballs/*.tgz ./mion-tarballs/

echo "Done!"
