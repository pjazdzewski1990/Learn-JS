require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RecipeBox from './RecipeBox.js';
import {mapDispatchToProps, mapStateToProps} from '../containers/mapToProps';

@connect(mapStateToProps, mapDispatchToProps)
class RecipesList extends Component {
    static propTypes = {
      allRecipes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        isStarred: PropTypes.bool.isRequired,
        isError: PropTypes.bool // is optional
      })).isRequired,
      onStarClick: React.PropTypes.func.isRequired,
      onSearchChanged: React.PropTypes.func.isRequired
    }

    render() {
        const {onStarClick, onSearchChanged} = this.props;

        const recipesBoxes = this.props.allRecipes.map(recipe => {
          return (
            <RecipeBox key={recipe.name} recipe={recipe} onStarClick={onStarClick}/>
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

export default RecipesList;
