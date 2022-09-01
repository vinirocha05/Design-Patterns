import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseFunction = MyDatabaseFunction;

myDatabaseFunction.add({ name: 'Luiz', age: 30 });
myDatabaseFunction.add({ name: 'Vini', age: 23 });
myDatabaseFunction.add({ name: 'Maria', age: 40 });
myDatabaseFunction.add({ name: 'Luis', age: 53 });

myDatabaseFunction.show();

export { myDatabaseFunction };
