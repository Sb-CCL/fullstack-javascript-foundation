document.addEventListener('DOMContentLoaded', () => {
    // Grabs all the necessary elements
    const listElement = document.getElementById('list');
    const inputField = document.getElementById('input');
    const submitButton = document.getElementById('submit'); 

    // New function to add items to the list
    const addFood = () => {

        // Grabs the text the user types into the input field
        const inputValue = inputField.value;

        // Checks if the user typed anything
        if (inputValue) {
            
            // Creates a new list item
            listItem = document.createElement('li');
            
            // Set the text of the list item to the content of the input field
            listItem.textContent = inputValue;
            
            // Adds the new list item to the end of the list
            listElement.appendChild(listItem);
            
            // Clears the input field
            inputField.value = ''; 
        }
    };

    // Event listeners for clicking of the submit button
    submitButton.addEventListener('click', event => {
        // Prevents form submission
        event.preventDefault(); 

        // Runs the addFood() function
        addFood();
    });

    // Event listeners for pressing of the enter button
    inputField.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            // Prevents form submission
            event.preventDefault(); 
            
            // Runs the addFood() function
            addFood();
        }
    });
});
