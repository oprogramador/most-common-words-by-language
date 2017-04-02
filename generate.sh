#!/bin/bash
set -e

cd `dirname $(which $0)`

sed -i "s/__GITHUB_USER_7F71C1C7__/$GITHUB_USER/g" `git ls-files`
sed -i "s/__TRAVIS_USER_2757E647__/$TRAVIS_USER/g" `git ls-files`
sed -i "s/__APP_NAME_58397D59__/$APP_NAME/g" `git ls-files`
sed -i "s/__DESCRIPTION_87A106F6__/$DESCRIPTION/g" `git ls-files`
sed -i "s/__KEYWORDS_7072626B__/$KEYWORDS/g" `git ls-files`
sed -i "s/__AUTHOR_43D5B693__/$AUTHOR/g" `git ls-files`
mv _README.md README.md
rm generate.sh
git remote set-url origin https://github.com/$GITHUB_USER/$APP_NAME.git
git add .
git commit -m 'generation'
git push -u origin master
