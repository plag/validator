import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

export class HasUppercase extends BaseRule implements Rule {
  public constructor(errorText: ErrorText = 'UPPERCASE character') {
    super(errorText);
  }

  public validate(value: string): boolean {
    return value.toLocaleLowerCase() !== value;
  }
}

