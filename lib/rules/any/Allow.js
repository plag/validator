"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Allow = void 0;

var _Ref = require("../../Ref");

var _BaseRule2 = require("../../BaseRule");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Allow =
/*#__PURE__*/
function (_BaseRule) {
  _inherits(Allow, _BaseRule);

  function Allow(allow) {
    var _this;

    var errorText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Value is not correct';

    _classCallCheck(this, Allow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Allow).call(this, errorText));
    _this.allow = allow;
    return _this;
  }

  _createClass(Allow, [{
    key: "validate",
    value: function validate(value, values) {
      var hasAllowedValue = false;

      for (var k = 0; k < this.allow.length; k += 1) {
        if (this.allow[k] instanceof _Ref.Ref) {
          var externalFieldName = this.allow[k].getFieldName();

          if (value === values[externalFieldName]) {
            hasAllowedValue = true;
            break;
          }

          continue;
        }

        if (value === this.allow[k]) {
          hasAllowedValue = true;
          break;
        }
      }

      return hasAllowedValue;
    }
  }]);

  return Allow;
}(_BaseRule2.BaseRule);

exports.Allow = Allow;