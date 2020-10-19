import { combineReducers } from "redux";

import eventReducer from  './event/eventReducer'

import modalReducer from './Modal/ModalReducer'

import authReducer from './Auth/AuthReducer'

import asyncReducer from './Async/AsyncReducer'

import calenderReducer from './calender/calenderReducer'

const rootReducer = combineReducers({
    event : eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    calender: calenderReducer
});

export default rootReducer;