/*
 * Contains business logic for Recipes presentation classes
 */

import { starRecipeActionCreator, starRecipeApiCreator, queryRecipeActionCreator, loadRecipeApiCreator } from '../actions/recipeActionCreators';
import SearchRecipesService from './../services/SearchRecipesService.js';
import fetch from 'isomorphic-fetch';
import 'es6-promise';

export const mapDispatchToProps = (dispatch) => {
  return {
    onStarClick: (recipeId) => {
      fetch(`http://localhost:3000/api/recipes/${recipeId}/star`) //TODO: get
        .then(response => {
          if(response.status == 200) {
            dispatch(starRecipeApiCreator.success(recipeId));
          } else {
            dispatch(starRecipeApiCreator.error(recipeId));
          }
        });

      dispatch(starRecipeActionCreator(recipeId));
    },
    onLoadMore: (offset) => {
      fetch(`http://localhost:3000/api/recipes?offset=${offset}&limit=11`)
        .then(response => response.json())
        .then(response => {
          dispatch(loadRecipeApiCreator.success(response));
        }, (err) => {
          dispatch(loadRecipeApiCreator.error(err));
        });

      dispatch(loadRecipeApiCreator.start(offset));
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
    allRecipes: search.filterRecipes(state.SearchReducer.query, state.RecipeReducer),
    isFetching: state.LoadMoreRecipesReducer.isFetching
  }, mapDispatchToProps(dispatch));

  return combinedProps;
};
