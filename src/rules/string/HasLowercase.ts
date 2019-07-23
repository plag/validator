import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

export class HasLowercase extends BaseRule implements Rule {
  public constructor(errorText: ErrorText = 'lowercase character') {
    super(errorText);
  }

  public validate(value: string): boolean {
    return value.toLocaleUpperCase() !== value;
  }
}

