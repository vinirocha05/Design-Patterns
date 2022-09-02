import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { Vehicle } from '../vehicle/vehicle';
import { randomNumber } from './utils/random-numbrs';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle('fusca');
  const car2 = carFactory.getVehicle('celta');
  const bike = bicycleFactory.getVehicle('bicycle');
  const cars = [car1, car2, bike];
  return cars[randomNumber(cars.length)];
}
