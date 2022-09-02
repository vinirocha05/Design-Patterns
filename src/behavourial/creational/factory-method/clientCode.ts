import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumber } from './main/utils/random-numbrs';

const customerNames = ['Ana', 'Vini', 'Julia', 'Rafael'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumber(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log('---');
}
