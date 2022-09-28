@ECHO OFF
ECHO Start build
git checkout uat
git pull
npm i
npm run build
PAUSE