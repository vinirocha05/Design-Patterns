export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public adresses: Adress[] = [];
  constructor(public name: string, public age: number) {}
  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }
  addAdress(adress: Adress): void {
    this.adresses.push(adress);
  }
}

export class Adress {
  constructor(public street: string, public number: number) {}
}

const adress1 = new Adress('domingos', 200);

const person1 = new Person('Luiz', 30);
person1.addAdress(adress1);
const person2 = person1.clone();
