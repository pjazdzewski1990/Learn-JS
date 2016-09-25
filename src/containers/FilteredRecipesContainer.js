/*
 * Contains business logic for Recipes presentation classes
 */

import { connect } from 'react-redux'
import { starRecipeActionCreator } from '../actions/RecipeActionCreators'
import RecipesList from '../components/RecipesList'

const applyFilters = (allRecipes) => {
  return allRecipes;
};

const mapStateToProps = (state) => {
  return {
    allRecipes: applyFilters(state.RecipeReducer)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStarClick: (recipeId) => {
      dispatch(starRecipeActionCreator(recipeId))
    }
  }
};

const FilteredRecipesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);

export default FilteredRecipesContainer;
