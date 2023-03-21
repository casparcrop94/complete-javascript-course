'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;
//   //   console.log(firstName);
//   function printAge() {
//     const output = `${firstName} is ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millennial = true;
//       const str = `Oh, you're a millennial, ${firstName}`;
//       console.log(str);
//       console.log(millennial);
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Caspar';
// calcAge(1994);

// console.log(age);
// printAge();

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'Teacher';
// const year = 1991;

// //Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1994);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1994);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,

//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // //Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     //Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   // greet: () => console.log(`Hey ${this.firstName}`),
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// //Argument keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// //Arguments keyword not in arrow functions
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Caspar',
//   age: 28,
// };
// const friend = me;
// friend.age = 30;

// console.log('Friend: ', friend);
// console.log('Me: ', me);

// //Primitive types
// let lastName = 'Williams';
// let oldLastname = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastname);

// //Reference Types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 28,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

// console.log('Before marriage: ', jessica);
// console.log('After marriage: ', marriedJessica);

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 28,
  family: ['Alice', 'Bob'],
};

//Shallow copy
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
