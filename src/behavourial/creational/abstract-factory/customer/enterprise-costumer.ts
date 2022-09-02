import { Customer } from '../interfaces/costumer';

export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {}
}
