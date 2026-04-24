// init studets array
const students = [];

// add student
function addStudents(name, grade) {
    students.push ({
        name,
        grade,
    });
}

// function to remove student
function removeStudent(name) {
    const index = students.findIndex(student => student.name);
    if(index !== -1) {
        students.splice(index, 1);
        console.log(name, "has been removed");
    } else {
        console.log(name, "was not found");
    }
}

// function to filter students
function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}

// function to map students in formatted list
function formatStudentList(){
    return students.map(student => `${student.name} - Grade: ${student.grade}`)
}

// start
console.log("students =", students);


// add students
addStudents("Alice", 85);
addStudents("Bob", 90);
addStudents("Charles", 78);
addStudents("Davie", 60);
addStudents("Emma", 92);

removeStudent("Charles");

// console.log("students =", students);
console.log("STUDENT LIST");
console.log(formatStudentList());

console.log("Students with Grade equal to or higher than 80");
console.log(filterTopStudents(80));