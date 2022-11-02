'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// Person.prototype.species = 'HomoSapiens';

///////////////////////////////////////////////////////////
// Coding challenge #1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.accelerate();

///////////////////////////////////////////////////////////

// class PersonClass {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   set firstName(name) {
//     if (name.includes(' ')) this._firstName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get firstName() {
//     return this._firstName;
//   }
// }

// const jessica = new PersonClass('Jessica Davis', 1991);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;

// const sarah = Object.create(PersonProto);

///////////////////////////////////////////////////////////
// Coding challenge #2

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelarate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const car3 = new Car('Ford', 120);
// car3.speedUS = 60;
// console.log(car3);

///////////////////////////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const mike = new Student('Mike', 1999, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

///////////////////////////////////////////////////////////
// Coding challenge #3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // linking prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const car4 = new EV('Tesla', 120, 23);

// car4.chargeBattery(90);
// console.log(car4);
// car4.accelerate();
// console.log(car4);
// car4.brake();
// console.log(car4);

///////////////////////////////////////////////////////////

// class PersonClass {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   set firstName(name) {
//     if (name.includes(' ')) this._firstName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get firstName() {
//     return this._firstName;
//   }
// }

// class StudendClass extends PersonClass {
//   constructor(firstName, birthYear, course) {
//     super(firstName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(
//       `Hello, my name is ${this.firstName} and i study ${this.course}`
//     );
//   }

//   calcAge() {
//     console.log(
//       `I am ${2037 - this.birthYear} years old but i feel like ${
//         2037 - this.birthYear + 5
//       }`
//     );
//   }
// }

// const martha = new StudendClass('Martha Jones', 2005, 'Math');
// martha.calcAge();

///////////////////////////////////////////////////////////

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// const jonas = Object.create(StudentProto);
// jonas.init('Jonas', 1991, 'Computer Science');
// jonas.calcAge();

///////////////////////////////////////////////////////////

// class Account {
//   // 1. public fields
//   locale = navigator.language;
//   // _movements = [];

//   // 2. private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;
//   }

//   getMovements() {
//     return this.#movements;
//   }

//   deposit(value) {
//     this.#movements.push(value);
//   }

//   withdraw(value) {
//     this.deposit(-value);
//   }

//   approveLoan(value) {
//     if (value <= 1000) return true;
//   }

//   requestLoan(value) {
//     if (this.approveLoan(value)) {
//       this.deposit(value);
//       console.log('Loan approved!');
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(500);
// acc1.withdraw(450);
// acc1.requestLoan(980);
// console.log(acc1);
// console.log(acc1.getMovements());

///////////////////////////////////////////////////////////
// Coding challenge #4

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//     return this;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// class EVCl extends CarCl {
//   #charge;

//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge -= 1;
//     console.log(
//       `Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`
//     );
//     return this;
//   }
// }

// const car5 = new EVCl('Rivian', 120, 23);
// console.log(car5);
