import { CreateEnterpriseVehicleCustomer } from './factories/enterprise-customer-vehicle-factory';
import { CreateIndividualVehicleCustomer } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new CreateEnterpriseVehicleCustomer();
const individualFactory = new CreateIndividualVehicleCustomer();

const car1 = enterpriseFactory.createVehicle('fusca', 'Vini');
const car2 = individualFactory.createVehicle('fusca', 'Vini');

console.log(car1, car2);
