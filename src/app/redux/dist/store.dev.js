"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _rootReducer = _interopRequireDefault(require("./root-reducer"));

var _AuthAction = require("./Auth/AuthAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import logger from "redux-logger";
var middleWare = [_reduxThunk["default"]];

var Store = function Store() {
  var store = (0, _redux.createStore)(_rootReducer["default"], (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(void 0, middleWare)));
  store.dispatch((0, _AuthAction.verifyAuth)());
  return store;
};

exports.Store = Store;