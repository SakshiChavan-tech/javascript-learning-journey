let studentName = "SakshiChavan";
let course = "JavaScript";

let marks = [85, 90, 88, 76, 92];

let totalMarks = 0;
let highestMarks = marks[0];

console.log("===== STUDENT PERFORMANCE ANALYZER =====");
console.log("Name: " + studentName);
console.log("Course: " + course);

console.log("\n----- SUBJECT MARKS -----");

for (let i = 0; i < marks.length; i++) {
    console.log("Subject " + (i + 1) + ": " + marks[i]);

    totalMarks += marks[i];

    if (marks[i] > highestMarks) {
        highestMarks = marks[i];
    }
}

let averageMarks = totalMarks / marks.length;

let result = averageMarks >= 75
    ? "Distinction"
    : averageMarks >= 50
    ? "Pass"
    : "Fail";

console.log("\n----- PERFORMANCE SUMMARY -----");
console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks);
console.log("Highest Marks: " + highestMarks);
console.log("Result: " + result);