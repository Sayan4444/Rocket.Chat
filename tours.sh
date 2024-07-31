#!/bin/bash

printf "Enter repository link:\n"
read repolink

if [ -z "$repolink" ]; then
  repolink=https://github.com/RocketChat/RC.Guided.Tours.git
  echo "Using default repository link: ${repolink}\n"
fi

if [ ! -d ./RC.Guided.Tours ]; then
  git clone ${repolink}
fi

cd RC.Guided.Tours
yarn build
yarn tours
cd ..