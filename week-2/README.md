## What is a Function?

A function is a block of reusable code. Functions take in input (parameters), perform actions, and return an output (result)

```js
// Declaring a Function
function car(year, make, model) {
  return `Year: ${year}, Make: ${make}, Model: ${model}`;
}

// Calling a Function
car(2025, "Lamborghini", "Huracán EVO Spyder");
```

## Arrow Functions (ES6)

Arrows functions allow you to write in a concise way.

```js
// Arrow Function
const car = (year, make, model) => {
  return `Year: ${year}, Make: ${make}, Model: ${model}`;
};

// Shorter version (if function body has only a single return statement)
const carShort = (year, make, model) =>
  `Year: ${year}, Make: ${make}, Model: ${model}`;

console.log(car(2025, "Lamborghini", "Huracán EVO Spyder"));
console.log(carShort(2025, "Lamborghini", "Huracán EVO Spyder"));
```

## Anonymous Functions

Arrow functions provide a shorter syntax for writing functions and do not bind their own `this` context.

```js
setTimeout(function () {
  console.log("This runs after 2 seconds!");
}, 2000);
```

## Rest Parameter

Rest Parameters allows a function to accept an indefinite number of arguments as an array.

```js
function carWithExtras(year, make, model, ...extras) {
  return `Year: ${year}, Make: ${make}, Model: ${model}, Extras: ${extras.join(
    ", "
  )}`;
}

console.log(
  carWithExtras(
    2025,
    "Lamborghini",
    "Huracán EVO Spyder",
    "GPS",
    "Sunroof",
    "Heated Seats"
  )
);
```

## Callback Functions

A callback function is a function passed as an argument to another function, and it is executed later.

```js
function processUserInput(callback) {
  const name = prompt("Enter your name:");
  callback(name);
}

processUserInput(function (name) {
  alert(`Hello, ${name}!`);
});
```

## Scope

Functions have local scope, meaning variables defined inside a function are not accessible outside.

```js
const brand = "Lamborghini"; // Global scope

function showCarDetails(year, model) {
  const type = "Sports Car"; // Local scope
  return `Year: ${year}, Brand: ${brand}, Model: ${model}, Type: ${type}`;
}

console.log(showCarDetails(2025, "Huracán EVO Spyder"));
// console.log(type); // Error: type is not defined
```
