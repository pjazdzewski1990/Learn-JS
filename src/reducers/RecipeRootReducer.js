/*
 * Combine all available reducers to a single root reducer.
 */
import { combineReducers } from 'redux';
import RecipeReducer from './RecipeReducer';

const reducers = combineReducers({RecipeReducer});
export default reducers;
