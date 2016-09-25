require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import RecipeBox from './RecipeBox.js';

class RecipesList extends Component {
    render() {
        const {onStarClick, onSearchChanged} = this.props;

        const recipesBoxes = this.props.allRecipes.map(recipe => {
          return (
            <RecipeBox key={recipe.name} recipe={recipe} starHandler={onStarClick}/>
          );
        });

        return (
          <div className="recipeList">
				    <input type="text"
              placeholder="Search recipes..."
              onChange={onSearchChanged} />
            <div id="cen">
              {recipesBoxes}
            </div>
			    </div>
        );
    }
}

RecipesList.propTypes = {
    allRecipes: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default RecipesList;
