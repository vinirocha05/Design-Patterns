const personPrototype = {
  firstName: 'Vini',
  lastName: 'Rocha',
  age: 23,

  fullName() {
    return `${this.firstName}${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
