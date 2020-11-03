"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _eventReducer = _interopRequireDefault(require("./event/eventReducer"));

var _ModalReducer = _interopRequireDefault(require("./Modal/ModalReducer"));

var _AuthReducer = _interopRequireDefault(require("./Auth/AuthReducer"));

var _AsyncReducer = _interopRequireDefault(require("./Async/AsyncReducer"));

var _calenderReducer = _interopRequireDefault(require("./calender/calenderReducer"));

var _ProfileReducer = _interopRequireDefault(require("./Profile/ProfileReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  event: _eventReducer["default"],
  modals: _ModalReducer["default"],
  auth: _AuthReducer["default"],
  async: _AsyncReducer["default"],
  calender: _calenderReducer["default"],
  profile: _ProfileReducer["default"]
});
var _default = rootReducer;
exports["default"] = _default;