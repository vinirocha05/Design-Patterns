import { MealBuilderProtocol } from '../interface/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }
  makeMeal(): this {
    const arroz = new Rice('Arroz', 50);
    const feijao = new Beans('Feijao', 50);

    this._meal.add(arroz, feijao);
    return this;
  }
  makeBeverage(): this {
    const bebida = new Beverage('bebida', 50);
    this._meal.add(bebida);
    return this;
  }
  makeDessert(): this {
    const sobremesa = new Dessert('sobremesa', 50);
    this._meal.add(sobremesa);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
