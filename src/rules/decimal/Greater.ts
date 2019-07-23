import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

import BigNumber from 'bignumber.js';
import { strToDecimal } from '../../utils/decimal';

export class Greater extends BaseRule implements Rule {
  private graterThan: BigNumber

  public constructor(value: BigNumber, errorText: ErrorText = 'Value must be greater than {value}') {
    const preparedErrorText = errorText.replace('{value}', value.toFixed())

    super(preparedErrorText);

    this.graterThan = value;
  }

  public validate(value: string): boolean {
    const convertedValue = strToDecimal(value);

    return convertedValue.gt(this.graterThan);
  }
}

