function capitalize(string) {
  let result = string[0].toUpperCase() + string.slice(1);
  return result;
}

function reversedString(str) {
  let reversedString = str.split("").reduce((acc, char) => char + acc, "");
  return reversedString;
}

class Calculator {
  constructor(x, operator, y) {
    this.x = x;
    this.y = y;

    this.operator = operator;
    this.result = null;
  }
  add(x, operator, y) {
    if (operator == "+") {
      return (this.result = x + y);
    }
  }
  subtract(x, operator, y) {
    if (operator == "-") {
      return (this.result = x - y);
    }
  }

  multiply(x, operator, y) {
    if (operator == "*") {
      return (this.result = x * y);
    }
  }
  divide(x, operator, y) {
    if (operator == "/") {
      return (this.result = x / y);
    }
  }
}

function caeserCipher(text, shiftkey) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encryptedText = "";

  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    let isUpperCase = false;

    // Check if the letter is uppercase
    if (letter === letter.toUpperCase()) {
      isUpperCase = true;
      letter = letter.toLowerCase();
    }

    let letterIndex = alphabet.indexOf(letter);

    // Skip non-alphabetic characters
    if (letterIndex === -1) {
      encryptedText += letter;
      continue;
    }

    let encryptedIndex = (letterIndex + shiftkey) % alphabet.length;

    // Handle negative shift values
    if (encryptedIndex < 0) {
      encryptedIndex += alphabet.length;
    }

    let encryptedLetter = alphabet[encryptedIndex];

    // Restore original case
    if (isUpperCase) {
      encryptedLetter = encryptedLetter.toUpperCase();
    }

    encryptedText += encryptedLetter;
  }

  return encryptedText;
}

function analyzeArray(arr) {
  if (arr.length === 0) {
    return {
      average: NaN,
      min: NaN,
      max: NaN,
      length: 0,
    };
  }

  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  let average = sum / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length: arr.length,
  };
}

export { capitalize, reversedString, Calculator, caeserCipher, analyzeArray };
