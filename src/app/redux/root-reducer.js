import { combineReducers } from "redux";

import eventReducer from  './event/eventReducer'

import modalReducer from './Modal/ModalReducer'

import authReducer from './Auth/AuthReducer'

const rootReducer = combineReducers({
    event : eventReducer,
    modals: modalReducer,
    auth: authReducer
});

export default rootReducer;