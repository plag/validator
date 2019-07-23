import { Rule } from '../../types/Rule';
import { ErrorText } from '../../types/ErrorText';
import { Ref } from '../../Ref';
import { BaseRule } from '../../BaseRule';

export class Allow extends BaseRule implements Rule {
  private allow: any[];

  public constructor(allow: any[], errorText: ErrorText = 'Value is not correct') {
    super(errorText);

    this.allow = allow;
  }

  public validate(value: any, values: any): boolean {
    let hasAllowedValue = false;

    for (let k = 0; k < this.allow.length; k += 1) {
      if (this.allow[k] instanceof Ref ) {
        const externalFieldName = this.allow[k].getFieldName();
        if (value === values[externalFieldName]) {
          hasAllowedValue = true;
          break;
        }

        continue;
      }

      if (value === this.allow[k]) {
        hasAllowedValue = true;
        break;
      }
    }

    return hasAllowedValue;
  }
}

