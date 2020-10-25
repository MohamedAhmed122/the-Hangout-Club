"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

var _FirestoreServices = require("../firebase/FirestoreServices");

var _AsyncAction = require("../redux/Async/AsyncAction");

var UseFirestoreDoc = function UseFirestoreDoc(_ref) {
  var query = _ref.query,
      data = _ref.data,
      deps = _ref.deps;
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    dispatch((0, _AsyncAction.asyncActionStart)());
    var unsubscribe = query().onSnapshot(function (snapshot) {
      if (!snapshot.exists) {
        dispatch((0, _AsyncAction.asyncActionError)({
          code: '',
          message: ''
        }));
        return;
      }

      data((0, _FirestoreServices.dataFromSnapshot)(snapshot));
      dispatch((0, _AsyncAction.asyncActionFinish)());
    }, function (error) {
      return dispatch((0, _AsyncAction.asyncActionError)(error));
    });
    return function () {
      unsubscribe();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

var _default = UseFirestoreDoc;
exports["default"] = _default;