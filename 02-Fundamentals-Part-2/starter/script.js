'use strict';

// Dolphins vs Koalas 2-1
// const dolphins_first = 44;
// const dolphins_second = 23;
// const dolphins_third = 71;
const dolphins_first = 85;
const dolphins_second = 54;
const dolphins_third = 41;

// const koalas_first = 65;
// const koalas_second = 54;
// const koalas_third = 49;
const koalas_first = 23;
const koalas_second = 34;
const koalas_third = 27;

const calcAverage = (a ,b ,c) => (a+b+c) / 3;

const avgDolphins = calcAverage(dolphins_first,dolphins_second,dolphins_third);
const avgKoalas = calcAverage(koalas_first,koalas_second,koalas_third);

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= (avgKoalas * 2)){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= (avgDolphins * 2)){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } 
    // else{
    //     console.log(`Nobody wins... (${avgDolphins} vs. ${avgKoalas})`);
    // }
}

checkWinner(avgDolphins, avgKoalas);

// Bill tipp 2-1
function calcTip(billValue){
    let tipValue = 0;
    if(billValue >= 50 && billValue <= 300){
        tipValue = billValue * 0.2
        console.log('high tip');
    } else{
        tipValue = billValue * 0.15
        console.log('low tip');
    }
    return tipValue
}

function calculateAverages(arrayToCalc){
    let totalAmount = 0;
    for(let i = 0; i < arrayToCalc.length; i++){
        totalAmount += arrayToCalc[i]
    }
    let average = totalAmount / arrayToCalc.length
    return average
}

let bills = [125, 555, 44];
let tips = [];
let billTotal = 0;
let tipTotal = 0;
let total = [];
let averages = [];

for(let i = 0; i < bills.length; i++){
    tips[i] = calcTip(bills[i]);
    tipTotal += tips[i];
    billTotal += bills[i];
}

averages[0] = calculateAverages(bills);
averages[1] = calculateAverages(tips);

total[0] = billTotal;
total[1] = tipTotal;

console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Averages: ", averages);
console.log("Total: ", total);

// BMI 2-1
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    getBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    getBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
    }
}

mark.getBMI();
john.getBMI();

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else{
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}