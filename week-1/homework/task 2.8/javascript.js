// // What are the final values of all variables a, b, c and d after the code below?

// let a = 1,
//   b = 1;

// alert(++a); // 2
// alert(b++); // 1

// alert(a); // 2
// alert(b); // 2

// // What are the values of a and x after the code below?
// let a = 2; // 5
// let x = 1 + (a *= 2); // (1 + (2 * 2) = 5)

// // What are results of these expressions?

// "" + 1 + 0; // (1)
// "" - 1 + 0; // (2)
// true + false;
// 6 / "3";
// "2" * "3";
// 4 + 5 + "px";
// "$" + 4 + 5;
// "4" - 2;
// "4px" - 2;
// "  -9  " + 5; // (3)
// "  -9  " - 5; // (4)
// null + 1; // (5)
// undefined + 1; // (6)
// " \t \n" - 2; // (7)

// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

// It doesn't add but instead just list them, for example instead of "10" it gives "55"

let a1 = prompt("First number?", 1);
let b1 = prompt("Second number?", 2);

alert(+a1 + +b1); // 3
