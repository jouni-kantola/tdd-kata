import test from "ava";
import fizzBuzz from "./";

test("2 class mates count to 2", t => {
  t.deepEqual(fizzBuzz(2), [1, 2]);
});
