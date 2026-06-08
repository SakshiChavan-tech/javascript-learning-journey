let studentName = "Sakshi Chavan";
let age = 21;
let course = "Full Stack Development";
let city = "Pune";
let marksJava = 85;
let marksSQL = 90;
let marksHTML = 88;

let totalMarks = marksJava + marksSQL + marksHTML;
let averageMarks = totalMarks / 3;

console.log("===== STUDENT REPORT =====");
console.log("Name: " + studentName);
console.log("Age: " + age);
console.log("Course: " + course);
console.log("City: " + city);

console.log("\n----- MARKS -----");
console.log("Java: " + marksJava);
console.log("SQL: " + marksSQL);
console.log("HTML: " + marksHTML);

console.log("\nTotal Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks);

if (averageMarks >= 75) {
    console.log("Result: Distinction");
} else if (averageMarks >= 50) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}