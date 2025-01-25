## Objects + Properties

An object is a collection of key-value pairs, and in this example above, `title`, `author`, and `pages` are the properties of the book object.

```js
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 218,
};

console.log(book.title); // "The Great Gatsby"
console.log(book["author"]); // "F. Scott Fitzgerald"
```

### Accessing Properties

Data can be accessed using Dot Notation or Bracket Notation.

```js
console.log(book.title); // "The Great Gatsby"
console.log(book["author"]); // "F. Scott Fitzgerald"
```

### Adding and Modifying Properties

You can add new properties or modify existing ones.

```js
book.publishYear = 1925; // Adding
book.pages = 220; // Modifying
```

### Removing Properties

You can remove properties using the delete keyword

```js
delete book.pages; // Remove 'pages'
```

## Methods

A method is a function that is a property of an object. Methods allow objects to perform actions or behaviors.

```js
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 218,
  displayDetails: function () {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages`);
  },
};

// Using an arrow function (note the difference in `this` binding)
const book2 = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
  displayDetails: () => {
    console.log(`${book2.title} by ${book2.author}, ${book2.pages} pages`);
  },
};

book.displayDetails(); // "The Great Gatsby by F. Scott Fitzgerald, 218 pages"
book2.displayDetails(); // "1984 by George Orwell, 328 pages"
```

### Calling Methods

You call a method using the dot notation followed by parentheses.

```js
book.displayDetails(); // "The Great Gatsby by F. Scott Fitzgerald, 218 pages"
book2.displayDetails(); // "1984 by George Orwell, 328 pages"
```

## Array Functions

Array functions are methods that help you manipulate and process arrays.

### Map()

The `map()` function transforms each element in the original array and returns a new array.

```js
const numbers = [1, 2, 3];
const squared = numbers.map((num) => num ** 2);

console.log(squared); // [1, 4, 9]
```

#### Ex.1

Create an array of strings fruits and use `map()` to create a new array where each name is capitalized.

```js
const names = ["john", "jane", "bob", "alice"];
const uppercaseNames = names.map((name) => name.toUpperCase());
console.log(uppercaseNames); // ['JOHN', 'JANE', 'BOB', 'ALICE']
```

## Filter()

The `filter()` method creates a new array with elements that pass a condition.

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### Ex.1

Use `filter()` to get only the strings that start with the letter "a" from the following array: `['apple', 'banana', 'avocado', 'cherry']`.

```js
const fruits = ["apple", "banana", "avocado", "cherry"];
const aFruits = fruits.filter((fruit) => fruit.startsWith("a"));
console.log(aFruits); // ['apple', 'avocado']
```

## Reduce

The reduce() method takes a function as an argument and applies it to each element in the array, reducing the array to a single value.

```js
const reducedValue = array.reduce((accumulator, currentElement) => {
  // return the new accumulator value
}, initialValue);
```

### Ex.1

Create an array of objects representing products, and use `reduce()` to calculate the total price of all products.

```js
const products = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 },
];

const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice); // 60
```

## ForEach

The `forEach()` method takes a function as an argument and applies it to each element in the array.

```js
const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num)); // Prints 1, 2, 3
```

### Ex. 1

Create an array of objects representing people, and use forEach() to print out each person's name and age.

```js
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 35 },
  { name: "Bob", age: 40 },
];

people.forEach((person) =>
  console.log(`${person.name} is ${person.age} years old`)
);
// Output:
// John is 25 years old
// Jane is 35 years old
// Bob is 40 years old
```

## for...in vs for...of

In JavaScript, we have two types of for loops: `for...in` and `for...of`. Both loops are used to iterate over arrays and objects, but they have some key differences.

```js
const numbers = [1, 2, 3, 4, 5];

// for...in
// loop iterates over the property names of an object
for (const index in numbers) {
  console.log(index); // Output: 0, 1, 2, 3, 4
}

// for...of
// loop iterates over the values of an array or object
for (const num of numbers) {
  console.log(num); // Output: 1, 2, 3, 4, 5
}
```

### for...in

```js
const person = {
  name: "John",
  age: 25,
  occupation: "Developer",
};

for (const prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}
// Output:
// name: John
// age: 25
// occupation: Developer
```

### for...of

```js
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}
// Output:
// 1
// 2
// 3
// 4
// 5
```
