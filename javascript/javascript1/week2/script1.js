
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
    if (class07Students.length >= 6) {
        console.log("Cannot add more students to class 07");
    } else if (class07Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class");
    } else if (!studentName) {
        console.log("Enter student\'s name Please!")
    } else {
        return class07Students.push(studentName);
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
addStudentToClass("Queen"); // not working 

console.log(class07Students);


function getNumberOfStudents() {
    console.log("The no of students in the class are " + class07Students.length);
}
getNumberOfStudents();
