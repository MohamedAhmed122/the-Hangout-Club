"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncActionError = exports.asyncActionFinish = exports.asyncActionStart = void 0;

var _AsyncType = require("./AsyncType");

var asyncActionStart = function asyncActionStart() {
  return {
    type: _AsyncType.ASYNC_ACTION_START
  };
};

exports.asyncActionStart = asyncActionStart;

var asyncActionFinish = function asyncActionFinish() {
  return {
    type: _AsyncType.ASYNC_ACTION_FINISH
  };
};

exports.asyncActionFinish = asyncActionFinish;

var asyncActionError = function asyncActionError(error) {
  console.log(error);
  return {
    type: _AsyncType.ASYNC_ACTION_ERROR,
    payload: error
  };
}; // const error = error=>{
//     console.log(error)
//     return{
//         type: ASYNC_ACTION_ERROR,
//         payload : error
//     }
// }


exports.asyncActionError = asyncActionError;