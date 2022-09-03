export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}
export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'number';
  }
}

export class ValidationComposite extends ValidationComponent {
  private children: ValidationComponent[] = [];
  validate(value: unknown) {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }
  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

const validationEmail = new ValidateEmail();
const validationString = new ValidateString();
const validationNumber = new ValidateNumber();

const validationComposite = new ValidationComposite();
validationComposite.add(validationEmail, validationNumber, validationString);
