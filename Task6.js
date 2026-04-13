console.log("===== TASK 1: CART SYSTEM =====");

let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
];

// Total price
let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log("Total Price:", total);

// Products above 1000
let above1000 = cart.filter(item => item.price > 1000);
console.log("Above 1000:", above1000);

// Names uppercase
let namesUpper = cart.map(item => item.name.toUpperCase());
console.log("Uppercase Names:", namesUpper);


console.log("\n===== TASK 2: STUDENT SYSTEM =====");

let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];

// Failed students
let failed = students.filter(s => s.marks < 50);
console.log("Failed:", failed);

// Any distinction
let hasDistinction = students.some(s => s.marks > 80);
console.log("Any Distinction:", hasDistinction);

// All passed
let allPassed = students.every(s => s.marks > 35);
console.log("All Passed:", allPassed);

// First failed
let firstFail = students.find(s => s.marks < 50);
console.log("First Failed:", firstFail);


console.log("\n===== TASK 3: EMPLOYEE =====");

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];

// Increase salary
let increased = employees.map(emp => ({
  ...emp,
  salary: emp.salary * 1.1
}));
console.log("Increased Salary:", increased);

// Salary > 30000
let highSalary = employees.filter(emp => emp.salary > 30000);
console.log("Salary > 30000:", highSalary);

// Total salary
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary:", totalSalary);

// Sort descending
let sorted = [...employees].sort((a, b) => b.salary - a.salary);
console.log("Sorted High to Low:", sorted);


console.log("\n===== TASK 4: STRING =====");

let products = ["Laptop", "Mobile", "Tablet", "Camera"];

console.log("Includes Mobile:", products.includes("Mobile"));

let lower = products.map(p => p.toLowerCase());
console.log("Lowercase:", lower);

console.log("Index of Tablet:", products.indexOf("Tablet"));

console.log("Joined:", products.join("-"));


console.log("\n===== TASK 5: AGE =====");

// Hardcoded DOB
let dob = new Date("2002-01-01");
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();
let m = today.getMonth() - dob.getMonth();

if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
  age--;
}

console.log(`You are ${age} years old`);


console.log("\n===== TASK 6: LOGIN =====");

let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
];

// Test login
let inputUser = "admin";
let inputPass = "1234";

let foundUser = users.find(u => u.username === inputUser && u.password === inputPass);

if (foundUser) {
  console.log("Login Success ✅");
} else {
  console.log("Invalid Credentials ❌");
}


console.log("\n===== TASK 7: EVEN NUMBER =====");

let numbers = [10, 15, 20, 25, 30];

// Even numbers
let evens = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens);

// Any odd
let hasOdd = numbers.some(n => n % 2 !== 0);
console.log("Any Odd:", hasOdd);

// All even
let allEven = numbers.every(n => n % 2 === 0);
console.log("All Even:", allEven);

// First > 20
let firstGreater = numbers.find(n => n > 20);
console.log("First > 20:", firstGreater);


console.log("\n===== BONUS TASK =====");

let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];

// Revenue of delivered
let revenue = orders
  .filter(o => o.status === "delivered")
  .reduce((sum, o) => sum + o.amount, 0);

console.log("Delivered Revenue:", revenue);

// Pending orders
let pending = orders.filter(o => o.status === "pending");
console.log("Pending:", pending);

// Any > 1000
let anyHigh = orders.some(o => o.amount > 1000);
console.log("Any > 1000:", anyHigh);

// Sort ascending
let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);
console.log("Sorted Asc:", sortedOrders);