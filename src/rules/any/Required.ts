import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

export class Required extends BaseRule implements Rule {
  public constructor(errorText: ErrorText = 'Field is required') {
    super(errorText);
  }

  public validate(value: any, values?: any): boolean {
    if (typeof value === 'boolean') {
      return value !== undefined;
    }

    return !!value;
  }
}

