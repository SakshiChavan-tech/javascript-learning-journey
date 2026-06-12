let employee = {
    id: 101,
    name: "Sakshi Chavan",
    department: "Development",
    salary: 45000,
    experience: 2
};

console.log("===== EMPLOYEE MANAGEMENT SYSTEM =====");

console.log("Employee ID: " + employee.id);
console.log("Name: " + employee.name);
console.log("Department: " + employee.department);
console.log("Salary: ₹" + employee.salary);
console.log("Experience: " + employee.experience + " years");

let bonus = employee.salary * 0.10;
let totalSalary = employee.salary + bonus;

console.log("\n----- SALARY DETAILS -----");
console.log("Bonus: ₹" + bonus);
console.log("Total Salary: ₹" + totalSalary);

let status = employee.experience >= 2
    ? "Eligible for Promotion Review"
    : "Not Eligible for Promotion Review";

console.log("\nStatus: " + status);