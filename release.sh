#!/bin/bash

set -e
set -u

VERSION=$1
VERSION_PATTERN="^[0-9]+\.[0-9]+\.[0-9]+$"

if [[ "$#" -ne 1 ]] ; then
  echo "Please specify a version number (e.g. 0.1.0)"
  exit 1
fi

if [[ ! $VERSION =~ $VERSION_PATTERN ]] ; then
  echo "Version must be of the format \\d+.\\d+\\d+"
  exit 1
fi

# update bower.json
sed -i -r 's/^  "version": "[0-9]+\.[0-9]+\.[0-9]+",/  "version": "'$VERSION'",/g' bower.json

# update package.json
sed -i -r 's/^  "version": "[0-9]+\.[0-9]+\.[0-9]+",/  "version": "'$VERSION'",/g' package.json

# update lib file
sed -i -r 's/^Ember.libraries.register\("GloitComponent", "[0-9]+\.[0-9]+\.[0-9]+"\);/Ember.libraries.register("GloitComponent", "'$VERSION'");/g' lib/gloit-component.js

rm -rf dist && broccoli build dist
git add -A dist
git add bower.json
git add package.json
git add lib/gloit-component.js
git commit -m "Version bump $VERSION"
git tag -a "v$VERSION" -m "v$VERSION"
git push origin master
git push --tags
