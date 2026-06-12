// Capitalize.js

export function capitalize(letter) {
  const word = letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
  return word;
}

export function reverseString(str) {
  // Other ways to get the same result

  // const letter = str.split("");
  // const reversedLetter = letter.reverse();
  // const joinedLetter = reversedLetter.join();
  // return joinedLetter;

  // let newString = "";
  // for(let i = str.length - 1; i >= 0; i--) {
  //     newString += [i];
  // }

  return str.split('').reverse().join('');
}

export function calculate(num1, operator, num2) {
  let sum;
  switch (operator) {
    case '+':
      sum = num1 + num2;
      break;
    case '*':
      sum = num1 * num2;
      break;
    case '-':
      sum = num1 - num2;
      break;
    case '/':
      sum = num1 / num2;
      break;
    default:
      sum = 'Invalid Operator';
  }
  return sum;
}

export function caesarCipher(str, shift) {
  // Normalize the shift key to stay within 0-25 range
  const normalizedShift = ((shift % 26) + 26) % 26;

  // Split string, map each character, and join them back
  return str
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0);

      // Handle Uppercase letters (ASCII 65 to 90)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
      }

      // Handle Lowercase letters (ASCII 97 to 122)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
      }

      // Pass spaces, numbers, and special characters through unmodified
      return char;
    })
    .join('');
}

export function arrayAnalyzer(arr) {
  const arrAverage = (arr) => arr.reduce((a, b) => a + b) / arr.length;

  const arrayData = {
    average: arrAverage(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };

  return arrayData;
}

// Functions to get the minimum and maximum number from an array

// function arrayMin(arr) {
//   return arr.reduce(function (p, v) {
//     return p < v ? p : v;
//   });
// }

// function arrayMax(arr) {
//   return arr.reduce(function (p, v) {
//     return p > v ? p : v;
//   });
// }
