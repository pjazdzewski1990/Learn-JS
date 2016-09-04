import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';

class RecipeList extends React.Component {
  render() {
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
}

export default RecipeList;