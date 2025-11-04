// Homework 9 - JavaScript Basics and Data Types
// Stepan Karapetyan
// 11/4/2025

// Exercise 1
console.log("Exercise 1:");
var result = 3 + 5 * (10 / 2) - (8 - 4);
console.log(result);
console.log("\n");

// Exercise 2
console.log("Exercise 2:");
var projectIdentifier = "COMP484";
// The following line would fail because JavaScript is case-sensitive and 'ProjectIdentifier' is not the same as 'projectIdentifier'.
// ProjectIdentifier = "JS_Advanced"; // Incorrect reassignment
projectIdentifier = "JS_Advanced"; // Correct reassignment
console.log(projectIdentifier);
console.log("\n");

// Exercise 3
console.log("Exercise 3:");
var courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log(courseDescription);
console.log("\n");

// Exercise 4
console.log("Exercise 4:");
var errorMessage = 'An internal server error occurred: \"Access Denied\"';
console.log(errorMessage);
console.log("\n");

// Exercise 5
console.log("Exercise 5:");
var valueA = 10;
var valueB = "4";
var resultSubtraction = valueA - valueB;
var resultMultiplication = valueA * valueB;
console.log(resultSubtraction);
console.log(resultMultiplication);
console.log(typeof valueB);
console.log(typeof resultSubtraction);
console.log(typeof resultMultiplication);
console.log("\n");

// Exercise 6   
console.log("Exercise 6:");
var unassignedVar;
var explicitNull = null;
console.log(typeof unassignedVar);
console.log(typeof explicitNull);
/*
As stated in the slides null data type is the intentional absence of an object value, but
The 'typeof' operator returns "object" for 'null' due to a historical bug in JavaScript. 
When JavaScript was first created, values were represented in a way that included a type tag. 
The type tag for objects was 0, and 'null' was represented with the same tag, leading to the incorrect classification.
*/
console.log("\n");

// Exercise 7
console.log("Exercise 7:");
var isBlocking = true;
console.log(typeof isBlocking);
isBlocking = "true";
console.log(typeof isBlocking);
console.log("\n");

// Exercise 8
console.log("Exercise 8:");
// var 1stVariable = 10; // Invalid: Variable names cannot start with a number.
// var my variable = 20; // Invalid: Variable names cannot contain spaces.
// var @specialVar = 30; // Invalid: Variable names cannot start with special characters other than $ or _.
console.log("Invalid variable declarations are commented out with explanations.");
console.log("\n");

// Exercise 9
console.log("Exercise 9:");
var counterValue = 50;
counterValue /= 5;
counterValue -= 3;
console.log(counterValue);
console.log("\n");

// Exercise 10
console.log("Exercise 10:");
var x = 10;
var y_post = x++;
console.log("y_post:", y_post);
console.log("x after y_post:", x);
x = 10; // Reinitialize x
var z_pre = ++x;
console.log("z_pre:", z_pre);
console.log("x after z_pre:", x);
/*
In the case of y_post, the value of x is assigned to 'y_post' before 'x' is incremented, so 'y_post' gets the original value of 10, and then 'x' becomes 11.
In the case of 'z_pre', 'x' is incremented first, so 'x' becomes 11 before its value is assigned to 'z_pre', resulting in 'z_pre' being 11.
*/
console.log("\n");

// Exercise 11
console.log("Exercise 11:");
var testNumber = 0;
var testBoolean = false;
if (testNumber == testBoolean) {
    console.log("testNumber and testBoolean are loosely equal.");
}
// This comparison returns true because of type coercion. In JavaScript, when using the loose equality operator (==),
// the boolean 'false' is coerced to the number 0, making the comparison 0 == 0, which is true.
console.log("\n");

// Exercise 12
console.log("Exercise 12:");
var versionA = 10.0;
var versionB = "10.0";
if (versionA !== versionB) {
    console.log("versionA and versionB are not strictly equal.");
} else {
    console.log("versionA and versionB are strictly equal.");
}
console.log("\n");

// Exercise 13
console.log("Exercise 13:");
var isLoggedIn = true;
var isSubscriber = false;
var isTrialExpired = false;

if ((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}
console.log("\n");

// Exercise 14
console.log("Exercise 14:");
var conditionA = true;
var conditionB = false;
if ((conditionA || conditionB) && !(conditionA && conditionB)) {
    console.log("XOR Success");
} else {
    console.log("XOR Fail");
}
console.log("\n");

// Exercise 15
console.log("Exercise 15:");
var scriptLoadType = "deferred";
var loadStatus;

if (scriptLoadType === "deferred") {
    loadStatus = "Non-blocking";
} else {
    loadStatus = "Potentially Blocking";
}
console.log("Load Status (if/else):", loadStatus);
var loadStatusTernary = (scriptLoadType === "deferred") ? "Non-blocking" : "Potentially Blocking";
console.log("Load Status (ternary):", loadStatusTernary);
console.log("\n");

// Exercise 16
console.log("Exercise 16:");
function calculateRenderTime() {
    // This function calculates the time taken to parse HTML and execute JavaScript.
}
console.log("\n");

// Exercise 17
console.log("Exercise 17:");
var currentDate = new Date();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var year = currentDate.getFullYear();
var formattedDate = "Today is " + month + "/" + day + "/" + year;
console.log(formattedDate);
console.log("\n");

// Exercise 18
console.log("Exercise 18:");
var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2;
var diffResult = val1 - val2;
console.log("Sum Result:", sumResult);
console.log("Diff Result:", diffResult);
/*
The sumResult is "205" (a string) because the + operator concatenates the string "5" to the number 20.
The diffResult is 15 (a number) because the - operator converts the string "5" to a number before performing the subtraction.
*/
console.log("\n");

// Exercise 19
console.log("Exercise 19:");
var dataInput = 484;
if (typeof dataInput === "number") {
    console.log("Input is numeric.");
} else {
    dataInput = true;
    console.log(typeof dataInput);
}
console.log("\n");

// Exercise 20
console.log("Exercise 20:");
/*
If this script is placed in the HTML <head> without the defer or async attributes,
the DOM may not be fully loaded when this script runs, leading to the error:
"Cannot set property 'innerHTML' of null"
*/
// Code is commented out so I can run the file in node.js without errors.
// var h1Element = document.createElement("h1");
// h1Element.innerHTML = "Interactive Layer Loaded";
// document.body.appendChild(h1Element);
console.log("Exercise 20 code is commented out to avoid errors in non-browser environments.");
console.log("\n");

// End of Homework 9