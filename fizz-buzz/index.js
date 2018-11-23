const fizzMultiplier = 3;
const buzzMultiplier = 5;

const isFizzBuzz = number =>
  number % fizzMultiplier === 0 && number % buzzMultiplier === 0;
const isFizz = number => shouldReplace(number, fizzMultiplier);
const isBuzz = number => shouldReplace(number, buzzMultiplier);

const shouldReplace = (number, match) =>
  number % match === 0 || [...`${number}`].includes(`${match}`);

const fizz = "Fizz";
const buzz = "Buzz";

module.exports = peopleCount => {
  const xs = [...Array(peopleCount).keys()].map(x => x + 1);
  return xs.map(x => {
    if (isFizzBuzz(x)) return `${fizz}${buzz}`;
    if (isBuzz(x)) return buzz;
    if (isFizz(x)) return fizz;
    return x;
  });
};

module.exports.fizz = fizz;
module.exports.buzz = buzz;
