export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public adresses: Adress[] = [];
  constructor(public name: string, public age: number) {}
  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.adresses = this.adresses.map((item) => item.clone());
    return newObj;
  }
  addAdress(adress: Adress): void {
    this.adresses.push(adress);
  }
}

export class Adress implements Prototype {
  constructor(public street: string, public number: number) {}
  clone(): Adress {
    return new Adress(this.street, this.number);
  }
}

const adress1 = new Adress('domingos', 200);

const person1 = new Person('Luiz', 30);
person1.addAdress(adress1);
const person2 = person1.clone();
