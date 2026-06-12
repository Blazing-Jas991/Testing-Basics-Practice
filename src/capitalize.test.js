// Capitalize.test.js

import {
  capitalize,
  reverseString,
  calculate,
  caesarCipher,
  arrayAnalyzer,
} from './capitalize.js';

test('Turns the first letter of a word into a Capital letter', () => {
  expect(capitalize('letter')).toBe('Letter');
});

test('Reverses a string', () => {
  expect(reverseString('jasper')).toBe('repsaj');
});

test('Perform Basic calculations', () => {
  expect(calculate(2, '+', 2)).toBe(4);
  expect(calculate(2, '*', 3)).toBe(6);
  expect(calculate(10, '-', 5)).toBe(5);
  expect(calculate(50, '/', 5)).toBe(10);
});

test('Takes a word and a shift key and translates into caesar cipher', () => {
  expect(caesarCipher('jasper', 3)).toBe('mdvshu');
  expect(caesarCipher('jasper', 4)).toBe('newtiv');
  expect(caesarCipher('jasper is the, king', 3)).toBe('mdvshu lv wkh, nlqj');
});

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

test('Takes an array and returns an object with the min, max, average values and length of the array', () => {
  expect(arrayAnalyzer(newArr)).toEqual({
    average: 5,
    length: 9,
    max: 9,
    min: 1,
  });
});
