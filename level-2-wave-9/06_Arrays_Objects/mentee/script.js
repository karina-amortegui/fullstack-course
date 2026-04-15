// ARRAYS & OBJECTS BASICS —
// -----------------------------------------

// -------- TASK 1 — CREATE A SIMPLE ARRAY --------

// STEP 1: Create an array called favoriteFruits with at least 3 fruits.
// STEP 2: Log the entire array.
// STEP 3: Log the first and second items using indexes.

const favoriteFruits = ["Dragon Fruit", "Star Fruit", "Durian"];
console.log("All Fruits", favoriteFruits);

console.log("First Fruit", favoriteFruits[0]);
console.log("Second Fruit", favoriteFruits[1]);

// -------- TASK 2 — MODIFY AN ARRAY --------

// STEP 4: Add a new fruit to the array (basic: favoriteFruits[3] = "...").
// STEP 5: Update one existing fruit (change its value).
// STEP 6: "Remove" a fruit by setting it to null or an empty string.
// STEP 7: Log the updated array.

favoriteFruits[3] = "Strawberry";
favoriteFruits[1] = "Nanche";
favoriteFruits[0] = "";
console.log("Updated Array", favoriteFruits);
// -------- TASK 3 — CREATE A SIMPLE OBJECT --------

// STEP 8: Create an object called student with:
//         name, age, isEnrolled (boolean)
// STEP 9: Log the object.
// STEP 10: Log individual properties (student.name, student.age)

const student = {
  name: "Dave",
  age: 28,
  isEnrolled: true,
};

console.log(student);

console.log(student.name, student.age, student.isEnrolled);

// -------- TASK 4 — MODIFY OBJECT PROPERTIES --------

// STEP 11: Update the student's age.
// STEP 12: Add a new property called favoriteColor.
// STEP 13: Log the updated object.

student.age = 30;

student.favoriteColor = "blue";

delete student.isEnrolled;

console.log(student);
