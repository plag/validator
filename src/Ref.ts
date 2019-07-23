export class Ref {
  private externalField: string;

  public constructor(field: string) {
    this.externalField = field;
  }

  public getFieldName(): string {
    return this.externalField;
  }
}
