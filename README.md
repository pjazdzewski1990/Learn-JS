# Learn-JS
Internal projects for introducing backenders to javascript

## Getting started

* First time do `npm install`
* To get the program running `npm start`
* To start tests `npm test`

## Stack 

* Creating components: [React.js](https://facebook.github.io/react/)
* Handling state: [Redux](http://redux.js.org/)
* Building modules: [Webpack](https://webpack.github.io/)
* Supporting ES2015: [Babel](https://babeljs.io/)

Project was generated with [Yeoman](http://yeoman.io/)

## Project structure
+ `cfg`: various configuration files
+ `coverage`: generated test coverage reports
+ `dist`: for generated distributions
+ `src`: source code
  + `actions`: directory to put your [flux actions](https://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html)
  + `components`: UI components written with jsx and React go here
  + `config`: configuration files for UI 
  + `containers`: folder for top level components
  + `reducers`: place for [redux reducers](http://redux.js.org/docs/basics/Reducers.html)
  + `sources`: folder for flux datasources
  + `stores`: for flux stores holding application data
  + `styles`: for regular CSS
+ `test`: test source code
