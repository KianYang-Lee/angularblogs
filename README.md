# Angular Blogs

Contain materials for blogs related to Angular.

## NVM

Node version manager (NVM) is used to manage NPM versions. The versions that I used in these materials are:

- `npm 9.5.0`
- `node 18.5.0`
- `Angular CLI 15.2.0`

To set default node version used by NVM:

```sh
nvm alias default lts/hydrogen
```

## Installing Angular
```sh
# Remove existing installation
npm uninstall -g @angular/cli
npm cache clean --force

npm install -g @angular/cli
```