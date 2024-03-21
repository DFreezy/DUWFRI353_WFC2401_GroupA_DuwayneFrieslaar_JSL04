//In this code I breakdown a simple way to write conditionals.
// Here I declare the variables of the following flavors of energy drinks
const preferedMonster = "Regular";
const preferedMonster2 = "Sugar-free";

//Here I used the tenary logic instead of using the if statement to determine the user's preference.
let userPreference = undefined; 
userPreference = userPreference === undefined ? preferedMonster : userPreference;

// Print whether the user prefers a "Regular" or "Sugar-free" variety
console.log(`User's preferred Monster Energy drink: ${userPreference}`);

//Here I check how many cans are availlable, and used ternary logic to let me know wether or not I should restock
let cansLeft = 3; // Any number of cans
const stockStatus = cansLeft <= 5 ? 'Time to restock!' : "We're stocked!";
console.log(stockStatus);

//Here I check the heart rate of the user to determine wether or not a boost is neccesary
let heartRate = 95;
const message = heartRate < 100 ? "Boost needed!" : "Energy levels are high!";
console.log(message);

//Here I check the temperature of the can of monster to determine the ideal drinking temperature
let currentTemp = 6
const messageTemp = currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cooler!"
console.log(messageTemp);

//Here I use the ternary logic to see if it's the right window of time to consume a can of monster
let currentHour = 1; 
const messageHour = currentHour >= 7 ? "Unleash the beast!" : "Better stick to the water."
console.log(messageHour);






