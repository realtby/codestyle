#!/usr/bin/env bash

NPM_REGISTER="https://registry.npmjs.org"

if [[ $LOCAL == "true" ]];then
  NPM_REGISTER="http://0.0.0.0:4873/"
fi;

echo "registry=$NPM_REGISTER" > $PWD/.npmrc
