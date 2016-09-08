'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genRgb = exports.genHex = undefined;

var _utils = require('./utils');

var _h2r = require('h2r');

var Hex = function Hex() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

var generate = function generate(f, time) {
  var arr = [];
  for (var i = 0; i < time; i++) {
    arr.push(f());
  }
  return arr;
};

var genHex = exports.genHex = (0, _utils.curry)(generate, Hex);

var genRgb = exports.genRgb = (0, _utils.compose)(_h2r.parseHex, genHex);