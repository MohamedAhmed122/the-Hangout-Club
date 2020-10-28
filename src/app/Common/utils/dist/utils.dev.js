"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleColor = exports.delay = void 0;

var delay = function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

exports.delay = delay;

var handleColor = function handleColor(category) {
  if (category === 'drinks') return 'orange';
  if (category === 'culture') return 'green';
  if (category === 'film') return 'yellow';
  if (category === 'food') return 'pink';
  if (category === 'music') return 'violet';
  if (category === 'travel') return 'blue';
  if (category === 'education') return 'teal';
};

exports.handleColor = handleColor;