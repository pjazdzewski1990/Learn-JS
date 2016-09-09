require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import RecipeBox from './RecipeBox.js';

class RecipesList extends Component {
    render() {
        const recipesBoxes = this.props.data.map(recipe => {
            return (
                <RecipeBox recipeName={recipe.name} description={recipe.description} image={recipe.image} />
            )
        });
        return (
            <div className="recipeList">
				<input type="text" placeholder="Search recipes..." />
				<div id="cen">
					{recipesBoxes}
				</div>
			</div>
        )
    }
}

RecipesList.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default RecipesList;
