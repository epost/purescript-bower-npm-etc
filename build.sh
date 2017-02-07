#!/bin/bash

TARGET=build/purescript-bundle.js
INTERMEDIATE=build/purescript

FILES=$(node scripts/purescript-manual-build.js)

rm -rf $INTERMEDIATE $TARGET
mkdir -p $INTERMEDIATE

echo -----
echo $FILES
echo -----
echo psc --source-maps -o build/purescript -v \$FILES
psc --source-maps -o build/purescript -v $FILES

OUTPUT=$(find build/purescript -type f -name '*.js')

echo -----
echo $OUTPUT
echo -----
echo psc-bundle \$OUTPUT -m Main -o $TARGET
psc-bundle $OUTPUT -m Main -o $TARGET
echo "module.exports=PS" >> $TARGET


echo Size: $(du -hs $TARGET)
