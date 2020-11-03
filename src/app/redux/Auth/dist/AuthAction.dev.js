"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOutUser = exports.verifyAuth = exports.signInUser = void 0;

var _AuthType = require("./AuthType");

var _firebase = _interopRequireDefault(require("../../firebase/firebase.config"));

var _AsyncType = require("../Async/AsyncType");

var _FirestoreServices = require("../../firebase/FirestoreServices");

var _ProfileAction = require("../Profile/ProfileAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var auth = _firebase["default"].auth();

var signInUser = function signInUser(user) {
  return {
    type: _AuthType.SIGN_IN_USER,
    payload: user
  };
};

exports.signInUser = signInUser;

var verifyAuth = function verifyAuth() {
  return function (dispatch) {
    return auth.onAuthStateChanged(function (user) {
      if (user) {
        dispatch(signInUser(user));
        dispatch({
          type: _AsyncType.APP_LOADED
        });
        var profileRef = (0, _FirestoreServices.getUserProfile)(user.uid);
        profileRef.onSnapshot(function (snapShot) {
          dispatch((0, _ProfileAction.ListenToUserProfile)((0, _FirestoreServices.dataFromSnapshot)(snapShot)));
        });
        dispatch({
          type: _AsyncType.APP_LOADED
        });
      } else {
        dispatch(signOutUser());
        dispatch({
          type: _AsyncType.APP_LOADED
        });
      }
    });
  };
};

exports.verifyAuth = verifyAuth;

var signOutUser = function signOutUser() {
  return {
    type: _AuthType.SIGN_OUT_USER
  };
};

exports.signOutUser = signOutUser;