
// call the function to calculate future age:
function futureAge() {
    let yearOfBirth = document.getElementById("birthyear").value;
    let yearFuture = document.getElementById("futureyear").value;

    const futureAge = yearFuture - yearOfBirth ;

    document.getElementById("calculatedage").value = "I will be " + futureAge + " years old in " + yearFuture;
}