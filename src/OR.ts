import { Rule } from './types/Rule';

export class OR {
  private firstRules: Rule[] | Rule;
  private secondRules: Rule[] | Rule;

  public constructor(firstRules: Rule[] | Rule, secondRules: Rule[] | Rule) {
    this.firstRules = firstRules;
    this.secondRules = secondRules;
  }

  public getFirstRules(): Rule[] | Rule {
    return this.firstRules;
  }

  public getSecondRules(): Rule[] | Rule {
    return this.secondRules;
  }
}
