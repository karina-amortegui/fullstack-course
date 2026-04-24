// let globalVar = "I am global";

// function testScope() {
//     let localVar = "I exist only in this funcion"
//     console.log(globalVar); // Works
//     console.log(localVar); // Works
// }

// testScope()
// console.log(globalVar); // Works
// console.log(localVar); // Error

// FUNCTION HOISTING

// hello();

// function hello() {
//     console.log("Hello from a function declaration");
// }

greet();

const greet = function () {
    console.log("HELLO FROM FUNCTION EXPRESSION");
};