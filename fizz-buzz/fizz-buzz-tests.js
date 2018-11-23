import test from "ava";
import fizzBuzz from "./";

test("2 class mates count to 2", t => {
  t.deepEqual(fizzBuzz(2), [1, 2]);
});

test("100 class mates count to 100", t => {
  const numberOfStudents = 100;
  t.deepEqual(fizzBuzz(numberOfStudents).length, 100);
});
