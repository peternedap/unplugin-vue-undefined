# Reproduction of loaders error

Steps to reproduce:

- Run `yarn install`
- Run `yarn build`
- Delete `other.[hash].js` in dist/assets or use `yarn break`
- Run `yarn serve`
- Go to <http://localhost:4173/>
- Click the "Go to other page" link.

Expected behavior: Router.onError should be triggered with a fetch error

Actual behavior: Router.onError is triggered with "Cannot read properties of undefined (reading '__loaders')"
