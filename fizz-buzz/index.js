const isFizz = number => shouldReplace(number, 3);
const isBuzz = number => shouldReplace(number, 5);

const shouldReplace = (number, match) =>
  number % match === 0 || [...`${number}`].includes(`${match}`);

const fizz = "Fizz";
const buzz = "Buzz";

module.exports = peopleCount => {
  return [...Array(peopleCount).keys()]
    .map(x => x + 1)
    .map(i => {
      let fizzOrBuzz = "";
      if (isFizz(i)) fizzOrBuzz = fizz;
      if (isBuzz(i)) fizzOrBuzz += buzz;
      return fizzOrBuzz || i;
    });
};

module.exports.fizz = fizz;
module.exports.buzz = buzz;
