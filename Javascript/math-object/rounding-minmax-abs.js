// console.log(Math.PI);
// console.log(Math.E);

// Math.round - rounds a number to the nearest integer
console.log("Math.round() -------");
console.log("Math.round(4.6)", Math.round(4.6));
console.log("Math.round(4.3)", Math.round(4.3));

// Math.floor - round down to the nearest integer
console.log("Math.floor() --------")
console.log("Math.floor(4.9)", Math.floor(4.9));
console.log("Math.floor(4.1)", Math.floor(4.1));

// Math.ceil - rounds up to the nearest integer
console.log("Math.cei() --------");
console.log("Math.ceil(4.1)", Math.ceil(4.1));
console.log("Math.ceil(4.9)", Math.ceil(4.9));

// Math.max and Math.min find the largest/smallest number
console.log("Math.max() -------");
console.log("Math.max(10, 20, 5, 40, 30)", Math.max(10, 20, 5, 40, 30));
console.log("Math.min() -------");
console.log("Math.min(10, 20, 5, 40, 30)", Math.min(10, 20, 5, 40, 30));

const nums = [1, 2, 3, 4, 5, 10, 40, 100, 44, 30];
console.log("nums =", ...nums);
console.log("Math.min(...nums)", Math.min(...nums));
console.log("Math.max(...nums)", Math.max(...nums));

// Math.abs() - gets the absolute value of a number
// converts negative numbers to positive
console.log("Math.abs() -------");
console.log("Math.abs(-10)", Math.abs(-10));
console.log("Math.abs(10)", Math.abs(10));