/*
 * Contains business logic for Recipes presentation classes
 */

import { starRecipeActionCreator, starRecipeApiCreator, queryRecipeActionCreator } from '../actions/recipeActionCreators';
import SearchRecipesService from './../services/SearchRecipesService.js';
import fetch from 'isomorphic-fetch';
import 'es6-promise';

export const mapDispatchToProps = (dispatch) => {
  return {
    onStarClick: (recipeId) => {
      fetch(`http://localhost:3000/api/recipes/${recipeId}/star`)
        .then(response => {
          if(response.status == 200) {
            dispatch(starRecipeApiCreator.success(recipeId));
          } else {
            dispatch(starRecipeApiCreator.error(recipeId));
          }
        });

      dispatch(starRecipeActionCreator(recipeId));
    },
    onSearchChanged: (event) => {
      dispatch(queryRecipeActionCreator(event.target.value))
    }
  }
};

const search = new SearchRecipesService();

export const mapStateToProps = (state, dispatch) => {
  //combine recipes data and callbacks

  const combinedProps = Object.assign({
    allRecipes: search.filterRecipes(state.SearchReducer.query, state.RecipeReducer)
  }, mapDispatchToProps(dispatch));

  return combinedProps;
};
