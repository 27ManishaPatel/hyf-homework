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

 //Housey pricey (A house price estimator)

//For Peter house
const gardenSizeInM2 = 100 ;
const phWidth = 8;
const phHeight = 10;
const phDepth = 10;
//lets calculate volumeInMeters
let phvolumeInMeters = phWidth * phHeight * phDepth;
//What peter is paying now 
const actualPetersRent = 2500000;

housePriceforpeter = phvolumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePriceforpeter < actualPetersRent){
    console.log("Peter is paying too much")
} else if (housePriceforpeter == actualPetersRent){
   console.log("Peter is paying expected amount")
} else {
   console.log("Peter is paying less")
};

//For Julia house
const jhgardenSizeInM2 = 70 ;
const jhWidth = 5;
const jhHeight = 8;
const jhDepth = 11;
//lets calculate volumeInMeters
let jhvolumeInMeters = jhWidth * jhHeight * jhDepth;
//What peter is paying now 
const actualJuliasRent = 1000000;

housePriceforJulia = jhvolumeInMeters  * 2.5 * 1000 + jhgardenSizeInM2 * 300;

if (housePriceforJulia < actualJuliasRent){
    console.log("Julia is paying too much")
} else if (housePriceforJulia == actualJuliasRent){
   console.log("Julia is paying expected amount")
} else {
   console.log("Julia is paying less")
};


 //Ez Namey (Startup name generator) Optional

 const firstWords = ['Green', 'Future', 'Sunny','Unique', 'Reliable', 'Simple', 'Speedy', 'Trust', 'vision', 'Sky']
 const secondWords = ['Apps', , 'Partners','Systems', 'Associates', 'Company', 'Technology', 
'Consultant', 'Business', 'Digital', 'Corporates']

//Generate random name from above list
const randomFirstWords = firstWords[ Math.floor(Math.random() * 10)];
const randomSecondWords = secondWords [Math.floor(Math.random() * 10)];

let startupName = randomFirstWords + ' ' + randomSecondWords;

console.log("The startup: " + startupName + " contains " + startupName.length + " characters");
