/*
 * Reducer updating Recipe state
 */

import { ActionTypes } from '../actions/const';
import { starRecipeApiCreator } from '../actions/recipeActionCreators';

const RecipeReducer = (recipesState = [], action) => {
  switch (action.type) {
    case ActionTypes.STAR_ITEM:
      // modify the local state of fast updates
      return modify(recipesState, action.recipeId);
    case ActionTypes.STAR_ITEM_ERROR:
      //revert the change
      const modified = modify(recipesState, action.recipeId);
      return setError(modified, action.recipeId);
    case ActionTypes.STAR_ITEM_SUCCESS:
      console.log('Success!');
    default:
      return recipesState;
  }
};

const setError = (state, recipeId) => {
  const modifiedState = state.map((currentRecipes) => {
    if(currentRecipes.id == recipeId) {
      const modifiedItem = Object.assign({}, currentRecipes);
      modifiedItem.isError = true;
      return modifiedItem;
    } else {
      return currentRecipes;
    }
  });

  return modifiedState;
};

const modify = (state, recipeId) => { // TODO: make more general
  const modifiedState = state.map((currentRecipes) => {
    if(currentRecipes.id == recipeId) {
      const modifiedItem = Object.assign({}, currentRecipes);
      modifiedItem.isStarred = !modifiedItem.isStarred;
      return modifiedItem;
    } else {
      return currentRecipes;
    }
  });

  return modifiedState;
};

export default RecipeReducer;
