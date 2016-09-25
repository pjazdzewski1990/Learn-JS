require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import RecipeBox from './RecipeBox.js';
import SearchRecipesService from './../services/SearchRecipesService.js';

class RecipesList extends Component {
    componentWillMount() {
      this.setState({recipesToShow: this.props.allRecipes});
      this.search = new SearchRecipesService();
    }
    handleSearch(event) {
      const searchQuery = event.target.value;
      const allRecipes = this.props.allRecipes;
      this.setState({recipesToShow: this.search.filterRecipes(searchQuery, allRecipes)});
    }
    render() {
        const {onStarClick} = this.props;
        console.log('Building list with ', this.state.recipesToShow);
        console.log('Props are ', this.props.allRecipes);
        const recipesBoxes = this.state.recipesToShow.map(recipe => {
          return (
            <RecipeBox key={recipe.name} recipe={recipe} starHandler={onStarClick}/>
          );
        });
        return (
          <div className="recipeList">
				    <input type="text"
              placeholder="Search recipes..."
              onChange={this.handleSearch.bind(this)} />
            <div id="cen">
              {recipesBoxes}
            </div>
			    </div>
        );
    }
}

RecipesList.propTypes = {
    allRecipes: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default RecipesList;
