console.log("hello");

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


