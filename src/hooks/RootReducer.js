import { combineReducers } from 'redux';
import HeatMapReducer from './HeatMapReducer'
import UpdateReducer from './UpdateReducer'
import WidgetReducer from './WidgetReducer';
import WMenuReducer from "./WMenuReducer";
import MenuReducer from "./MenuReducer";

// combines update, widget and heatmap reducers
const RootReducer = combineReducers({
    HeatMapReducer,
    UpdateReducer,
    WidgetReducer,
    WMenuReducer,
    MenuReducer,
});

export default RootReducer