import { Rule } from './Rule';
import { Condition } from './Condition';

export interface ValidationRules {
  [name: string]: Rule[] | Condition;
}
