/*
 * Reducer updating recipe list from server
 */

import {ActionTypes} from '../actions/const'

const LoadMoreRecipesReducer = (currentState = {isFetching: false}, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_RECIPES_START:
      return {isFetching: true};
    case ActionTypes.LOAD_RECIPES_ERROR:
      return {isFetching: false};
    case ActionTypes.LOAD_RECIPES_SUCCESS:
      return {isFetching: false};
    default:
      return currentState;
  }
};

export default LoadMoreRecipesReducer;
