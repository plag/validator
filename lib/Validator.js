"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Condition = require("./Condition");

var _OR = require("./OR");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validator =
/*#__PURE__*/
function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }

  _createClass(Validator, [{
    key: "validateObject",
    value: function validateObject(values, validator) {
      var result = {};

      for (var k in validator) {
        var rules = validator[k];

        if (validator[k] instanceof _Condition.Condition) {
          var ref = validator[k].getRef();
          var rule = validator[k].getIfRule();
          var validationResult = this.validate(values[ref.getFieldName()], rule, values) === null;
          rules = validator[k].getRules(validationResult);
        }

        var fieldResult = void 0;

        if (rules instanceof _OR.OR) {
          fieldResult = this.validate(values[k], rules.getFirstRules(), values);

          if (fieldResult !== null) {
            fieldResult = this.validate(values[k], rules.getSecondRules(), values);
          }
        } else {
          fieldResult = this.validate(values[k], rules, values);
        }

        if (fieldResult !== null) {
          result[k] = fieldResult;
        }
      }

      if (Object.keys(result).length === 0) {
        return null;
      }

      return result;
    }
  }, {
    key: "validate",
    value: function validate(value, rulesOrRule, values) {
      if (!Array.isArray(rulesOrRule)) {
        return this.validateRule(value, rulesOrRule, values);
      }

      return this.validateRules(value, rulesOrRule, values);
    }
  }, {
    key: "validateRules",
    value: function validateRules(value, rules, values) {
      for (var k = 0; k < rules.length; k += 1) {
        var error = this.validateRule(value, rules[k], values);

        if (error !== null) {
          return error;
        }

        continue;
      }

      return null;
    }
  }, {
    key: "validateRule",
    value: function validateRule(value, rule, values) {
      var isValid = rule.validate(value, values);

      if (!isValid) {
        return rule.getError();
      }

      return null;
    }
  }]);

  return Validator;
}();

var _default = Validator;
exports.default = _default;