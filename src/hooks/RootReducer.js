import { combineReducers } from 'redux';
import HeatMapReducer from './HeatMapReducer'
import UpdateReducer from './UpdateReducer'
import WidgetReducer from './WidgetReducer';

// combines update and heatmap reducers
const RootReducer = combineReducers({ 
    HeatMapReducer, 
    UpdateReducer, 
    WidgetReducer 
});

export default RootReducer