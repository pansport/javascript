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
