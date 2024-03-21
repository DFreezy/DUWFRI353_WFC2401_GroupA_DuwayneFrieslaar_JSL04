const preferedMonster = "Regular"; // Corrected to match the case in the description
const preferedMonster2 = "Sugar-free";

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined
userPreference = userPreference === undefined ? preferedMonster : userPreference;

// Print whether the user prefers a "Regular" or "Sugar-free" variety
console.log(`User's preferred Monster Energy drink: ${userPreference}`);

let cansLeft = 3; // Any number of cans
const stockStatus = cansLeft <= 5 ? 'Time to restock!' : "We're stocked!";
console.log(stockStatus);

let heartRate = 95;
const message = heartRate < 100 ? "Boost needed!" : "Energy levels are high!";
console.log(message);

let currentTemp = 6
const messageTemp = currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cooler!"
console.log(messageTemp);

let currentHour = 1; 
const messageHour = currentHour >= 7 ? "Unleash the beast!" : "Better stick to the water."
console.log(messageHour);






