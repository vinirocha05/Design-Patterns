import { Vehicle } from './vehicle';

export class Car implements Vehicle {
  constructor(public name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando o ${customerName}`);
  }
  stop(): void {
    console.log(`${this.name} parou`);
  }
}
