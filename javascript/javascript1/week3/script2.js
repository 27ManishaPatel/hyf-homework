//Exe- 4 Step 3: Smart-ease - Back to the basics!
//NOnoN0nOYes (Note taking app)

// Save a note

//Create a variable called notes
let notes = [];
function saveNote(content, id) {
    return notes.push({ content, id });

}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note

function getNote(id) {
    // your code here
    if (typeof id !== "number" || typeof id === null || id > notes.length) {
        alert("It's an error string");
    } else {
        for (let i = 0; i < notes.length; i++) {
            if (id == notes[i].id) {
                return notes[i];
            }
        }
    }
}
let firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Log out notes
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        noteInFormat = console.log("The note with id: " + notes[i].id + " has the following note text: " + notes[i].content);
    }
    return noteInFormat;
}
logOutNotesFormatted(); // The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//Unique feature


//CactusIO-interactive (Smart phone usage app) optional

// Adding an activity

let activities = [];
function addActivity(Date, Activity, Duration) {
    return activities.push({ Date, Activity, Duration });
}

addActivity("23/7-18", "Youtube", 30);
addActivity("25/7-18", "InstaGram", 20);
addActivity("27/7-18", "Facebook", 50);
console.log(activities);
//lets calculate the duration for each activities.
let sum = 0;

for (let i = 0; i < activities.length; i++) {
    sum += activities[i].Duration;
}
console.log(sum);
//Show my status
function showStatus(activities) {

    if (activities.length == 0) {
        return console.log("Add some activities before calling showStatus");
    } else if (sum < 200) {
        return console.log("You have added " + activities.length + " activities They amount to " + sum + " min. of usage");
    } else {
        return console.log("You have reached your limit, no more smartphoning for you!");
    }

}
showStatus(activities);

//Usage limit