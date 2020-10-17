import { combineReducers } from "redux";

import eventReducer from  './event/eventReducer'

const rootReducer = combineReducers({
    event : eventReducer
});

export default rootReducer;