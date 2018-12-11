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

test("500 is D", t => {
  t.is(add("CCC", "CC"), "D");
});

test("can't have more than three X", t => {
  t.is(add("XX", "XX"), "XL");
});

test("50 is L", t => {
  t.is(add("XXX", "XX"), "L");
});

test("can't have more than than one L", t => {
  t.is(add("L", "L"), "C");
});

test("can't have more than than one V", t => {
  t.is(add("V", "V"), "X");
});

test("can't have more than than one D", t => {
  t.is(add("D", "D"), "M");
});
