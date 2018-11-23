const isFizz = number => shouldReplace(number, 3);
const isBuzz = number => shouldReplace(number, 5);

const shouldReplace = (number, match) =>
  number % match === 0 || [...`${number}`].includes(`${match}`);

module.exports = peopleCount => {
  return [...Array(peopleCount).keys()]
    .map(x => x + 1)
    .map(i => {
      let fizzOrBuzz = "";
      if (isFizz(i)) fizzOrBuzz = "Fizz";
      if (isBuzz(i)) fizzOrBuzz += "Buzz";
      return fizzOrBuzz || i;
    });
};
