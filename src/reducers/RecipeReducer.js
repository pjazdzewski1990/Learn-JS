/*
 * Reducer updating Recipe state
 */

import { ActionTypes } from '../actions/const';

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
      return recipesState;

    case ActionTypes.LOAD_RECIPES_SUCCESS:
      //merge local and server-side data together
      return mergeData(action.loaded, recipesState);

    default:
      return recipesState;
  }
};

const mergeData = (backendData, frontendData) => {
  const existing = frontendData.map((x) => x.id);
  const newItems = backendData.filter((item) => {
    return !existing.includes(item.id);
  });
  return frontendData.concat(newItems);
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
