"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = exports["default"] = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/auth");

require("firebase/database");

require("firebase/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyCBquklNgBd7lFSt5FE_h_gJqEwePL0crs",
  authDomain: "hangout-club.firebaseapp.com",
  databaseURL: "https://hangout-club.firebaseio.com",
  projectId: "hangout-club",
  storageBucket: "hangout-club.appspot.com",
  messagingSenderId: "384948079088",
  appId: "1:384948079088:web:35450109b017c1c1187535",
  measurementId: "G-9QFJXLR1M0"
}; // Initialize Firebase

_app["default"].initializeApp(firebaseConfig);

_app["default"].firestore();

var _default = _app["default"];
exports["default"] = _default;

var db = _app["default"].firestore();

exports.db = db;