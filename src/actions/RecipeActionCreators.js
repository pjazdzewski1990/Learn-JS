/*
 * Holds action creators - functions that will be used to create actions which will be later passed to reducers
 */
import {ActionTypes} from './const'

export const starRecipeActionCreator = (recipeId) => {
  return {
    type: ActionTypes.STAR_ITEM,
    recipeId: recipeId
  };
};
