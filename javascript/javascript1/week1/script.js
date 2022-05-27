console.log("Hello"); //Initial code

//Age-ify (A future age calculator)
const yearOfBirth = 1989;
const yearFuture = 2050;

//with using - arithmatic operator we can calculate the age.
let myAge = yearFuture - yearOfBirth;

console.log("I will be " + myAge + " years old in " + yearFuture);


//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const dogHumunsYear = dogYear / 7;
const shouldShowResultInDogYears = "true";


if (shouldShowResultInDogYears) {
    console.log("My dog will be " + dogYear + " dog years old in " + dogYearFuture)
} else {
    console.log("My dog will be " + dogHumunsYear + " humuns years old in " + dogYearFuture)
};

//Housey pricey (A house price estimator)

const gardenSizeInM2 = [100, 70];
const phWidth = [8, 5];
const phHeight = [10, 8];
const phDepth = [10, 11];
//lets calculate volumeInMeters
const volumeInMeters = [8 * 10 * 10, 5 * 11 * 8];

//What peter and Julia are paying now 
const actualRent = [2500000, 1000000];

housePriceforpeter = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
console.log(housePriceforpeter);
housePriceforJulia = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;
console.log(housePriceforJulia);

if (housePriceforpeter < actualRent[0]) {
    console.log("Peter is paying too much")
} else if (housePriceforpeter === actualRent[0]) {
    console.log("Peter is paying expected amount")
} else {
    console.log("Peter is paying less")
};

if (housePriceforJulia < actualRent[1]) {
    console.log("Julia is paying too much")
} else if (housePriceforJulia === actualRent[1]) {
    console.log("Julia is paying expected amount")
} else {
    console.log("Julia is paying less")
};

//Ez Namey (Startup name generator) Optional

const firstWords = ['Green', 'Future', 'Sunny', 'Unique', 'Reliable', 'Simple', 'Speedy', 'Trust', 'vision', 'Sky']
const secondWords = ['Apps', , 'Partners', 'Systems', 'Associates', 'Company', 'Technology',
    'Consultant', 'Business', 'Digital', 'Corporates']

//Generate random name from above list
const randomFirstWords = firstWords[Math.floor(Math.random() * 10)];
const randomSecondWords = secondWords[Math.floor(Math.random() * 10)];

let startupName = randomFirstWords + ' ' + randomSecondWords;

console.log("The startup: " + startupName + " contains " + startupName.length + " characters");
