console.log("Hello");
//Exe-1: Item array removal:

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

//Exe-2 When will we be there??:

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


//Exe-3 Series duration of my life:
const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
];
// Adding one more favorite TV show to the array.
let myShow = {
    title: "Emily in paris",
    days: 6,
    hours: 5,
    minutes: 0,
};
seriesDurations.push(myShow);
console.log(seriesDurations);
// write function to calculate how much time you spent

function logOutSeriesText() {
    let totalTime = 0;
    const totalLifeSpanInMinutes = 80 * 365 * 24 * 60;
    for (i = 0; i < seriesDurations.length; i++) {
        let totalLifeSpentInMinute =
            (seriesDurations[i].days * 24 * 60 + seriesDurations[i].hours * 60 + seriesDurations[i].minutes);
        let totalLifeSpent = totalLifeSpentInMinute * 100 / totalLifeSpanInMinutes;
        console.log(
            `${seriesDurations[i].title} took ${totalLifeSpent.toFixed(3)}% of my life`
        );
        totalTime += totalLifeSpent;
    }
    console.log(`In total that is ${totalTime.toFixed(3)}% of my life`);
}
logOutSeriesText();
