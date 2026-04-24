// if statement

// let temperature = 30;

// if(temperature > 25) {
//     console.log("it is a hot day! stay hydrated");
// }

// if ... else

//     const isWeekend = false;

//     if (isWeekend) {
//         console.log("Enjoy your weekend");
//     } else {
//         console.log("Time to work!");
//     }

// if ... else if ... else

// const marks = 85;

// if (marks >= 90) {
//     console.log('Grade: A');
// } else if (marks >= 80) {
//     console.log("Grade: B");
// } else if (marks >= 70) {
//     console.log("Grade: C");
// } else if (marks >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }

// Checking for multiple conditions (&&, || operators)

// const age = 20;
// const hasDrivingLicense = true;

// if (age >= 18 && hasDrivingLicense) {
//     console.log("You can drive");
// } else {
//     console.log("Yuo can not drive");
// }

// if (age >= 18 || hasDrivingLicense) {
//     console.log("You can drive");
// } else {
//     console.log("Yuo can not drive");
// }

// Ternary Operator ( ? : ) - aka shorthand "if else" statement

const isLoggedIn = false;

const msg = isLoggedIn ? "Welcome back": "Please log in.";
console.log(msg);