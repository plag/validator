import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

import { strToDecimal } from '../../utils/decimal';

export class Valid extends BaseRule implements Rule {
  public constructor(errorText: ErrorText = 'Value must be valid number') {
    super(errorText);
  }

  public validate(value: string): boolean {
    const convertedValue = strToDecimal(value);

    return convertedValue !== null && !convertedValue.isNaN();
  }
}

