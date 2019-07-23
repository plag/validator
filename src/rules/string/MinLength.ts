import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

export class MinLength extends BaseRule implements Rule {
  private minLength: number;

  public constructor(length: number, errorText: ErrorText = 'Minimum {length} characers') {
    super(errorText.replace('{length}', length.toString()));

    this.minLength = length;
  }

  public validate(value: string): boolean {
    return value.length >= this.minLength;
  }
}

