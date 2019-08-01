import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { BaseRule } from '../../BaseRule';
import Isemail from 'isemail'; // from joi

export class IsEmail extends BaseRule implements Rule {
  private settings: object;

  public constructor(settings: object = { minDomainAtoms: 2 }, errorText: ErrorText = 'Email is required') {
    super(errorText);

    this.settings = settings;
  }

  public validate(value: string): boolean {
    return Isemail.validate(value, this.settings)
  }
}

