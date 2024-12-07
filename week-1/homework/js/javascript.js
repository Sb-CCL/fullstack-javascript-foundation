// "use strict" helps catch undeclared variables and other mistakes
"use strict";

// User logged in status is left empty
let loggedIn; // Boolean

// Login Prompt
const userConfirmation = confirm("Are you ready to login?");
if (userConfirmation) {
  const userName = prompt("What is your name?");
  alert(`Welcome, ${userName}!`);
  loggedIn = true;
} else {
  alert(`Maybe later!`);
  loggedIn = false;
}

if (loggedIn == true && userConfirmation) {
  alert(`loggedIn Status: ${userConfirmation} (User is logged in)`);
} else {
  alert(`loggedIn Status: ${userConfirmation} (User is not logged in)`);
}

// Flight
let flightComplete; // null

// Updated the null value
flightComplete = true;
if (loggedIn == true && userConfirmation && flightComplete) {
  alert(`Flight completion status is complete`);
} else {
  alert(`Please login to confirm your flight status`);
}

// Flight Details
const airlineName = "Conair"; // String
const flightCost = 320.04; // Float
const departureAirport = "LHR"; // String
const arrivalAirport = "JFK"; // String
const departureLocation = "London"; // String
const arrivalLocation = "New York"; // String
const departureDate = "June 8"; // String
const departureTime = "10:24"; // String
const arrivalDate = "June 9"; // String
const arrivalTime = "6:47"; // String
const departure = `${departureDate} ∙ ${departureTime} PM`; //  String Literal (June 8 ∙ 10:24 PM)
const arrival = `${arrivalDate} ∙ ${arrivalTime} AM`; // String Literal (June 9 ∙ 6:47 AM)

// Rental Vehical
const rentalCompany = "RentalCars";
const rentalVehicalMake = "Merceds-Benz";
const rentalVehicalModel = "CL63 AMG";
const rentalVehicalType = "Long coupe";
const pickupLocation = `Pickup ${arrivalAirport}`; // String Literal (Pickup JFK)
const rentalVehicalCost = 800; // Number
const rentalVehicalDropArea = "Free"; // String

// Rental Housing
const rentalHousingName = "Voya Village - Chelsea Townhouser"; // String
const rentalHousingCity = "Manhattan"; // String
const rentalHousingState = "New York"; // String
const rentalHousingZip = "177503"; // String
const rentalLocation = `${rentalHousingCity}, ${rentalHousingState} ${rentalHousingZip}`; // String Literal (Manhattan, New York 177503)
const rentalHousingRating = 4.73; // Float
const rentalHousingReviews = 57; // Number
