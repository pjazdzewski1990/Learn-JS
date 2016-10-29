/*
 * Reducer updating Recipe state
 */

import { ActionTypes } from '../actions/const';
import { starRecipeApiCreator } from '../actions/recipeActionCreators';

const RecipeReducer = (recipesState = [], action) => {
  switch (action.type) {
    case ActionTypes.STAR_ITEM:
      // modify the local state of fast updates
      const starredLocalState = toggleStar(recipesState, action.recipeId);
      return unsetError(starredLocalState, action.recipeId);
    case ActionTypes.STAR_ITEM_ERROR:
      //revert the change
      const unstarredLocalState = toggleStar(recipesState, action.recipeId);
      return setError(unstarredLocalState, action.recipeId);
    case ActionTypes.STAR_ITEM_SUCCESS:
      // do nothing
    default:
      return recipesState;
  }
};

const modify = (state, recipeId, updateF) => { 
  const modifiedState = state.map((currentRecipe) => {
    if(currentRecipe.id == recipeId) {
      return updateF(currentRecipe);
    } else {
      return currentRecipe;
    }
  });

  return modifiedState;
};

const setError = (state, recipeId) => {
  return modify(state, recipeId, (currentRecipe) => {
    const modifiedItem = Object.assign({}, currentRecipe);
    modifiedItem.isError = true;
    return modifiedItem;
  });
};

const unsetError = (state, recipeId) => {
  return modify(state, recipeId, (currentRecipe) => {
    console.log('UNSET ');
    const modifiedItem = Object.assign({}, currentRecipe);
    modifiedItem.isError = false;
    return modifiedItem;
  });
};

const toggleStar = (state, recipeId) => {
  return modify(state, recipeId, (currentRecipe) => {
    const modifiedItem = Object.assign({}, currentRecipe);
    modifiedItem.isStarred = !modifiedItem.isStarred;
    return modifiedItem;
  });
};

export default RecipeReducer;
