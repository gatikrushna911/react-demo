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

EPS - 3 : Laying foundation

Write the script for parcel run command

- "start": "parcel index.html" : start the project in local environment
- "build": "parcel build index.html" : build the project

Now to start the project. Below is the command

- npm run start or npm start
- npm run build or npm build

## React element

const heading = React.createElement("h1", { id: "heading" }, "Namaste React "); /// this will create an object
const root = ReactDOM.createRoot(document.getElementById("root")); // convert the object into HTML element
root.render(heading); // Render to browser DOM

JSX is HTML like syntax. it is not HTML inside javascript
Browser does not understand JSX
JSX code transpile before reaches to JS engine. Transpile means convert the code that browser can understand. Transpiling is done by parcel.

Whos does this Transpile ? - Babel

Attributes provide to JSX in camel case

Multiple line JSX rounds inside parentheses ().

what is functional component ?

- it is normal javascript function which will retrun some JSX code
- A function which returns a piece of react element known as functional component

Below is the example of a functional component

const HeadingComponent = () => { return <h1>Example of functional component</h1>};

or

const HeadingComponent = () => <h1>Example of functional component</h1>

// React Element
const heading = (

<h1 className="head" tabindex="5">
Namaste React using JSX
<h1>
);

To change this to react component - First letter capital - Add this bracket ()

const Heading = () => (

<h1 className="head" tabindex="5">
Namaste React using JSX
<h1>
);

How render a component in to the root

root.render(<Component/>)

we can put

- element inside element
- component inside element
- component inside component
- element inside component

All the above is possible in component compositon
