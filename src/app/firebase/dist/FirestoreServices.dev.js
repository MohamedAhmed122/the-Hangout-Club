"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelEvent = exports.deleteEventFromFirestore = exports.updateEventToFirestore = exports.addEventToFirestore = exports.listenToEventFromFirestore = exports.listenToEventsFromFirestore = exports.dataFromSnapshot = void 0;

var _cuid = _interopRequireDefault(require("cuid"));

var _firebase = _interopRequireDefault(require("./firebase.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var db = _firebase["default"].firestore();

var dataFromSnapshot = function dataFromSnapshot(Snapshot) {
  if (!Snapshot.exists) return undefined;
  var data = Snapshot.data(); // to check the date and convert it from timeStamp to javaScript date

  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof _firebase["default"].firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return _objectSpread({}, data, {
    id: Snapshot.id
  });
};

exports.dataFromSnapshot = dataFromSnapshot;

var listenToEventsFromFirestore = function listenToEventsFromFirestore() {
  return db.collection('events');
};

exports.listenToEventsFromFirestore = listenToEventsFromFirestore;

var listenToEventFromFirestore = function listenToEventFromFirestore(eventId) {
  return db.collection('events').doc(eventId);
};

exports.listenToEventFromFirestore = listenToEventFromFirestore;

var addEventToFirestore = function addEventToFirestore(event) {
  return db.collection('events').add(_objectSpread({}, event, {
    hostedBy: 'Sasha',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/21.jpg',
    attendees: _firebase["default"].firestore.FieldValue.arrayUnion({
      id: (0, _cuid["default"])(),
      displayName: 'Sasha',
      photoURL: 'https://randomuser.me/api/portraits/women/21.jpg'
    })
  }));
};

exports.addEventToFirestore = addEventToFirestore;

var updateEventToFirestore = function updateEventToFirestore(event) {
  return db.collection('events').doc(event.id).update(event);
};

exports.updateEventToFirestore = updateEventToFirestore;

var deleteEventFromFirestore = function deleteEventFromFirestore(event) {
  return db.collection('events').doc(event.id)["delete"]();
};

exports.deleteEventFromFirestore = deleteEventFromFirestore;

var cancelEvent = function cancelEvent(event) {
  return db.collection('events').doc(event.id).update({
    isCanceled: !event.isCanceled
  });
};

exports.cancelEvent = cancelEvent;