/*
 * Contains business logic for Recipes presentation classes
 */

import { connect } from 'react-redux'
import { starRecipeActionCreator, queryRecipeActionCreator } from '../actions/recipeActionCreators'
import RecipesList from '../components/RecipesList'
import SearchRecipesService from './../services/SearchRecipesService.js'

const search = new SearchRecipesService();

const applyFilters = (searchQuery, allRecipes) => {
  return search.filterRecipes(searchQuery, allRecipes);
};

const mapStateToProps = (state) => {
  return {
    allRecipes: applyFilters(state.SearchReducer.query, state.RecipeReducer)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStarClick: (recipeId) => {
      dispatch(starRecipeActionCreator(recipeId));
    },
    onSearchChanged: (event) => {
      dispatch(queryRecipeActionCreator(event.target.value))
    }
  }
};

const FilteredRecipesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);

export default FilteredRecipesContainer;
