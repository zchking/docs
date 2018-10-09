#!/bin/sh

find _site/ -type f ! -iname 'index.html' -iname '*.html' -print0 | while read -d $'\0' f; do mkdir -p "${f%.html}" && cp "$f" "${f%.html}/index.html"; done