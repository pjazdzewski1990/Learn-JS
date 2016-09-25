/*
 * Reducer updating Recipe state
 */

import {ActionTypes} from '../actions/const'

const RecipeReducer = (currentState = [], action) => {
  switch (action.type) {
    case ActionTypes.STAR_ITEM:
      // find ...
      const idx = currentState.findIndex(item => item.id == action.recipeId);
      if(idx >= 0) {
        const starredRecipe = currentState[idx];
        // ... update ...
        starredRecipe.isStarred = !starredRecipe.isStarred;
        // ... build new state
        const newState = currentState.slice();
        newState[idx] = starredRecipe;

        return newState;
      } else {
        return currentState;
      }
    default:
      return currentState;
  }
};

export default RecipeReducer;
