import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];
  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }
  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Vini', age: 23 });
myDatabaseClassic.add({ name: 'Maria', age: 40 });
myDatabaseClassic.add({ name: 'Luis', age: 53 });

myDatabaseClassic.show();
