// Please Fork this Replit by clicking the "Fork" button, above.

// *****************************
// 1. Age check
// input: ageIn (a numnber)
// output: ageClassOut (a string)
// senior, adult, teen, child, infant
// *****************************

let ageCheck = function (ageIn) {
  let age = ageIn;
  let ageClassOut;

  if (age >= 65) {
    ageClassOut = 'senior';
  } else if (age >= 18) {
    ageClassOut = 'adult';
  } else if (age >= 13) {
    ageClassOut = 'teen';
  } else if (age >= 2) {
    ageClassOut = 'child';
  } else if (age >= 0.5) {
    ageClassOut = 'infant';
  }
  // TODO: add age classes for teen, child, and infant

  return ageClassOut;
};

// run the function for age 80
let check80 = ageCheck(80);
console.log(`Age ${80}. You are a ${check80}.`);

// run the function for age 45
let check45 = ageCheck(45);
console.log(`Age ${45}. You are a ${check45}.`);

// run the function for age 16
let check18 = ageCheck(16);
console.log(`Age ${16}. You are a ${check18}.`);

// run the function for age 2
let check2 = ageCheck(2);
console.log(`Age ${2}. You are a ${check2}.`);

// run the function for age .5
let check05 = ageCheck(0.6);
console.log(`Age ${0.5}. You are a ${check05}.`);

// *****************************
// 2. calorie intake
// input: caloriesIn (a number)
// output: adviceOut (a stirng)
// ("high", "low", "healthy")
// NOTE: 1600–3000 is normal
// *****************************

let calorieCheck = function (caloriesIn) {
  let calories = caloriesIn;
  let adviceOut;
  if (calories >= 3000) {
    adviceOut = 'high, eat less';
  } else if (calories >= 1600) {
    adviceOut = "healthy, you're eating enough";
  } else if (calories < 1600) {
    adviceOut = 'low, eat more';
  }
  // TODO: check hi or low, and give advice.

  return adviceOut;
};

let calories5000 = calorieCheck(1000);
console.log(`Cals ${5000}. Your calorie intake is ${calories5000}.`);

// TODO: check calories for 4000, 3000, 2500, 2000, 1800, 1500, and 1000

// *****************************

// *****************************
// 3. Speed limit
// input: speedIn (a number)
// output: legalStatusOut (a string)
// ("high", "low", "legal")
// NOTE: you may choose to add more categories like "reckless"
// *****************************

let speedLimit = function (speedIn) {
  let speed = speedIn;
  let legalStatusOut;
  if (speed >= 75) {
    legalStatusOut = "high, you're driving reckless";
  } else if (speed >= 55) {
    legalStatusOut = "legal, you're going the right speed";
  } else if (speed < 45) {
    legalStatusOut = "low, you're going too slow";
  }
  return legalStatusOut;
};
let speed8 = speedLimit(35);
console.log(`Speed ${8}. Your speed is ${speed8}.`);
// TODO: write a function to check the speed limit

// TODO: check the speed limit for 120mph, 100, 90, 85, 70, 60, 30, 15
