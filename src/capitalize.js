// Capitalize.js

export function capitalize (letter) {
    const word = letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
    return word;
}

export function reverseString(str) {
    // const letter = str.split("");
    // const reversedLetter = letter.reverse();
    // const joinedLetter = reversedLetter.join();
    // return joinedLetter;

    // let newString = "";
    // for(let i = str.length - 1; i >= 0; i--) {
    //     newString += [i];
    // }

    return str.split("").reverse().join("");
}

export function calculate(num1, operator, num2) {
    let sum;
    switch(operator) {
        case '+':
            sum = num1 + num2;
            break;
        case '*':
            sum = num1 * num2;
            break;
        case '-':
            sum = num1 -num2;
            break;
        case '/':
            sum = num1 / num2;
            break;
        default:
            sum = 'Invalid Operator';
    }
    return sum;
}