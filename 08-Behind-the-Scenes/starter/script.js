'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  //   console.log(firstName);
  function printAge() {
    const output = `${firstName} is ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      const str = `Oh, you're a millennial, ${firstName}`;
      console.log(str);
      console.log(millennial);
    }
  }
  printAge();
  return age;
}

const firstName = 'Caspar';
calcAge(1994);

// console.log(age);
// printAge();
