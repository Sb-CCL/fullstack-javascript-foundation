// If-Else: Code is run depending on if the condition is true or false.
let isRaining = true;

if (isRaining) {
  console.log("Bring an umbrella!"); // Runs if true
} else {
  console.log("No umbrella needed!"); // Runs if false
}
// Output: "Bring an umbrella!" (if isRaining is true)

// For Loop: Runs 10 times, printing numbers from 0 to 9.
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// While Loop: Continues to run as long as i is less than 5, printing numbers 0 to 4.
let i = 0;
while (i < 5) {
  console.log(i);
  i++; // Increase i by 1
}
// Output: 0, 1, 2, 3, 4

// Do-While Loop: Runs at least once, then checks if a is less than 5.
let a = 0;
do {
  console.log(a); // Prints numbers from 0 to 4
  a++; // Increase a by 1
} while (a < 5);
// Output: 0, 1, 2, 3, 4

// Examples
// for loop print 1 - 100
for (let i = 1; i <= 100; i++) {
  if (i == 13) {
    console.log("unlucky");
  } else {
    console.log(i);
  }
}

// while loop print 1 - 100
let y = 1;
while (y <= 100) {
  if (y == 13) {
    console.log("unlucky");
  } else {
    console.log(y);
  }
  y++;
}
