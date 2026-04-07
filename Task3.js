// 🔹 1. User Input
let name = prompt("Enter Name:");
let ageInput = prompt("Enter Age:");
let salaryInput = prompt("Enter Monthly Salary:");
let loanInput = prompt("Enter Loan Amount:");

// 🔹 7. Type Conversion Check
console.log("Before conversion (Age):", typeof ageInput);
console.log("Before conversion (Salary):", typeof salaryInput);
console.log("Before conversion (Loan):", typeof loanInput);

// Convert string → number
let age = Number(ageInput);
let salary = Number(salaryInput);
let loanAmount = Number(loanInput);

console.log("After conversion (Age):", typeof age);
console.log("After conversion (Salary):", typeof salary);
console.log("After conversion (Loan):", typeof loanAmount);

// 🔹 2. Eligibility Check
let isEligible = (age >= 21 && age <= 60 && salary >= 25000);

if (isEligible) {
    document.writeln("<h3>Eligible ✅</h3>");
} else {
    document.writeln("<h3>Not Eligible ❌</h3>");
}

// 🔹 3. EMI Calculation (Assignment Operator)
let EMI = loanAmount;
EMI /= 12;

document.writeln("<p>EMI: " + EMI + "</p>");

// 🔹 4. Loan Category (If-Else)
let loanCategory;

if (loanAmount > 500000) {
    loanCategory = "High Loan";
} else if (loanAmount > 200000) {
    loanCategory = "Medium Loan";
} else {
    loanCategory = "Low Loan";
}

document.writeln("<p>Loan Category: " + loanCategory + "</p>");

// 🔹 5. Risk Level (Ternary Operator)
let riskLevel = (salary > 50000) ? "Low Risk" : "High Risk";

document.writeln("<p>Risk Level: " + riskLevel + "</p>");

// 🔹 6. Customer Type (Switch)
let customerType;

switch (true) {
    case (EMI > 40000):
        customerType = "Premium Customer";
        break;
    case (EMI > 20000):
        customerType = "Standard Customer";
        break;
    default:
        customerType = "Basic Customer";
}

document.writeln("<p>Customer Type: " + customerType + "</p>");