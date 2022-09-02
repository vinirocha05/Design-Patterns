import { Customer } from '../customer/costumer';
import { EnterpriseCustomer } from '../customer/enterprise-costumer';
import { EnterpriseCar } from '../vehicle/enterprise-car';
import { Vehicle } from '../vehicle/vehicle';
import { CreateVehicleCustomerFactory } from './customer-vehicle-factory';

export class CreateEnterpriseVehicleCustomer
  implements CreateVehicleCustomerFactory
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(carName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(carName, customer);
  }
}
