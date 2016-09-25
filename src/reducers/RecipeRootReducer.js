/*
 * Combine all available reducers to a single root reducer.
 */
import { combineReducers } from 'redux';
import RecipeReducer from './RecipeReducer';
import SearchReducer from './SearchReducer';

const reducers = combineReducers({RecipeReducer, SearchReducer});
export default reducers;
