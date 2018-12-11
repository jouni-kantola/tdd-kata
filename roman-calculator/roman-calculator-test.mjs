import test from "ava";
import { add } from "./roman-calculator.mjs";

test("I + I = II", t => {
  t.is(add("I", "I"), "II");
});

test("can't have more than three I", t => {
  t.is(add("II", "II"), "IV");
});

test("5 is V", t => {
  t.is(add("III", "II"), "V");
});

test("can't have more than three C", t => {
  t.is(add("CC", "CC"), "CD");
});
