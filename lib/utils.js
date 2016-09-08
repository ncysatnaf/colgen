"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var curry = exports.curry = function curry(f) {
  for (var _len = arguments.length, fn = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fn[_key - 1] = arguments[_key];
  }

  return fn.length === f.length ? f.apply(undefined, fn) : curry.bind.apply(curry, [undefined, f].concat(fn));
};

var compose = exports.compose = function compose(f) {
  for (var _len2 = arguments.length, fn = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    fn[_key2 - 1] = arguments[_key2];
  }

  return fn.length === 0 ? f : function () {
    return f(compose.apply(undefined, fn).apply(undefined, arguments));
  };
};