import {combineReducers} from 'redux';

import {charts} from './charts.reducer';

const rootReducer = combineReducers({
    charts,
});

export default rootReducer;