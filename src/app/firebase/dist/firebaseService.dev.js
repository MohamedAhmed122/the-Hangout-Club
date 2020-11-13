"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewComment = exports.deleteFromFirbaseStorage = exports.uploadToFirebaseStorage = exports.updatePassword = exports.SocialLogin = exports.RegisterInFirebase = exports.signOutUser = exports.signInWithEmail = void 0;

var _reactToastify = require("react-toastify");

var _firebase = _interopRequireDefault(require("./firebase.config"));

var _FirestoreServices = require("./FirestoreServices");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var auth = _firebase["default"].auth(); // const dispatch = useDispatch()


var signInWithEmail = function signInWithEmail(user) {
  return auth.signInWithEmailAndPassword(user.email, user.password);
};

exports.signInWithEmail = signInWithEmail;

var signOutUser = function signOutUser() {
  return auth.signOut();
};

exports.signOutUser = signOutUser;

var RegisterInFirebase = function RegisterInFirebase(cred) {
  var response;
  return regeneratorRuntime.async(function RegisterInFirebase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(auth.createUserWithEmailAndPassword(cred.email, cred.password));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.user.updateProfile({
            displayName: cred.displayName
          }));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap((0, _FirestoreServices.setUserProfileData)(response.user));

        case 8:
          return _context.abrupt("return", _context.sent);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

exports.RegisterInFirebase = RegisterInFirebase;

var SocialLogin = function SocialLogin(selectedProvider) {
  var provider, result;
  return regeneratorRuntime.async(function SocialLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (selectedProvider === 'facebook') {
            provider = new _firebase["default"].auth.FacebookAuthProvider();
          }

          if (selectedProvider === 'google') {
            provider = new _firebase["default"].auth.GoogleAuthProvider();
          }

          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(auth.signInWithPopup(provider));

        case 5:
          result = _context2.sent;
          console.log(result);

          if (result.additionalUserInfo.isNewUser) {
            (0, _FirestoreServices.setUserProfileData)(result.user);
          }

          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](2);

          _reactToastify.toast.error('Oops, Something Went Wrong With Social Logins');

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 10]]);
};

exports.SocialLogin = SocialLogin;

var updatePassword = function updatePassword(password) {
  var user = _firebase["default"].auth().currentUser;

  return user.updatePassword(password);
};

exports.updatePassword = updatePassword;

var uploadToFirebaseStorage = function uploadToFirebaseStorage(file, fileName) {
  var user = _firebase["default"].auth().currentUser;

  var storageRef = _firebase["default"].storage().ref();

  return storageRef.child("".concat(user.uid, "/user_images/").concat(fileName)).put(file);
};

exports.uploadToFirebaseStorage = uploadToFirebaseStorage;

var deleteFromFirbaseStorage = function deleteFromFirbaseStorage(fileName) {
  var userUid = _firebase["default"].auth().currentUser.uid;

  var storageRef = _firebase["default"].storage().ref();

  return storageRef.child("".concat(userUid, "/user_images/").concat(fileName))["delete"]();
};

exports.deleteFromFirbaseStorage = deleteFromFirbaseStorage;

var addNewComment = function addNewComment(eventId, comment) {
  var user = _firebase["default"].auth().currentUser;

  var newComment = {
    displayName: user.displayName,
    uid: user.uid,
    photoURL: user.photoURL,
    date: Date.now(),
    comment: comment
  };
  return _firebase["default"].database().ref("chat/".concat(eventId)).push(newComment);
};

exports.addNewComment = addNewComment;