import test from "ava";
import fizzBuzz from "./";

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
