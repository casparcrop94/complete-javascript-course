// console.log("Hello World!")

// let js = "amazing"
// if (js === "amazing"){
//     alert("JavaScript is awesome")
// }

// let firstName = "Jonas"

// console.log(firstName)

// const country = "Netherlands";
// const continent = "Europe";
// let population = 17000000;
// var language;
// let isIsland = false;

// // country = "Belgium";
// population  = 17500000
// language = "dutch"

// console.log(country);
// console.log(continent);
// console.log(population);

// console.log(typeof isIsland)
// console.log(typeof population)
// console.log(typeof country)
// console.log(typeof language)

// // Template Literal
// description = `${country} is in ${continent} and its ${population} people speak ${language}`;
// console.log(description);

// let population_average_indicator = population > 33000000 ? 'above' : 'below';
// console.log(`${country}'s population is ${population_average_indicator} below average.`);

// switch (language) {
//     case "mandarin":
//         console.log("Most number of native speakers");
//         break;
//     case "spanish":
//         console.log("2nd place in number of native speakers");
//         break;
//     case "english":
//         console.log("3rd place in number of native speakers");
//         break;
//     case "hindi":
//         console.log("4th place in number of native speakers");
//         break;
//     case "arabic":
//         console.log("5th most spoken language");
//         break;
//     case "dutch":
//         console.log("Mooie taal dit")
//         break;
//     default:
//         console.log("Great language too! :D")
//         break;
// }

// function getBMI(mass,height){
//     let bmi = mass / (height ** 2);
//     return bmi;
// }

// function logBMI(mark_bmi, john_bmi){
//     if(mark_bmi >john_bmi){
//         console.log(`Mark's BMI (${mark_bmi}) is higher than John's (${john_bmi})`);
//     } else{
//         console.log(`John's (${john_bmi}) is higher than Mark's BMI (${mark_bmi})`);
//     }
// }


// let markHigherBMI = false;

// let mark_mass = 78; //in kg
// let mark_height = 1.69; // in Meters

// let john_mass = 92; //in kg
// let john_height = 1.95; // in Meters

// let mark_bmi = getBMI(mark_mass,mark_height);
// let john_bmi = getBMI(john_mass,john_height);

// if(mark_bmi > john_bmi){
//     markHigherBMI = true;
// }
// console.log(markHigherBMI);
// logBMI(mark_bmi,john_bmi);

// mark_mass = 95; //in kg
// mark_height = 1.88; // in Meters

// john_mass = 85; //in kg
// john_height = 1.76; // in Meters

// mark_bmi = getBMI(mark_mass,mark_height);
// john_bmi = getBMI(john_mass,john_height);

// if(mark_bmi > john_bmi){
//     markHigherBMI = true;
// } else{
//     markHigherBMI = false;
// }
// console.log(markHigherBMI);
// logBMI(mark_bmi,john_bmi);


// // Dolphins & Koalas data 1
// let dolphins_total_score = 96 + 108 + 89;
// let dolphins_average_score = dolphins_total_score / 3;
// let koalas_total_score = 88 + 91 +110;
// let koalas_average_score = koalas_total_score / 3;

// // Dolphins & Koalas data bonus 1
// let dolphins_total_score = 97 + 112 + 101;
// let dolphins_average_score = dolphins_total_score / 3;
// let koalas_total_score = 109 + 95 +123;
// let koalas_average_score = koalas_total_score / 3;

// // Dolphins & Koalas data bonus 2
// let dolphins_total_score = 97 + 112 + 101;
// let dolphins_average_score = dolphins_total_score / 3;
// let koalas_total_score = 109 + 95 +106;
// let koalas_average_score = koalas_total_score / 3;

// // Calculate winner (Data 1)
// if(dolphins_average_score > koalas_average_score){
//     console.log("Dolphins Win");
// } else if(koalas_average_score > dolphins_average_score){
//     console.log("Koalas Win!");
// } else{
//     console.log("It's a draw!")
// }

// // Calculate winner (Bonus Data 1 & 2)
// if((dolphins_average_score > koalas_average_score) && (dolphins_average_score >= 100)){
//     console.log("Dolphins Win");
// } else if((koalas_average_score > dolphins_average_score) && (koalas_average_score >= 100)){
//     console.log("Koalas Win!");
// } else if((koalas_average_score >= 100 && dolphins_average_score >= 100) && 
//         dolphins_average_score === koalas_average_score
//     ){
//     console.log("It's a draw!");
// } else{
//     console.log("Nobody Wins!");
// }

// let bill_value = 275;
// bill_value = 40;
// bill_value = 430

// let tip = (bill_value >= 50 && bill_value <= 300) ? bill_value * 0.15 : bill_value * 0.2;
// let total_value = bill_value + tip;
// console.log(`The bill was ${bill_value}, the tip was ${tip} and the final bill was ${total_value}`);