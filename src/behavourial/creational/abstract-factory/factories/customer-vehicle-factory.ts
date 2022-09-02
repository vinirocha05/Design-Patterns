import { Customer } from '../interfaces/costumer';
import { Vehicle } from '../interfaces/vehicle';

export interface CreateVehicleCustomer {
  createCustomer(customerName: string): Customer;
  createVehicle(carName: string, customerName: string): Vehicle;
}
