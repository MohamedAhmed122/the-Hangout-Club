import { combineReducers } from "redux";

import eventReducer from  './event/eventReducer'

import modalReducer from './Modal/ModalReducer'

const rootReducer = combineReducers({
    event : eventReducer,
    modals: modalReducer
});

export default rootReducer;