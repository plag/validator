import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

export class ValidBoolean extends BaseRule implements Rule {
  public constructor(errorText: ErrorText = 'Field is required') {
    super(errorText);
  }

  public validate(value: any): boolean {
    return value === true || value === false;
  }
}

