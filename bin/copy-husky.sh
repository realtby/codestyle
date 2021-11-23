#!/usr/bin/env bash

# Hack: define the repo is codestyle instead of node_module
if [ -e "$PWD/Makefile" ]; then
  exit 0;
fi;

echo "Bootstrapping .husky config"

if [ -e "$PWD/../../../.husky" ]; then
  echo ".husky config already exist"
  echo "removing current .husky config"
  rm -rf $PWD/../../../.husky
fi;

echo "copy .husky config to project root"
cp -R $PWD/.husky $PWD/../../../.husky

echo "> Note: If node_modules are installed and you decide to delete the .husky folder"
echo "> then you need to delete all node_modules and install them again."
