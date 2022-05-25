
// call the function to calculate future age:
function futureAge() {
    let yearOfBirth = document.getElementById("birthyear").value;
    let yearFuture = document.getElementById("futureyear").value;

    const futureAge = yearFuture - yearOfBirth ;

    document.getElementById("calculatedage").value = "I will be " + futureAge + " years old in " + yearFuture;
}

// call the function to calculate Dog's future age:

function dogFutureAge() {
    let dogsYearOfBirth = document.getElementById("dogbirthyear").value;
    let dogsYearFuture = document.getElementById("dogfutureyear").value;

    const dogsFutureAge = dogsYearFuture - dogsYearOfBirth ;

    document.getElementById("dogcalculatedage").value = "My dog will be " + dogsFutureAge + " dog years old in " + dogYearFuture;

    const dogsHumunFutureAge = dogsFutureAge * 7 ;
    document.getElementById("dogcalculatedhumanage").value = "My dog will be " + dogsHumunFutureAge + " humun years old in " + dogYearFuture;
}


 //Ez Namey (Startup name generator) Optional
 function startUpNameGenerator() {
    const firstWords = ['Green', 'Future', 'Sunny','Unique', 'Reliable', 'Simple', 'Speedy', 'Trust', 'vision', 'Sky'];
    const secondWords = ['Apps', , 'Partners','Systems', 'Associates', 'Company', 'Technology', 
   'Consultant', 'Business', 'Digital', 'Corporates'];

   //Generate random name from above list
const randomFirstWords = firstWords[ Math.floor(Math.random() * 10)];
const randomSecondWords = secondWords [Math.floor(Math.random() * 10)];

let startupName = randomFirstWords + ' ' + randomSecondWords;


    document.getElementById("uniquename").value = "The startup: " + startupName + " contains " + startupName.length + " characters";
}

 //Housey pricey (A house price estimator)

//For Peter house

function housePriceEstimator() {
const gardenSizeInM22 = document.getElementById("garden").value;
const phWidth2 = document.getElementById("width").value;
const phHeight2 = document.getElementById("height").value;
const phDepth2 = document.getElementById("depth").value;
//lets calculate volumeInMeters
let phvolumeInMeters2 = phWidth2 * phHeight2 * phDepth2;
//What peter is paying now 
const actualPetersRent2 = document.getElementById("currentrent").value;

housePriceforpeter2 = phvolumeInMeters2 * 2.5 * 1000 + gardenSizeInM22 * 300;

if (housePriceforpeter2 < actualPetersRent2){
    document.getElementById("houseprice").value = "You are paying too much";

} else if (housePriceforpeter2 == actualPetersRent2){
    document.getElementById("houseprice").value = "You are paying expected amount";

} else {
    document.getElementById("houseprice").value = "You are paying less";
};
};