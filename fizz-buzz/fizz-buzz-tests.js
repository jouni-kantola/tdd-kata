import test from "ava";
import fizzBuzz from "./";

// Step 1
test("2 class mates count to 2", t => {
  t.deepEqual(fizzBuzz(2), [1, 2]);
});

test("100 class mates count to 100", t => {
  const numberOfStudents = 100;
  t.deepEqual(fizzBuzz(numberOfStudents).length, 100);
});

test("numbers dividable by 3 turns into fizz", t => {
  const numberOfStudents = 3;
  t.deepEqual(fizzBuzz(numberOfStudents), [1, 2, "Fizz"]);
});

test("numbers dividable by 5 turns into Buzz", t => {
  const numberOfStudents = 5;
  t.deepEqual(fizzBuzz(numberOfStudents), [1, 2, "Fizz", 4, "Buzz"]);
});

test("multiples of 3 and 5 turns into FizzBuzz", t => {
  const numberOfStudents = 15;
  t.deepEqual(fizzBuzz(numberOfStudents), [
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    "Fizz",
    14,
    "FizzBuzz"
  ]);
});

// Step 2
test("number is Fizz if it is divisible by 3 or if it has a 3 in it", t => {
  const numberOfStudents = 13;
  t.deepEqual(fizzBuzz(numberOfStudents), [
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    "Fizz"
  ]);
});
