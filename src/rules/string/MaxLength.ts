import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

export class MaxLength extends BaseRule implements Rule {
  private maxLength: number;

  public constructor(length: number, errorText: ErrorText = 'Maximum {length} characers') {
    super(errorText.replace('{length}', length.toString()));

    this.maxLength = length;
  }

  public validate(value: string): boolean {
    return value.length < this.maxLength;
  }
}

