"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strToDecimal = strToDecimal;

var _bignumber = require("bignumber.js");

function strToDecimal(value) {
  try {
    var converted = new _bignumber.BigNumber(value);
    return converted;
  } catch (error) {
    return null;
  }
}