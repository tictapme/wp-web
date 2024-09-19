#!/bin/bash
rsync -avz --exclude='.git/' --exclude='404.html' --exclude='bin/' --exclude='_redirects' debian@51.83.111.98:/home/debian/docker-wp/generated/ src/ --delete

# replace using sed all staging links with production links
find ./src/ -name "*.html" -type f -print0 | xargs -0 sed -i 's/staging-www\.tictap\.me/www\.tictap\.me/g'

# xml files
find ./src/ -name "*.xml" -type f -print0 | xargs -0 sed -i 's/staging-www\.tictap\.me/www\.tictap\.me/g'

# Adds Absolute urls for sitemaps
node bin/fix-sitemaps.js
