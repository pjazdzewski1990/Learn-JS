require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

var RecipeList = React.createClass({
  render: function() {
    return (
      <ul className="recipe-list">
        <li>
          <ul className="recipe-list">
            {
              this.props.items.map(item =>
                <li key={item.name}>
                  <span>{item.name}</span>
                </li>
              )
            }
          </ul>
        </li>
      </ul>
    );
  }
});

export default RecipeList;