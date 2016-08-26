require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import RecipeList from '../components/RecipeList';

let recipes = [{name: 'Foo', description: 'Foooooooo'},
              {name: 'Bar', description: 'Baaar'},
              {name: 'Baz', description: 'Baz'},
              {name: 'Foo2', description: 'Foooooooo'},
              {name: 'Bar2', description: 'Baaar'},
              {name: 'Baz2', description: 'Baz'},
              {name: 'Foo3', description: 'Foooooooo'},
              {name: 'Bar3', description: 'Baaar'},
              {name: 'Baz3', description: 'Baz'},
              {name: 'Foo4', description: 'Foooooooo'},
              {name: 'Bar4', description: 'Baaar'},
              {name: 'Baz4', description: 'Baz'}];

var Recipes = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" name="search" className="recipe-search"/>
        <RecipeList items={recipes}/>
      </div>
    );
  }
});

export default Recipes;