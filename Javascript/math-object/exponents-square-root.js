// Math.pow() - the power of a number (exponentiation)
console.log("Math.pow() --------");
console.log("Math.pow(2, 3)", Math.pow(2, 3));
console.log("Math.pow(5, 2)", Math.pow(5, 2));

// Alternative methods to Math.pow()
console.log("2 ** 3", 2 ** 3);
console.log("5 ** 2", 5 ** 2);

// Math.sqrt()
console.log("Math.sqrt --------");
console.log("Math.sqrt(25)", Math.sqrt(25));
console.log("Math.sqrt(49)", Math.sqrt(49));

// Check if a number is a perfect square
// const num = 16;
// if(Math.sqrt(num) % 1 == 0) {
//     console.log("is a perfect square");
// } else {
//     console.log("is not a perfect square");
// }

// Put this in a function
console.log('function to see if perfect square');

function isPerfectSquare(num) {
    if(Math.sqrt(num) % 1 == 0) return true;
    return false;
}

console.log("isPerfectSquare(10)", isPerfectSquare(10));
console.log("isPerfectSquare(16)", isPerfectSquare(16));
console.log("isPerfectSquare(25)", isPerfectSquare(25));
console.log("isPerfectSquare(27)", isPerfectSquare(27));
