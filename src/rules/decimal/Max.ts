import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

import BigNumber from 'bignumber.js';
import { strToDecimal } from '../../utils/decimal';

export class Max extends BaseRule implements Rule {
  private max: BigNumber

  public constructor(value: BigNumber, errorText: ErrorText = 'Value can not be greater than {value}') {
    const preparedErrorText = errorText.replace('{value}', value.toFixed())

    super(preparedErrorText);

    this.max = value;
  }

  public validate(value: string): boolean {
    const convertedValue = strToDecimal(value);

    return convertedValue.lte(this.max);
  }
}

