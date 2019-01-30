#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd ./.vuepress/dist

# 如果是发布到自定义域名
echo 'tricks.sanbaofengs.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 更新编译后的页面
git push -f git@github.com:x-bao/tricks.git master:gh-pages

cd -

git add -A
git commit -m 'update source'

# 更新原文
git push -f git@github.com:x-bao/tricks.git master:master
