console.log("Hello"); //Initial code

//Age-ify (A future age calculator)
const yearOfBirth = 1989;
const yearFuture = 2050;

//with using - arithmatic operator we can calculate the age.
let myAge  = yearFuture  - yearOfBirth;

console.log("I will be " + myAge + " years old in " + yearFuture);


//Goodboy-Oldboy (A dog age calculator)
 const dogYearOfBirth = 2017;
 const dogYearFuture = 2027;
 const dogYear = dogYearFuture - dogYearOfBirth;
 const dogHumunsYear = 7 * dogYear ;
 let shouldShowResultInDogYears = "true";


 if (shouldShowResultInDogYears == "true") {
     console.log("My dog will be " + dogYear+ " dog years old in " + dogYearFuture )
 } else {
     console.log("My dog will be " + dogHumunsYear+ " humuns years old in " + dogYearFuture )
 };


