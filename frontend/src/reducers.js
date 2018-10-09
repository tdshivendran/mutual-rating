import { combineReducers } from 'redux';
import dataReducer from './app/ducks/data';
import uiReducer from './app/ducks/ui';

// Assign reducer to different parts of the application store
const rootReducer = combineReducers({
    data : dataReducer,
    ui : uiReducer
});

export default rootReducer;