// equality and inequality with strings
let str1: string = 'hy';
let str2: string = 'by';

console.log("Test for equality of strings: I predict False.");
console.log(str1 === str2);

console.log("Test for inequality of strings: I predict True.");
console.log(str1 !== str2);

// the lower case function
let uppercaseStr: string = 'HY';

console.log("Test for lowercase conversion: I predict true.");
console.log(uppercaseStr.toLowerCase() === 'hy'); 

// Numerical tests
let num1: number = 15;
let num2: number = 20;

console.log("Numerical equality test: I predict False.")
console.log(num1 === num2);

console.log("Numerical inequality test: I predict True.");
console.log(num1 !== num2)

console.log("Greater than test: I predict False.");
console.log(num1 > num2)

console.log("Less than test: I predict True.")
console.log(num1 < num2)

console.log("Greater than or equal to test: I predict False.")
console.log(num1 >= num2)

console.log("Less than or equal to test: I predict True.");
console.log(num1 <= num2)

// using "and" and "or" operators
let isSunny: boolean = true;
let isWarm: boolean = false;

console.log("Test for 'and' operator: I predict False.")
console.log(isSunny && isWarm)

console.log("Test for 'or' operator: I predict True.");
console.log(isSunny || isWarm)

// whether an item is in an array
let colors: string[] = ['red', 'yellow', 'orange'];

console.log("Test if 'red' is in the array: I predict True.");
console.log(colors.indexOf('red') !== -1); 

// item is not in an array
console.log("Test if 'black' is in the array: I predict False.");
console.log(colors.indexOf('black') !== -1);
