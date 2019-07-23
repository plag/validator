"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Precision = void 0;

var _BaseRule2 = require("../../BaseRule");

var _decimal = require("../../utils/decimal");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Precision =
/*#__PURE__*/
function (_BaseRule) {
  _inherits(Precision, _BaseRule);

  function Precision(precision) {
    var _this;

    var errorText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Value precision can have max {value} signs';

    _classCallCheck(this, Precision);

    var preparedErrorText = errorText.replace('{value}', precision.toFixed());
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Precision).call(this, preparedErrorText));
    _this.precision = precision;
    return _this;
  }

  _createClass(Precision, [{
    key: "validate",
    value: function validate(value) {
      var number = (0, _decimal.strToDecimal)(value);

      if (number === null) {
        return false;
      }

      var stringValue = number.toString(); // has exponencial part

      if (stringValue.indexOf('e') !== -1) {
        return false;
      } // if not have decimal part


      if (stringValue.indexOf('.') === -1) {
        return true;
      }

      var valueParts = stringValue.split('.');

      if (valueParts.length !== 2) {
        return false;
      }

      if (valueParts[1].length > this.precision) {
        return false;
      }

      return true;
    }
  }]);

  return Precision;
}(_BaseRule2.BaseRule);

exports.Precision = Precision;