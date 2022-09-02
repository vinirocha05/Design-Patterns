import { Customer } from '../customer/costumer';

export class IndividualCostumer implements Customer {
  constructor(public name: string) {}
}
