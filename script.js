// #1 - Understanding Data Types in JavaScript

// Task 1: Declaring variables for student information
let studentName;
let studentAge;
let studentGrade;
let isPresent;

// Task 2: Assigning variables 
studentName = "John Smith";
studentAge = 13;
studentGrade = 8;
isPresent = true;

// Task 3: Display variables in console
console.log("Student information:");
console.log("Name: " + studentName);
console.log("Age: " + studentAge);
console.log("Grade: " + studentGrade);
console.log(`Attendance: ${isPresent ? "Yes":"No"}`);

// #2 - Exploring JavaScript Operators

// Task 1: Declaring variables for two numbers
let num1;
let num2;

// Task 2: Assigning variables
num1 = 37;
num2 = 67;
console.log("Num1:", num1);
console.log("Num2:", num2);

// Task 3: Perform arithmetic operations
console.log("Sum:", (num1 + num2));
console.log("Difference:", (num1-num2));
console.log("Product:", (num1*num2));
console.log("Quotient:", (num1/num2));


// Task 4: Explore assignment operators
num1 *= -3;
num2 += 4;

console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

// Task 5: Use comparison operators
console.log("Is num1 equal to num2?", (num1==num2));
console.log("Is num1 greater than num2?", (num1>num2));
console.log("Is num1 not equal to num2?", (num1!=num2));

// Task 6: Apply logical operators
let isPositive = num1>0&&num2>0;
let isEven = num1%2==0||num2%2==0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);