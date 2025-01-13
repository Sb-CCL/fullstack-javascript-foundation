## What is DOM manipulation?

DOM manipulation, or Document Object Model manipulation, is a JavaScript feature that lets developers change the structure, style, and content of web pages. 

## Core Concepts
- **Selecting Elements**: Efficiently target elements in the DOM.
- **Manipulating Elements**: Update content, attributes, or styles.
- **Creating and Removing Elements**: Add or delete elements dynamically.
- **Event Handling**: Respond to user actions.

## Selecting Elements
Selecting elements. 

``` js
// Select the first <h1> element on the page
const header = document.querySelector('h1');

// Select all elements with the class "btn" (returns a NodeList)
const buttons = document.querySelectorAll('.btn');

// Select an element by its ID (only one element per ID)
const mainContent = document.getElementById('main-content');

// Select all elements with the class "item" (returns an HTMLCollection)
const items = document.getElementsByClassName('item');

// Select all <p> elements on the page
const paragraphs = document.getElementsByTagName('p');
```

## Manipulating Elements
Change content, attributes, and styles dynamically.

```js
// Change the text inside the <h1> element
header.textContent = 'Welcome to the DOM!'; // Sets plain text (safe from Cross Site Scripting (XSS))

// Replace the content of <h1> with HTML (use with caution to avoid XSS attacks)
header.innerHTML = '<span style="color: blue;">Hello DOM!</span>';

// Add a custom attribute to the <h1> element
header.setAttribute('data-role', 'main-header');

// Alternatively, set the ID directly
header.id = 'new-header';

// Add a CSS class to the element
header.classList.add('highlight');

// Remove a CSS class
header.classList.remove('highlight');

// Toggle a CSS class (adds if missing, removes if present)
header.classList.toggle('hidden'); // Useful for show/hide functionality
```

## Creating and Removing Elements
Create, append, or remove elements dynamically.


``` js
// Create a new <div> element
const newDiv = document.createElement('div');

// Add some text to the <div>
newDiv.textContent = 'This is a new div!';

// Add a CSS class to the <div>
newDiv.classList.add('box');

// Append the new <div> to the body of the document
document.body.appendChild(newDiv);

// Remove the <div> from the DOM
newDiv.remove(); // No longer available on the page

// Replace the <h1> element with a new <p> element
const newParagraph = document.createElement('p'); // Create a <p> element
newParagraph.textContent = 'This is a replacement paragraph!';
header.replaceWith(newParagraph); // Replaces the <h1> element

```

## Event Handling
Attach event listeners to elements.

``` js
// Select the button element with the class "btn"
const button = document.querySelector('.btn');

// Add a click event listener to the button
button.addEventListener('click', () => {
  alert('Button clicked!'); // This code runs when the button is clicked
});

// Use event delegation for a parent element
document.querySelector('#parent').addEventListener('click', (event) => {
  // Check if the clicked element has the class "child"
  if (event.target.matches('.child')) {
    alert('Child clicked!'); // Only runs if a child element is clicked
  }
});
```

## Putting It All Together

HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Manipulation Example</title>
  <link rel="stylesheet" href="styles.css"> <!-- Link to external CSS -->
</head>
<body>
  <h1 id="main-header">DOM Manipulation Demo</h1>
  <button class="btn">Change Header</button>

  <div id="parent" style="margin-top: 20px;">
    <p>Click a child element:</p>
    <div class="child">Child 1</div>
    <div class="child">Child 2</div>
    <div class="child">Child 3</div>
  </div>

  <script src="script.js"></script> <!-- Link to external JS -->
</body>
</html>
```
JavaScript

```js
// Select the header and button
const header = document.querySelector('#main-header');
const button = document.querySelector('.btn');

// Change header text and style on button click
button.addEventListener('click', () => {
  header.textContent = 'Header Updated!';
  header.classList.toggle('highlight'); // Toggle the "highlight" class
});

// Event delegation example for parent element
const parent = document.querySelector('#parent');
parent.addEventListener('click', (event) => {
  if (event.target.matches('.child')) {
    alert(`${event.target.textContent} clicked!`);
  }
});

// Create a dynamic list
const list = document.createElement('ul'); // Create <ul>
list.id = 'dynamic-list'; // Add an ID for reference
document.body.appendChild(list); // Append <ul> to body

// Dynamically add <li> elements
for (let i = 1; i <= 3; i++) {
  const listItem = document.createElement('li'); // Create <li>
  listItem.textContent = `Item ${i}`; // Set text content
  listItem.classList.add('list-item'); // Add class for styling
  list.appendChild(listItem); // Append to <ul>
}

// Add event listener to the list for item selection
list.addEventListener('click', (event) => {
  if (event.target.matches('.list-item')) {
    event.target.classList.toggle('selected'); // Toggle "selected" class
    console.log(`${event.target.textContent} clicked`);
  }
});
```
CSS
```css
/* General styles */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

/* Highlighted header */
.highlight {
  color: red;
  font-weight: bold;
}

/* Styles for list items */
.list-item {
  cursor: pointer;
  padding: 5px 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Selected list item */
.list-item.selected {
  background-color: #d1e7dd;
  color: #0f5132;
}
```