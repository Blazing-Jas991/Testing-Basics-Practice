// Capitalize.test.js

import { capitalize, reverseString, calculate } from "./capitalize.js";

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