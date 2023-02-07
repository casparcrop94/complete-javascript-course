"use strict";

const data_1 = [17, 21, 23];
const data_2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}ºC in ${i + 1} days.`);
  }
};

printForecast(data_1);
console.log("");
printForecast(data_2);
