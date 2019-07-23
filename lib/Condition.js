"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Condition = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Condition =
/*#__PURE__*/
function () {
  function Condition(ref, ifRule, thanRules, elseRules) {
    _classCallCheck(this, Condition);

    this.ifRule = ifRule;
    this.thanRule = thanRules;
    this.elseRule = elseRules;
    this.ref = ref;
  }

  _createClass(Condition, [{
    key: "getRef",
    value: function getRef() {
      return this.ref;
    }
  }, {
    key: "getIfRule",
    value: function getIfRule() {
      return this.ifRule;
    }
  }, {
    key: "getRules",
    value: function getRules(conditionResult) {
      if (conditionResult) {
        return this.thanRule;
      }

      return this.elseRule;
    }
  }]);

  return Condition;
}();

exports.Condition = Condition;