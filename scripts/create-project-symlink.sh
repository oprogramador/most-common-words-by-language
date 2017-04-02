#!/bin/bash
set -e

cd `dirname $(which $0)`
cd ..

path=node_modules/__APP_NAME_58397D59__
mkdir -p node_modules
rm -f $path
ln -s ../src $path
