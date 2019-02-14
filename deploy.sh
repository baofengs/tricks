#!/usr/bin/env sh

set -e

npm run build

cd ./.vuepress/dist
echo 'tricks.sanbaofengs.com' > CNAME
cp ../../favicon.ico .
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:x-bao/tricks.git master:gh-pages
echo '=== deploy pages done ==='

cd -
git add -A
git commit -m 'update source'
git push -f git@github.com:x-bao/tricks.git master:master
echo '=== sync source code done ==='
