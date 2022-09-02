import { Customer } from '../customer/costumer';

export class EnterpriseCostumer implements Customer {
  constructor(public name: string) {}
}
