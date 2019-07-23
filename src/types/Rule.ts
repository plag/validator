import { ErrorText } from './ErrorText';

export interface Rule {
  getError(): ErrorText;
  validate(value: any, values?: any): boolean;
}
