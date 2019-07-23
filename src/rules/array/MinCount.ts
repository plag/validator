import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';

export class MinCount extends BaseRule implements Rule {
  private minCount: number;

  public constructor(count: number, errorText: ErrorText = 'Minimum {count} items') {
    super(errorText.replace('{count}', count.toString()));

    this.minCount = count;
  }

  public validate(value: string): boolean {
    return value.length >= this.minCount;
  }
}

