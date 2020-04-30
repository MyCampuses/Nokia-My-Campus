import { combineReducers } from 'redux';
import HeatMapReducer from './HeatMapReducer'
import UpdateReducer from './UpdateReducer'

// combines update and heatmap reducers
export default combineReducers({ HeatMapReducer, UpdateReducer})