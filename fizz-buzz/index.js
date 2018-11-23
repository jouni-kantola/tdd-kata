const isFizz = number => shouldReplace(number, 3);
const isBuzz = number => shouldReplace(number, 5);

const shouldReplace = (number, match) =>
  number % match === 0 || [...`${number}`].includes(`${match}`);

module.exports = peopleCount => {
  let fizzBuzz = [];
  for (let i = 1; i <= peopleCount; i++) {
    let fizzOrBuzz = "";
    if (isFizz(i)) fizzOrBuzz = "Fizz";
    if (isBuzz(i)) fizzOrBuzz += "Buzz";
    fizzBuzz.push(fizzOrBuzz || i);
  }
  return fizzBuzz;
};
