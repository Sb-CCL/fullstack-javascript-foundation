// Will alert be shown?

if ("0") {
  alert("Hello");
}

// Answer: Yes, the if statement is evaluated as a boolean, as since the string is not empty, it is true and therefore will alert the user.

("use strict");

let value = prompt('What is the "official" name of JavaScript?');

if (value == "ECMAScript") {
  alert("Right!");
} else {
  alert("You don’t know? ECMAScript!");
}

// Rewrite this if using the conditional operator '?':

// let result;

// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }

let result = a + b < 4 ? "Below" : "Over";

// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
