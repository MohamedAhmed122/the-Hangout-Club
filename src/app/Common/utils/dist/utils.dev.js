"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleWidthAndHeight = exports.handleColor = exports.delay = void 0;

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

var handleWidthAndHeight = function handleWidthAndHeight(w) {
  if (w > 1200) return 600;
  if (w > 900 && w < 1200) return 400;
  if (w > 500 && w < 900) return 300;
  if (w > 380 && w < 500) return 270;
};

exports.handleWidthAndHeight = handleWidthAndHeight;