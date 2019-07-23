import { ErrorText } from './types/ErrorText';

export class BaseRule {
  public error: ErrorText;

  public constructor(error: ErrorText) {
    this.error = error;
  }

  public getError(): ErrorText {
    return this.error;
  }
}
