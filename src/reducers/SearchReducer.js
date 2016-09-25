/*
 * Reducer updating search queries
 */

import {ActionTypes} from '../actions/const'

const SearchReducer = (currentState = {query: ''}, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SEARCH_QUERY:
      return {query: action.searchQuery};
    default:
      return currentState;
  }
};

export default SearchReducer;
