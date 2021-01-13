"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ProfileType = require("./ProfileType");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  currentUserProfile: null,
  selectedUserProfile: null,
  photos: [],
  followers: [],
  followings: []
};

var ProfileReducer = function ProfileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _ProfileType.LISTEN_TO_CURRENT_USER_PROFILE:
      return _objectSpread({}, state, {
        currentUserProfile: payload
      });

    case _ProfileType.LISTEN_TO_SELECTED_USER_PROFILE:
      return _objectSpread({}, state, {
        selectedUserProfile: payload
      });

    case _ProfileType.LISTEN_TO_USER_PHOTO:
      return _objectSpread({}, state, {
        photos: payload
      });

    case _ProfileType.LISTEN_TO_FOLLOWERS:
      return _objectSpread({}, state, {
        followers: payload
      });

    case _ProfileType.LISTEN_TO_FOLLOWINGS:
      return _objectSpread({}, state, {
        followings: payload
      });

    default:
      return state;
  }
};

var _default = ProfileReducer;
exports["default"] = _default;