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
              this.props.items.map(item => {
                return (<li key={item.name}>
                  <img src={item.image} alt={item.description} />
                </li>);
              })
            }
          </ul>
        </li>
      </ul>
    );
  }
});

export default RecipeList;