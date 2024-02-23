// Vacation Spots:
// hot, wet, beach: Hawaii
// hot, dry, beach: San Diego
// cold, wet, beach: Cannon Beach, Oregon
// cold, dry, beach: Aspen, Colorado
// hot, wet, no beach: New Orleans
// hot, dry, no beach: Las Vegas
// cold, wet, no beach: Anchorage, Alaska
// cold, dry, not beach: Flagstaff, Arizona

let whichVacation = function (isHotIn, isDryIn, hasBeachIn) {
  let isHot = isHotIn;
  let isDry = isDryIn;
  let hasBeach = hasBeachIn;

  // TODO: add other vacation spots.
  let isFlagstaff = !isHot && isDry && !hasBeach;
  let isAspen = !isHot && isDry && hasBeach;
  let isLasVegas = isHot && isDry && !hasBeach;
  let isSanDiego = isHot && isDry && hasBeach;
  let isHawaii = isHot && !isDry && hasBeach;
  let isCannonBeach = !isHot && !isDry && hasBeach;
  let isNewOrleans = isHot && !isDry && !hasBeach;
  let isAnchorage = !isHot && !isDry && !hasBeach;

  let vacationOut;
  if (isHawaii) {
    vacationOut = 'Hawaii';
  } else if (isFlagstaff) {
    vacationOut = 'Flagstaff';
  } else if (isAspen) {
    vacationOut = 'Aspen';
  } else if (isLasVegas) {
    vacationOut = 'Las Vegas';
  } else if (isSanDiego) {
    vacationOut = 'San Diego';
  } else if (isCannonBeach) {
    vacationOut = 'Cannon Beach';
  } else if (isNewOrleans) {
    vacationOut = 'New Orleans';
  } else if (isAnchorage) {
    vacationOut = 'Anchorage';
  }
  // TODO: add the other vacations

  return vacationOut;
};

// test for hot, wet, beach
vacation = whichVacation(true, false, true);
console.log(
  `If you like: 
  hot (${true}), 
  dry (${false}), 
  and beaches (${true}), 
  your vacation is: ${vacation}`
);
vacation = whichVacation(false, true, false);
console.log(
  `If you like: 
  hot (${false}), 
  dry (${true}), 
  and beaches (${false}), 
  your vacation is: ${vacation}`
);
vacation = whichVacation(false, true, true);
console.log(
  `If you like: 
  hot (${false}), 
  dry (${true}), 
  and beaches (${true}), 
  your vacation is: ${vacation}`
);
vacation = whichVacation(true, true, true);
console.log(
  `If you like: 
  hot (${true}), 
  dry (${true}), 
  and beaches (${true}), 
  your vacation is: ${vacation}`
);
vacation = whichVacation(true, true, false);
console.log(
  `If you like: 
  hot (${true}), 
  dry (${true}), 
  and beaches (${false}), 
  your vacation is: ${vacation}`
);
vacation = whichVacation(false, false, true);
console.log(
  `If you like: 
  hot (${false}), 
  dry (${false}), 
  and beaches (${true}), 
  your vacation is: ${vacation}`
);
vacation = whichVacation(true, false, false);
console.log(
  `If you like: 
  hot (${true}), 
  dry (${false}), 
  and beaches (${false}), 
  your vacation is: ${vacation}`
);
vacation = whichVacation(false, false, false);
console.log(
  `If you like: 
  hot (${false}), 
  dry (${false}), 
  and beaches (${false}), 
  your vacation is: ${vacation}`
);
// TODO: write the tests for other spots

// ********************************************
// Function guessWho?
// input: three features: glasses, mustache, bald (Boolean true/false)
let guessWho = function (hasGlasses, hasMustache, hasBald) {
  let isJoe = hasGlasses && !hasMustache && !hasBald;
  let isRichard = !hasGlasses && hasMustache && hasBald;
  let isPeter = !hasGlasses && !hasMustache && !hasBald;
  let isTom = hasGlasses && hasMustache && hasBald;

  let unknown;
  if (isJoe) {
    unknown = 'Joe';
  } else if (isRichard) {
    unknown = 'Richard';
  } else if (isPeter) {
    unknown = 'Peter';
  } else if (isTom) {
    unknown = 'Tom';
  } else {
    unknown = 'Who are you then?';
  }
  return unknown;
};

who = guessWho(true, false, false);
console.log(
  `I wear 
  glasses(${true}), 
  have a mustache (${false}), 
  and no hair (${false}), 
  you guessed me, ${who}.`
);
who = guessWho(false, true, true);
console.log(
  `I don't wear 
  glasses(${false}), 
  I have a mustache (${false}), 
  and no hair (${true}), 
  you guessed me, ${who}.`
);
who = guessWho(false, false, false);
console.log(
  `I don't wear 
  glasses (${false}), 
  I  don't have a mustache (${false}), 
  and have hair (${false}), 
  you guessed me, ${who}.`
);
who = guessWho(true, true, true);
console.log(
  `I wear 
  glasses(${true}), 
  I have a mustache (${true}), 
  and no hair (${true}), 
  you guessed me, ${who}.`
);

// output: the person's name (string)
// TODO: Write this function and test it for these four people.
// guessWho?
// Joe: glasses, no mustache, not bald
// Richard: no glasses, mustache, bald
// Peter: no glasses, no mustache, not bald
// Tom: glasses, mustache, bald
// Bonus: refer to this game board for more ideas
// https://en.islcollective.com/english-esl-worksheets/general-topic/describing-people/guess-who/68881
