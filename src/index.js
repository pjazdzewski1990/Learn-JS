import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import RecipeRootReducer from './reducers/RecipeRootReducer'
import App from './containers/App';

const loggerMiddleware = createLogger();
//TODO: render server side
const recipesInitialData = [
  { id: 1, name: 'Foo', description: 'Foooooooo', image: require('./images/wings.jpg'), isStarred: false },
  { id: 2, name: 'Bar', description: 'Baaar', image: require('./images/tortilla.jpg'), isStarred: false },
  { id: 3, name: 'Baz', description: 'Baz', image: require('./images/cheeserolls.jpg'), isStarred: false },
  { id: 4, name: 'Foo2', description: 'Foooooooo', image: require('./images/wings.jpg'), isStarred: false },
  { id: 5, name: 'Bar2', description: 'Baaar', image: require('./images/tortilla.jpg'), isStarred: false },
  { id: 6, name: 'Baz2', description: 'Baz', image: require('./images/cheeserolls.jpg'), isStarred: false },
  { id: 7, name: 'Foo3', description: 'Foooooooo', image: require('./images/wings.jpg'), isStarred: false },
  { id: 8, name: 'Bar3', description: 'Baaar', image: require('./images/tortilla.jpg'), isStarred: false },
  { id: 9, name: 'Baz3', description: 'Baz', image: require('./images/cheeserolls.jpg'), isStarred: false },
  { id: 10, name: 'Foo4', description: 'Foooooooo', image: require('./images/wings.jpg'), isStarred: false },
  { id: 11, name: 'Bar4', description: 'Baaar', image: require('./images/tortilla.jpg'), isStarred: false },
  { id: 12, name: 'Baz4', description: 'Baz', image: require('./images/cheeserolls.jpg'), isStarred: false }
];
const recipeStore = createStore(
  RecipeRootReducer,
  {
    RecipeReducer: recipesInitialData,
    SearchReducer: {query: ''},
    LoadMoreRecipesReducer: {isFetching: false}
  },
  applyMiddleware(thunkMiddleware,loggerMiddleware)
);

render(
  <Provider store={recipeStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
