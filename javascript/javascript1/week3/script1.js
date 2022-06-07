console.log("Hello");
//Exe-1: Item array removal

let names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
console.log(names);
const nameToRemove = "Ahmad";
// Write some code here
//let's find out the index of "ahmed"
let indexOfName = names.indexOf("Ahmad");
console.log(indexOfName); // it shows index of "ahmed" is 1.
// noe splice out that index. with only 1 value.
names.splice(indexOfName, 1);
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//Exe-2 When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
function notThisFunctionName(travelInformation) {
    const time = travelInformation.destinationDistance / travelInformation.speed;
    console.log(time);
    let hours = Math.floor(time);
    console.log(hours);
    let minutes = Math.floor((time - hours) * 60);
    return hours + " Hours " + minutes + " Minutes";

}

const travelTime = notThisFunctionName(travelInformation);

console.log(travelTime); // 8 hours and 38 minutes
