import {
  capitalize,
  reversedString,
  Calculator,
  caeserCipher,
  analyzeArray,
} from "./testJest";

test("captilize the first letter", () => {
  let n = "isra";
  expect(capitalize(n)).toBe("Isra");
});

test("reversing string", () => {
  let n = "isra";
  expect(reversedString(n)).toBe("arsi");
});

test("calculator addition", () => {
  let x = 5;
  let y = 5;
  let operator = "+";
  let newCal = new Calculator();
  expect(newCal.add(x, operator, y)).toBe(10);
});

test("calculator multiplication", () => {
  let x = 5;
  let y = 5;
  let operator = "*";
  let newCal = new Calculator();
  expect(newCal.multiply(x, operator, y)).toBe(25);
});

test("calculator subtraction", () => {
  let x = 5;
  let y = 5;
  let operator = "-";
  let newCal = new Calculator();
  expect(newCal.subtract(x, operator, y)).toBe(0);
});

test("calculator divide", () => {
  let x = 5;
  let y = 5;
  let operator = "/";
  let newCal = new Calculator();
  expect(newCal.divide(x, operator, y)).toBe(1);
});

test("ceaser cipher", () => {
  let test = "abcd";
  let key = 1;
  expect(caeserCipher(test, key)).toBe("bcde");
});

test("ceaser cipher punctuation", () => {
  let test = "abcd,,,,,";
  let key = 1;
  expect(caeserCipher(test, key)).toBe("bcde,,,,,");
});

test("ceaser cipher case", () => {
  let test = "aBcd";
  let key = 1;
  expect(caeserCipher(test, key)).toBe("bCde");
});

test("ceaser cipher a and z wrapping", () => {
  let test = "aBcz";
  let key = 1;
  expect(caeserCipher(test, key)).toBe("bCda");
});

test("ceaser cipher negative values", () => {
  let test = "aBcz";
  let key = -25;
  expect(caeserCipher(test, key)).toBe("bCda");
});

test("analye array", () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});
