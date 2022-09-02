import { Customer } from '../customer/costumer';
import { IndividualCustomer } from '../customer/individual-costumer';
import { IndividualCar } from '../vehicle/individual-car';
import { Vehicle } from '../vehicle/vehicle';
import { CreateVehicleCustomerFactory } from './customer-vehicle-factory';

export class CreateIndividualVehicleCustomer
  implements CreateVehicleCustomerFactory
{
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(carName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(carName, customer);
  }
}
