const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Declaring and Manipulating Arrays
// // console.log(fruits[0]);
// // console.log(fruits[2]);

// console.log(fruits[1]);

// fruits[1] = "Blueberry";

// console.log(fruits);

// console.log(fruits.length); // Output: 3

// ARRAY METHODS

// push - adds element to the last index position
// fruits.push("Mango");
// console.log(fruits);

// // pop - removes element from the last index position
// fruits.pop();
// console.log(fruits);

// // shift - removes element from the beginning position (index 0)
// fruits.shift();
// console.log(fruits);

// // unshift - adds element to the beginning position (index 0)
// fruits.unshift("Grapes");
// console.log(fruits);

// // splice - add / remove elements
// // adding
// fruits.splice(1, 1, "Peach");
// console.log(fruits);
// // removing 
// fruits.splice(1, 2);
// console.log(fruits);

// const numbers = [1, 2, 3, 4, 5];
// // map
// console.log("numbers =", numbers);
// const doubled = numbers.map((num) => num * 2);
// console.log("doubled =", doubled);

// // filter
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// map
const numbers = [1 , 2, 3, 4, 5];
console.log("numbers =", numbers);
const doubled = numbers.map(num => num * 2);
console.log("doubled =", doubled);
console.log("numbers =", numbers);