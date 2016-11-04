/*
 * Combine all available reducers to a single root reducer.
 */
import { combineReducers } from 'redux';
import RecipeReducer from './RecipeReducer';
import SearchReducer from './SearchReducer';
import LoadMoreRecipesReducer from './LoadMoreRecipesReducer';

const reducers = combineReducers({RecipeReducer, SearchReducer, LoadMoreRecipesReducer});
export default reducers;
