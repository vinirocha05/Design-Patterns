import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;

myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Vini', age: 23 });
myDatabaseClassic.add({ name: 'Maria', age: 40 });
myDatabaseClassic.add({ name: 'Luis', age: 53 });

myDatabaseClassic.show();
