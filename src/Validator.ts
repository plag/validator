import { ValidationRules } from './types/ValidationRules';
import { Rule } from './types/Rule';
import { Result } from './types/Result';
import { Results } from './types/Results';
import { Condition } from './Condition';
import { OR } from './OR';

class Validator {
  public validateObject(values: any, validator: ValidationRules): Results | null {
    const result = {};

    for (let k in validator) {
      let rules = validator[k];

      if (validator[k] instanceof Condition) {
        const ref = validator[k].getRef();
        const rule = validator[k].getIfRule();
        const validationResult = this.validate(values[ref.getFieldName()], rule, values) === null;

        rules = validator[k].getRules(validationResult);
      }

      let fieldResult;

      if (rules instanceof OR) {
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

  public validate(value: any, rulesOrRule: Rule[] | Rule, values: any): Result | null {
    if (!Array.isArray(rulesOrRule)) {
      return this.validateRule(value, rulesOrRule, values);
    }

    return this.validateRules(value, rulesOrRule, values);
  }

  private validateRules(value: any, rules: Rule[], values: any): Result | null {
    for (let k = 0; k < rules.length; k += 1) {
      const error = this.validateRule(value, rules[k], values);

      if (error !== null) {
        return error;
      }

      continue;
    }

    return null;
  }

  public validateRule(value: any, rule: Rule, values: any): Result | null {
    const isValid = rule.validate(value, values);

    if (!isValid) {
      return rule.getError();
    }

    return null;
  }
}

export default Validator;
