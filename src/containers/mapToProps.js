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
    onLoadMore: (offset, query) => {
      fetch(`http://localhost:3000/api/recipes?offset=${offset}&limit=11&q=${query}`)
        .then(response => response.json())
        .then(response => {
          dispatch(loadRecipeApiCreator.success(response));
        }, (err) => {
          dispatch(loadRecipeApiCreator.error(err));
        });

      dispatch(loadRecipeApiCreator.start(offset));
    },
    onSearchChanged: (offset, event) => {
      //dual search:
      // search in the backend to get many results ...
      fetch(`http://localhost:3000/api/recipes?offset=${offset}&limit=11&q=${event.target.value}`)
        .then(response => response.json())
        .then(response => {
          dispatch(loadRecipeApiCreator.success(response));
        }, (err) => {
          dispatch(loadRecipeApiCreator.error(err));
        });
      // ... search also in local results for immediate response
      dispatch(queryRecipeActionCreator(event.target.value));
      
      // show spinner
      dispatch(loadRecipeApiCreator.start(offset));
    }
  }
};

const search = new SearchRecipesService();

export const mapStateToProps = (state, dispatch) => {
  //combine recipes data and callbacks
  const combinedProps = Object.assign({
    allRecipes: search.filterRecipes(state.SearchReducer.query, state.RecipeReducer),
    isFetching: state.LoadMoreRecipesReducer.isFetching,
    query: state.SearchReducer.query
  }, mapDispatchToProps(dispatch));

  return combinedProps;
};
