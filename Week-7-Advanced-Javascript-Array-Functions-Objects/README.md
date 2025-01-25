## Objects

Objects are key-value pairs that store multiple related data types.

```javascript
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};
```

## Properties

Properties are the key-value pairs in an object.

```javascript
const car = { brand: "Toyota", color: "red" };

console.log(car.brand); // Accessing a property
```

## Methods

Methods are functions stored as values inside an object.

```javascript
const calculator = {
  add: function (a, b) {
    return a + b;
  },
};

console.log(calculator.add(2, 3)); // 5
```

## Map

The map() method creates a new array by applying a function to each element in the original array.

```javascript
const numbers = [1, 2, 3];
const squared = numbers.map((num) => num ** 2);

console.log(squared); // [1, 4, 9]
```

## Filter

The filter() method creates a new array with elements that pass a condition.

```javascript
const numbers = [1, 2, 3, 4];
const even = numbers.filter((num) => num % 2 === 0);

console.log(even); // [2, 4]
```

## Reduce

The reduce() method reduces an array to a single value by applying a function to an accumulator and each element.

```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 6
```

## ForEach

The forEach() method executes a function once for each array element.

```javascript
const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num)); // Prints 1, 2, 3
```

## for...in vs for...of

Loops through the keys of an object.

```javascript
const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key); // a, b
}
```

## for...of

Loops through the values of an iterable (e.g., arrays, strings).

```javascript
const arr = [1, 2, 3];
for (let value of arr) {
  console.log(value); // 1, 2, 3
}
```

## for...of Loop

Used to iterate over iterable objects like arrays, strings, and maps.

```javascript
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit); // apple, banana, cherry
}
```
