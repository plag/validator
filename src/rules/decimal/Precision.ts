
import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';
import { BigNumber } from 'bignumber.js';
import { strToDecimal } from '../../utils/decimal';

export class Precision extends BaseRule implements Rule {
  private precision: number

  public constructor(precision: number, errorText: ErrorText = 'Value precision can have max {value} signs') {
    const preparedErrorText = errorText.replace('{value}', precision.toFixed());

    super(preparedErrorText);

    this.precision = precision;
  }

  public validate(value: string): boolean {
    const number = strToDecimal(value);

    if (number === null) {
      return false;
    }

    const stringValue = number.toString();

    // has exponencial part
    if (stringValue.indexOf('e') !== -1) {
      return false;
    }

    // if not have decimal part
    if (stringValue.indexOf('.') === -1) {
      return true;
    }

    const valueParts = stringValue.split('.');

    if (valueParts.length !== 2) {
      return false;
    }

    if (valueParts[1].length > this.precision) {
      return false;
    }

    return true;

  }
}




