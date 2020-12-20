"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CancelUserPlace = exports.userJoinEvent = exports.deletePhotoFromCollection = exports.setPhotoToMain = exports.getUserPhotos = exports.updateUserProfilePhoto = exports.updateProfile = exports.getUserProfile = exports.setUserProfileData = exports.cancelEvent = exports.deleteEventFromFirestore = exports.updateEventToFirestore = exports.addEventToFirestore = exports.listenToEventFromFirestore = exports.listenToEventsFromFirestore = exports.dataFromSnapshot = void 0;

var _firebase = _interopRequireDefault(require("./firebase.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var db = _firebase.default.firestore();

var dataFromSnapshot = function dataFromSnapshot(Snapshot) {
  if (!Snapshot.exists) return undefined;
  var data = Snapshot.data(); // to check the date and convert it from timeStamp to javaScript date

  for (var prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof _firebase.default.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return _objectSpread({}, data, {
    id: Snapshot.id
  });
};

exports.dataFromSnapshot = dataFromSnapshot;

var listenToEventsFromFirestore = function listenToEventsFromFirestore(predicate) {
  var user = _firebase.default.auth().currentUser; // to set  data from the db


  var event = db.collection("events").orderBy("date");

  switch (predicate.get("filter")) {
    case "isGoing":
      return event.where("attendeeId", "array-contains", user.uid).where("date", ">=", predicate.get("startDate"));

    case "isHost":
      return event.where("hostUid", "==", user.uid).where("date", ">=", predicate.get("startDate"));

    default:
      return event.where("date", ">=", predicate.get("startDate"));
  }
};

exports.listenToEventsFromFirestore = listenToEventsFromFirestore;

var listenToEventFromFirestore = function listenToEventFromFirestore(eventId) {
  return db.collection('events').doc(eventId);
};

exports.listenToEventFromFirestore = listenToEventFromFirestore;

var addEventToFirestore = function addEventToFirestore(event) {
  var user = _firebase.default.auth().currentUser;

  return db.collection('events').add(_objectSpread({}, event, {
    hostUid: user.uid,
    hostedBy: user.displayName,
    hostPhotoURL: user.photoURL || null,
    attendees: _firebase.default.firestore.FieldValue.arrayUnion({
      id: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL || null
    }),
    attendeeId: _firebase.default.firestore.FieldValue.arrayUnion(user.uid)
  }));
};

exports.addEventToFirestore = addEventToFirestore;

var updateEventToFirestore = function updateEventToFirestore(event) {
  return db.collection('events').doc(event.id).update(event);
};

exports.updateEventToFirestore = updateEventToFirestore;

var deleteEventFromFirestore = function deleteEventFromFirestore(event) {
  return db.collection('events').doc(event.id).delete();
};

exports.deleteEventFromFirestore = deleteEventFromFirestore;

var cancelEvent = function cancelEvent(event) {
  return db.collection('events').doc(event.id).update({
    isCanceled: !event.isCanceled
  });
};

exports.cancelEvent = cancelEvent;

var setUserProfileData = function setUserProfileData(user) {
  db.collection('users').doc(user.uid).set({
    displayName: user.displayName,
    email: user.email,
    createdAt: _firebase.default.firestore.FieldValue.serverTimestamp()
  });
};

exports.setUserProfileData = setUserProfileData;

var getUserProfile = function getUserProfile(userId) {
  return db.collection('users').doc(userId);
};

exports.getUserProfile = getUserProfile;

var updateProfile = function updateProfile(value) {
  var user;
  return regeneratorRuntime.async(function updateProfile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          user = _firebase.default.auth().currentUser;
          _context.prev = 1;

          if (!(user.displayName !== value.displayName)) {
            _context.next = 5;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(user.updateProfile({
            displayName: value.displayName
          }));

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(db.collection("users").doc(user.uid).update(value));

        case 7:
          return _context.abrupt("return", _context.sent);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          throw _context.t0;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.updateProfile = updateProfile;

var updateUserProfilePhoto = function updateUserProfilePhoto(downloadURL, fileName) {
  var user, userDocRef, userDoc;
  return regeneratorRuntime.async(function updateUserProfilePhoto$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          user = _firebase.default.auth().currentUser;
          userDocRef = db.collection("users").doc(user.uid);
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(userDocRef.get());

        case 5:
          userDoc = _context2.sent;

          if (userDoc.data().photoURL) {
            _context2.next = 11;
            break;
          }

          _context2.next = 9;
          return regeneratorRuntime.awrap(db.collection("users").doc(user.uid).update({
            photoURL: downloadURL
          }));

        case 9:
          _context2.next = 11;
          return regeneratorRuntime.awrap(user.updateProfile({
            photoURL: downloadURL
          }));

        case 11:
          _context2.next = 13;
          return regeneratorRuntime.awrap(db.collection("users").doc(user.uid).collection("photos").add({
            name: fileName,
            url: downloadURL
          }));

        case 13:
          return _context2.abrupt("return", _context2.sent);

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](2);
          throw _context2.t0;

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 16]]);
};

exports.updateUserProfilePhoto = updateUserProfilePhoto;

var getUserPhotos = function getUserPhotos(userId) {
  return db.collection('users').doc(userId).collection('photos');
};

exports.getUserPhotos = getUserPhotos;

var setPhotoToMain = function setPhotoToMain(photo) {
  var user;
  return regeneratorRuntime.async(function setPhotoToMain$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          user = _firebase.default.auth().currentUser;
          _context3.next = 4;
          return regeneratorRuntime.awrap(db.collection('users').doc(user.uid).update({
            photoURL: photo.url
          }));

        case 4:
          _context3.next = 6;
          return regeneratorRuntime.awrap(user.updateProfile({
            photoURL: photo.url
          }));

        case 6:
          return _context3.abrupt("return", _context3.sent);

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          throw _context3.t0;

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.setPhotoToMain = setPhotoToMain;

var deletePhotoFromCollection = function deletePhotoFromCollection(photoId) {
  var userUid = _firebase.default.auth().currentUser.uid;

  return db.collection("users").doc(userUid).collection("photos").doc(photoId).delete();
};

exports.deletePhotoFromCollection = deletePhotoFromCollection;

var userJoinEvent = function userJoinEvent(event) {
  var user = _firebase.default.auth().currentUser;

  return db.collection('events').doc(event.id).update({
    attendees: _firebase.default.firestore.FieldValue.arrayUnion({
      id: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL || null
    }),
    attendeeId: _firebase.default.firestore.FieldValue.arrayUnion(user.uid)
  });
};

exports.userJoinEvent = userJoinEvent;

var CancelUserPlace = function CancelUserPlace(event) {
  var user, eventDoc;
  return regeneratorRuntime.async(function CancelUserPlace$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          user = _firebase.default.auth().currentUser;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(db.collection('events').doc(event.id).get());

        case 4:
          eventDoc = _context4.sent;
          return _context4.abrupt("return", db.collection('events').doc(event.id).update({
            attendeeId: _firebase.default.firestore.FieldValue.arrayRemove(user.uid),
            attendees: eventDoc.data().attendees.filter(function (attendee) {
              return attendee.id !== user.uid;
            })
          }));

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          throw _context4.t0;

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.CancelUserPlace = CancelUserPlace;