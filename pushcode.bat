@ECHO OFF
ECHO Start push
git add .
git add -f build
git commit -m "Add file build"
git push
PAUSE