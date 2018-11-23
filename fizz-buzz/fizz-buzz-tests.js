import test from "ava";
import fizzBuzz, { fizz, buzz } from "./";

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
  t.deepEqual(fizzBuzz(numberOfStudents), [1, 2, fizz]);
});

test("numbers dividable by 5 turns into Buzz", t => {
  const numberOfStudents = 5;
  t.deepEqual(fizzBuzz(numberOfStudents), [1, 2, fizz, 4, buzz]);
});

test("multiples of 3 and 5 turns into FizzBuzz", t => {
  const numberOfStudents = 25;
  t.deepEqual(fizzBuzz(numberOfStudents), [
    1,
    2,
    fizz,
    4,
    buzz,
    fizz,
    7,
    8,
    fizz,
    buzz,
    11,
    fizz,
    fizz,
    14,
    `${fizz}${buzz}`,
    16,
    17,
    fizz,
    19,
    buzz,
    fizz,
    22,
    fizz,
    fizz,
    buzz
  ]);
});

// Step 2
test("number is Fizz if it is divisible by 3 or if it has a 3 in it", t => {
  const numberOfStudents = 13;
  t.deepEqual(fizzBuzz(numberOfStudents), [
    1,
    2,
    fizz,
    4,
    buzz,
    fizz,
    7,
    8,
    fizz,
    buzz,
    11,
    fizz,
    fizz
  ]);
});

test("number is Buzz if it is divisible by 5 or if it has a 5 in it", t => {
  const numberOfStudents = 20;
  t.deepEqual(fizzBuzz(numberOfStudents), [
    1,
    2,
    fizz,
    4,
    buzz,
    fizz,
    7,
    8,
    fizz,
    buzz,
    11,
    fizz,
    fizz,
    14,
    `${fizz}${buzz}`,
    16,
    17,
    fizz,
    19,
    buzz
  ]);
});

test("100 class mates count to Buzz", t => {
  const numberOfStudents = 100;
  t.deepEqual(fizzBuzz(numberOfStudents)[99], buzz);
});

test("Buzz trumps Fizz", t => {
  const numberOfStudents = 51;
  const lastValue = fizzBuzz(numberOfStudents).pop();
  t.is(lastValue, buzz);
});

test("only multipliers of 3 & 5 are FizzBuzz", t => {
  const numberOfStudents = 1257;
  const lastValue = fizzBuzz(numberOfStudents).pop();
  t.is(lastValue, buzz);
});
