import test from "ava";
import { add } from "./roman-calculator.mjs";

test("I + I = II", t => {
  t.is(add("I", "I"), "II");
});
