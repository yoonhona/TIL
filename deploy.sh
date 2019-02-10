#!/usr/bin/env sh

# abort on errors
set -e

rm -rf .vuepress/dist

# build
vuepress build .

# navigate into the build output directory
cd .vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b gh-pages
git add -A

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"
cd
# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f --set-upstream git@github.com:yoonhona/TIL.git gh-pages

cd -

