import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';
import { parse, differenceInYears } from 'date-fns'

export class MinYears extends BaseRule implements Rule {
  private minYears: number;

  public constructor(years: number, errorText: ErrorText = 'Minimum {years} years old') {
    super(errorText.replace('{years}', years.toString()));

    this.minYears = years;
  }

  public validate(value: string): boolean {
    const date = parse(value);

    return differenceInYears(new Date(), date) >= this.minYears;
  }
}

