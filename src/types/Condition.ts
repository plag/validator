import { Rule } from './Rule';
import { Ref } from './Ref';

export interface Condition {
  getRef(): Ref;
  getIfRule(): Rule;
  getRules(conditionResult: boolean): Rule[] | Rule;
}
