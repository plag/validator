import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

export class NotRequired extends BaseRule implements Rule {
  public constructor(errorText: ErrorText = 'Field is not required') {
    super(errorText);
  }

  public validate(value: any): boolean {
    return value === '' || value === undefined || value === null;
  }
}

