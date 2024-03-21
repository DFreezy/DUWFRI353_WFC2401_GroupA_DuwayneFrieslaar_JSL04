const preferedMonster = "Regular"; // Corrected to match the case in the description
const preferedMonster2 = "Sugar-free";

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined

if (userPreference === undefined) {
    userPreference = preferedMonster; // Default to "Regular" if preference is not set
}

// Print whether the user prefers a "Regular" or "Sugar-free" variety
console.log(`User's preferred Monster Energy drink: ${userPreference}`);

let cansLeft = 3; // Any number of cans
if(cansLeft <= 5) {
    console.log('Time to restock!');
}else if(cansLeft >= 6) {
    console.log("We're stocked!")
}


let heartRate = 95; // Current heart rate in bpm
if (heartRate < 100){
    console.log("Boost needed!");
} else {
    console.log("Energy level are high!")
}


let currentTemp = 4; // Current temperature in °C
if(currentTemp <= 5) {
    console.log("Chilled to perfection!");
} else {
    console.log("Needs a cooler!");
}

let currentHour = 1; 
if(currentHour >= 7 && currentHour <= 24) {
    console.log("Unleash the beast!");
} else {
    console.log("Better stick to water.")
}







