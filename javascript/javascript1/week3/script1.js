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

const totalTimeInMinutes0 = (seriesDurations[0].days * 24 * 60) + (seriesDurations[0].hours * 60) + seriesDurations[0].minutes;
const totalTimeInMinutes1 = (seriesDurations[1].days * 24 * 60) + (seriesDurations[1].hours * 60) + seriesDurations[1].minutes;
const totalTimeInMinutes2 = (seriesDurations[2].days * 24 * 60) + (seriesDurations[2].hours * 60) + seriesDurations[2].minutes;
const totalTimeInMinutes3 = (seriesDurations[3].days * 24 * 60) + (seriesDurations[3].hours * 60) + seriesDurations[3].minutes;
const totalLifeSpanInMinutes = 80 * 365 * 24 * 60;

function logOutSeriesText(title) {
    // write code here
    let totalLifeSpent0 = ((totalTimeInMinutes0 * 100) / totalLifeSpanInMinutes).toFixed(3);
    let totalLifeSpent1 = ((totalTimeInMinutes1 * 100) / totalLifeSpanInMinutes).toFixed(3);
    let totalLifeSpent2 = ((totalTimeInMinutes2 * 100) / totalLifeSpanInMinutes).toFixed(3);
    let totalLifeSpent3 = ((totalTimeInMinutes3 * 100) / totalLifeSpanInMinutes).toFixed(3);

    if (title == seriesDurations[0].title) {
        console.log(seriesDurations[0].title + " took " + totalLifeSpent0 + "% of my life");
    } else if (title == seriesDurations[1].title) {
        console.log(seriesDurations[1].title + " took " + totalLifeSpent1 + "% of my life");
    } else if (title == seriesDurations[2].title) {
        console.log(seriesDurations[2].title + " took " + totalLifeSpent2 + "% of my life");
    } else if (title == seriesDurations[3].title) {
        console.log(seriesDurations[3].title + " took " + totalLifeSpent3 + "% of my life");
    };
    // let totalLifeSpent = parseFloat(totalLifeSpent0) + parseFloat(totalLifeSpent1) + parseFloat(totalLifeSpent2);
}

logOutSeriesText("Sopranos"); // in console "Sopranos took 0.012% of my life" :
logOutSeriesText("Emily in paris"); // In console "Emily in paris took 0.021% of my life":
logOutSeriesText("The Wire"); // In console "The Wire took 0.009% of my life"
logOutSeriesText("Game of thrones"); // In console "Game of thrones took 0.010% of my life";

function toCalcTotalTime() {
    const totalTime = totalTimeInMinutes0 + totalTimeInMinutes1 + totalTimeInMinutes2;
    return ((totalTime * 100) / totalLifeSpanInMinutes).toFixed(3);
}
console.log("In total that is " + toCalcTotalTime() + "% of my life");

