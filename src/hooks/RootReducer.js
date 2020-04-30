import { combineReducers } from 'redux';
import heatMapReducer from './HeatMapReducer'
import updateReducer from './updateReducer'

// combines update and heatmap reducers
const rootReducer = combineReducers({ heatMapReducer, updateReducer})
export default rootReducer;