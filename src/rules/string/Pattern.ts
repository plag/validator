import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

export class Pattern extends BaseRule implements Rule {
  private pattern: RegExp;

  public constructor(pattern: RegExp, errorText: ErrorText = 'Value not match pattern') {
    super(errorText);

    this.pattern = pattern;
  }

  public validate(value: string): boolean {
    return this.pattern.test(value);
  }
}

