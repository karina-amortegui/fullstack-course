const person = {
    name: "Alice",
    age: 25,
    city: "New York",
};

console.log(person);
console.log(person.name); // call a specific property of the person

console.log(person['age']); // variation on the previous person.name

person.country = "USA";  // adding a property
console.log(person);

person.age = 30; // changing a property
console.log(person);

delete person.city; // removing a property
console.log(person);

for (const key in person) {
    console.log("key =", key);
    console.log("value =", person[key]);
}

