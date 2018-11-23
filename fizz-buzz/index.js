module.exports = peopleCount => {
  let fizzBuzz = [];
  for (let i = 1; i <= peopleCount; i++) {
    let nextNumber = "";
    if (i % 3 === 0 || [...`${i}`].includes('3')) nextNumber = "Fizz";
    if (i % 5 === 0 || [...`${i}`].includes('5')) nextNumber += "Buzz";
    fizzBuzz.push(nextNumber || i);
  }
  return fizzBuzz;
};
