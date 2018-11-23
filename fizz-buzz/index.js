const isFizzBuzz = number => number % 3 === 0 && number % 5 === 0;
const isFizz = number => shouldReplace(number, 3);
const isBuzz = number => shouldReplace(number, 5);

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
