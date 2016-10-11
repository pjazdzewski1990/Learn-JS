/*
 * Reducer updating Recipe state
 */

import {ActionTypes} from '../actions/const'

const RecipeReducer = (recipesState = [], action) => {
  switch (action.type) {
    case ActionTypes.STAR_ITEM:

      const modifiedState = recipesState.map((currentRecipes) => {
        if(currentRecipes.id == action.recipeId) {
          const modifiedItem = Object.assign({}, currentRecipes);
          modifiedItem.isStarred = !modifiedItem.isStarred;
          return modifiedItem;
        } else {
          return currentRecipes;
        }
      });

      return modifiedState;
    default:
      return recipesState;
  }
};

export default RecipeReducer;
