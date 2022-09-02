import { Customer } from '../interfaces/costumer';

export class IndividualCustomer implements Customer {
  constructor(public name: string) {}
}
