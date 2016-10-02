/*
 * Contains business logic for Recipes presentation classes
 */

import { starRecipeActionCreator, queryRecipeActionCreator } from '../actions/recipeActionCreators';
import SearchRecipesService from './../services/SearchRecipesService.js'

export const mapDispatchToProps = (dispatch) => {
  return {
    onStarClick: (recipeId) => {
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
