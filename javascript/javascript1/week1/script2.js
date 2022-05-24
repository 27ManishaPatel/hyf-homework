
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
    document.getElementById("dogcalculatedhumanage").value = "My dog will be " + dogsHumunFutureAge + " dog years old in " + dogYearFuture;

}