---
noteId: "d4b457c08b7411eeb67c47c81cf6ec94"
tags: []
---

npm init : configure npm install
package.json is a configuration for npm
bundler : packages your project so that it can be shipped to production easily
configure parcel -

- npm install -D parcel : D means Dev environments. It is required in our development environment.
- ^ : will upgrade the minor version
- ~ : will upgrade the major version

package-lock.json : it keeps a record of the exact version
integrity : it is a SHA hash which will ensure the exact version match in different environments
node-modules : all the packages is installed in this folders. This is a mini local database

- npm install : it will recreate the node-modules. so it is not required to move the node-modules to production environment. npm will install the packages
- npx parcel index.html : it will hosted the app in our server. npx : means it will execute the package
- npx parcel build index.html

inject react into the APP

- npm install react
- npm install react-dom

# parcel is doing below things

- build development build
- local server
- HMR : Hot module replacement
- file wathing Algorithms
- cachng : for giving fast development experience
- Image optimization
- Minification
- Bundling
- compress
- consistent hashing
- code splitting
- Differential bundling : to ssupport of older browsers
- Error handling
- HTPS
- Tree shaking algorithm : remove unused codes

Read the parcel documentation

dist : parcel makes a development build and put inside this folder. once the project is hosted. it will get read from this file
