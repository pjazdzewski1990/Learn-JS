import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import RecipeList from '../components/RecipeList';

let recipes = [{name: 'Foo', description: 'Foooooooo', image: require('../images/red_1.png')},
              {name: 'Bar', description: 'Baaar', image: require('../images/red_1.png')},
              {name: 'Baz', description: 'Baz', image: require('../images/red_1.png')},
              {name: 'Foo2', description: 'Foooooooo', image: require('../images/blue_2.png')},
              {name: 'Bar2', description: 'Baaar', image: require('../images/blue_2.png')},
              {name: 'Baz2', description: 'Baz', image: require('../images/blue_2.png')},
              {name: 'Foo3', description: 'Foooooooo', image: require('../images/green_3.png')},
              {name: 'Bar3', description: 'Baaar', image: require('../images/green_3.png')},
              {name: 'Baz3', description: 'Baz', image: require('../images/green_3.png')},
              {name: 'Foo4', description: 'Foooooooo', image: require('../images/orange_4.png')},
              {name: 'Bar4', description: 'Baaar', image: require('../images/orange_4.png')},
              {name: 'Baz4', description: 'Baz', image: require('../images/orange_4.png')}];

class Recipes extends React.Component {
  render() {
    return (
      <div>
        <input type="text" name="search" className="recipe-search"/>
        <RecipeList items={recipes}/>
      </div>
    );
  }
}

export default Recipes;