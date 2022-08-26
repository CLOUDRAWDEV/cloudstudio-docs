# 배포 설명

1. 배포는 github actions으로 진행됩니다.   

2. `main` 브랜치에서 `npm run build`를 해서 `/build` 디렉터리를 만듭니다.   

3. `/build`를 `gh-pages` 브랜치로 옮깁니다.   

4. `gh-pages` 브랜치의 `/` 경로를 퍼블리싱 합니다.   

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
