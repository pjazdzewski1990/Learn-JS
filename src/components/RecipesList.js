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
      isFetching: PropTypes.bool.isRequired,
      onStarClick: React.PropTypes.func.isRequired,
      onSearchChanged: React.PropTypes.func.isRequired,
      onLoadMore: React.PropTypes.func.isRequired
    }

    render() {
        console.log('Root prosp', this.props);
        const {onStarClick, onSearchChanged, onLoadMore} = this.props;

        //TODO: make them appear in a more pleasent way
        const recipesBoxes = this.props.allRecipes.map(recipe => {
          return (
            <RecipeBox key={recipe.name} recipe={recipe} onStarClick={onStarClick}/>
          );
        });

        //TODO: make it pretty
        const more = (this.props.isFetching)? 
          <strong>Fetching</strong> 
        : 
          <button onClick={onLoadMore.bind(this, this.props.allRecipes.length)}>
            Load more recipes
          </button>;

        return (
          <div className="recipeList">
				    <input type="text"
              placeholder="Search recipes..."
              onChange={onSearchChanged} />
            <div id="cen">
              {recipesBoxes}
            </div>
            {more}
			    </div>
        );
    }
}

export default RecipesList;
