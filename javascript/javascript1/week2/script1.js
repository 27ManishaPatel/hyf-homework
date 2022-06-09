
//1st exercise Flight booking fullname function
//Created a function called getFullname that returns a fullname.
//have two parameters.
function getFullname(firstname, surname) {
    return firstname + " " + surname;
}
console.log(getFullname("Benjamin", "Hughes")); // returns "Benjamin Hughes".

//created two variables 
let fullname1 = getFullname("Manisha", "Patel");
let fullname2 = getFullname("Chirag", "Patel");
console.log(fullname1);
console.log(fullname2);

// to include support for formal name, added one more parameter.
let useFormalName = true;
function getFullname1(firstname, surname, useFormalName) {
    if (useFormalName) {
        return "Lord " + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
    }
}
// true value of boolean returns "Lord Benjamin Hughes".
console.log(getFullname1("Benjamin", "Hughes", true));
// false value of boolean returns "Benjamin Hughes".
console.log(getFullname1("Benjamin", "Hughes", false));
//if useFormalName is not given as an argument returns "Benjamin Hughes".
console.log(getFullname1("Benjamin", "Hughes"));
//with an empty string as firstname and lastname returns "".
console.log(getFullname1("", ""));
//with an empty string as firstname and lastname and true value of boolean returns "Lord".
console.log(getFullname1("", "", true));
//with an empty string as firstname and lastname and false value of boolean returns "".
console.log(getFullname1("", "", false));


// if the person is a woman 

let useWomanName = true;
function getFullname2(firstname, surname, useFormalName, useWomanName) {
    if (useWomanName) {
        useFormalName = false;
        return "Lady " + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
    }
}
console.log(getFullname2("Manisha", "Patel", true, true)); //returns "Lady Manisha Patel".
console.log(getFullname2("Manisha", "Patel", false, false)); //returns "Manisha Patel".


//2nd exercise Event application

const weekDays = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getEventWeekday(eventdayFromToday) {
    const d = new Date();
    let today = d.getDay();
    let event = [(today + eventdayFromToday) % 7];
    // also works without remainder "let event = eventdayFromToday - today;""
    return weekDays[event];
}
console.log(getEventWeekday(7));


//3rd exercise Weather wear
function youCreateThisFunctionName(t) {
    if (t < 0) {
        return "fur; feather and technical fabrics are good";
    } else if (t <= 10) {
        return "fur and duvet will always be fine, but also cashmere will keep you warm.";
    } else if (t <= 15) {
        return "wool or a light duvet is just fine.";
    } else if (t <= 20) {
        return "cotton, jersey, denim. In short, light or mixed fabrics for a variable time.";
    } else if (t <= 30) {
        return "cotton and other light fabrics, with short sleeves. It\'s hot even with the bad weather!.";
    } else {
        return "light fabrics and baggy volumes to stay fresh. The heat has really arrived!";
    }
};
const clothesToWear = youCreateThisFunctionName(18);
console.log(clothesToWear); // Logs out: "cotton, jersey, denim. In short, light or mixed fabrics for a variable time."

//4th exercise Student manager


const class07Students = [];
function addStudentToClass(studentName) {
    if (!studentName) {
        console.log("Enter student\'s name Please!")
    } else if (class07Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class");
    } else if (studentName === "Queen" || class07Students.length < 6) {
        class07Students.push(studentName);
    } else if (class07Students.length >= 6) {
        console.log("Cannot add more students to class 07");
    } else {
        class07Students.push(studentName);
    }
};
addStudentToClass("");//return
addStudentToClass("Manisha");//return
addStudentToClass("Julia");//return
addStudentToClass("Manisha");//return "Student Manisha is already in the class"
addStudentToClass("Renu");//return
addStudentToClass("Egle");//return
addStudentToClass("Seona");//return
addStudentToClass("Mahtab");//return 
addStudentToClass("Vi"); //return "Cannot add more students to class 07"
addStudentToClass("Queen");


console.log(class07Students);


function getNumberOfStudents() {
    console.log("The no of students in the class are " + class07Students.length);
}
getNumberOfStudents();

//5th exercise Candy helper optional


function addCandy(candyType, weight) {
    return candyType + " " + weight;
}
const candyType = ["Sweet", "Chocolate", "Toffee", "Chewing-gum"];
const weight = [20, 30, 20, 20];
const price = [0.5, 0.7, 1.1, 0.03];
for (let i = 0; i < candyType.length; i++)

    console.log(addCandy(candyType[i], weight[i]));

let candyPrice = [
    (weight[0] * price[0]),
    (weight[1] * price[1]),
    (weight[2] * price[2]),
    (weight[3] * price[3])
];

console.log(candyPrice);

let boughtCandy0 = [candyType[0], weight[0]];
boughtCandy0.push(candyPrice[0]);
let boughtCandy1 = [candyType[1], weight[1]];
boughtCandy1.push(candyPrice[1]);
let boughtCandy2 = [candyType[2], weight[2]];
boughtCandy2.push(candyPrice[2]);
let boughtCandy3 = [candyType[3], weight[3]];
boughtCandy3.push(candyPrice[3]);

console.log(boughtCandy0);
console.log(boughtCandy1);
console.log(boughtCandy2);
console.log(boughtCandy3);

const amountToSpend = Math.random() * 100;
let total = 60;
function canBuyMoreCandy(total) {
    for (let i = 0; i < candyPrice.length; i++) {
        total += candyPrice[i];

    }
    if (total < amountToSpend) {
        console.log("You can buy more, so please do!");
    } else {
        console.log("Enough candy for you!");
    }
}
canBuyMoreCandy(4);
