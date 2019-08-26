import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

import BigNumber from 'bignumber.js';
import { strToDecimal } from '../../utils/decimal';

export class Min extends BaseRule implements Rule {
  private minValue: BigNumber

  public constructor(value: BigNumber, errorText: ErrorText = 'Value must be greater or equal than {value}') {
    const preparedErrorText = errorText.replace('{value}', value.toFixed())

    super(preparedErrorText);

    this.minValue = value;
  }

  public validate(value: string): boolean {
    const convertedValue = strToDecimal(value);

    return convertedValue.gte(this.minValue);
  }
}

