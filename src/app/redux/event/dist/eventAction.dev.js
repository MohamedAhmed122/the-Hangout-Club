"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventComment = exports.deleteEvent = exports.updateEvent = exports.createEvent = exports.listenToEvents = exports.loadEvents = void 0;

var _eventType = require("./eventType");

var _delayAPI = _interopRequireDefault(require("../../API/delayAPI"));

var _AsyncAction = require("../Async/AsyncAction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadEvents = function loadEvents() {
  return function _callee(dispatch) {
    var event;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch((0, _AsyncAction.asyncActionStart)());
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _delayAPI["default"])());

          case 4:
            event = _context.sent;
            dispatch({
              type: _eventType.FETCH_EVENTS,
              payload: event
            });
            dispatch((0, _AsyncAction.asyncActionFinish)());
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            dispatch((0, _AsyncAction.asyncActionError)(_context.t0));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.loadEvents = loadEvents;

var listenToEvents = function listenToEvents(event) {
  return {
    type: _eventType.FETCH_EVENTS,
    payload: event
  };
};

exports.listenToEvents = listenToEvents;

var createEvent = function createEvent(event) {
  return {
    type: _eventType.CREATE_EVENT,
    payload: event
  };
};

exports.createEvent = createEvent;

var updateEvent = function updateEvent(event) {
  return {
    type: _eventType.UPDATE_EVENT,
    payload: event
  };
};

exports.updateEvent = updateEvent;

var deleteEvent = function deleteEvent(event) {
  return {
    type: _eventType.DELETE_EVENT,
    payload: event
  };
};

exports.deleteEvent = deleteEvent;

var getEventComment = function getEventComment(comment) {
  return {
    type: _eventType.GET_EVENT_COMMENT,
    payload: comment
  };
};

exports.getEventComment = getEventComment;