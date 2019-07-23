import { Rule } from './types/Rule';
import { Ref } from './types/Ref';
import { Condition as ICondition } from './types/Condition';

export class Condition implements ICondition {
  private ref: Ref;
  private ifRule: Rule;
  private thanRule: Rule[] | Rule;
  private elseRule: Rule[] | Rule;

  public constructor(ref: Ref, ifRule: Rule, thanRules: Rule[] | Rule, elseRules: Rule[] | Rule) {
    this.ifRule = ifRule;
    this.thanRule = thanRules;
    this.elseRule = elseRules;
    this.ref = ref;
  }

  public getRef(): Ref {
    return this.ref;
  }

  public getIfRule(): Rule {
    return this.ifRule;
  }

  public getRules(conditionResult: boolean): Rule[] | Rule {
    if (conditionResult) {
      return this.thanRule;
    }

    return this.elseRule;
  }
}
