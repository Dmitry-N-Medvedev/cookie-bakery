# cookie-bakery

Please see the task in [Auto1 Frontend Developer Challenge](docs/Auto1%20Frontend%20Developer%20Challenge.pdf).

## disclamer

According to the Foundation section of the coding challenge, the client "likes to be up to date" and suggests that either the Vue or React should be used.
My take on this is the following: as long as the client likes to use contemporary tech, they should abandon both the Vue and the React altogether.
They should use Svelte/Sapper. This application is written in Sapper which is exactly what being up to date really means.

## how to setup

* install the NodeJS (preferably via [nvm](https://github.com/nvm-sh/nvm))
* install the pnpm: `curl -L https://raw.githubusercontent.com/pnpm/self-installer/master/install.js | PNPM_VERSION=next node`
* change directory to [src/cookie-bakery](src/cookie-bakery) and run `pnpm install`

## how to run

* run `pnpm run dev` from the [src/cookie-bakery](src/cookie-bakery) directory
* open your browser `http://localhost:3000`

## notes

* the contents of the `<head>` section in the [template.html](./src/cookie-bakery/src/template.html) is stolen from the [HEAD](https://github.com/joshbuchea/HEAD) repo
