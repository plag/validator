import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';
import differenceInYears from 'date-fns/differenceInYears'
import parse from 'date-fns/parse'

const FORMAT = 'yyyy-MM-dd';

export class MinYears extends BaseRule implements Rule {
  private minYears: number;

  public constructor(years: number, errorText: ErrorText = 'Minimum {years} years old') {
    super(errorText.replace('{years}', years.toString()));

    this.minYears = years;
  }

  public validate(value: string): boolean {
    const date = parse(value, FORMAT, new Date());

    return differenceInYears(new Date(), date) >= this.minYears;
  }
}

