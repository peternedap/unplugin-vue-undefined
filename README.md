# Reproduction of loaders error

Steps to reproduce:

- Run `npm install`
- Run `npm run build`
- Delete `other.[hash].js` in dist/assets or use `npm run break`
- Run `npm run preview`
- Go to <http://localhost:4173/>
- Click the "Go to other page" link.

Expected behavior: Router.onError should be triggered with a fetch error

Actual behavior: Router.onError is triggered with "Cannot read properties of undefined (reading '__loaders')"
