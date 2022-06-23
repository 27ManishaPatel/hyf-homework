//Spirit animal name generator


const generateBtn = document.getElementById("generateNameBtn");
const spiritAnimalNamme = document.getElementById("animalNamePara");

generateBtn.addEventListener("click", function () {
    const personName = document.getElementById("inputName").value;
    const spiritAnimals = [
        "Eagle - Freedom and Courage",
        "Swan - The symbol of total grace, serenity, and innocence",
        "Sparrow - Desire and fertility",
        "Seahorse - Confidence and grace",
        "Fox - Cunning, intelligent and providing animal",
        "Frog - Renewal, fertility and springtime",
        "Horse - Journey",
        "Lizard - Dreaming, agility and conversation",
        "Duck - Sees clearly through emotions; graceful on the water",
        "Rabbit - Fear and overcoming limiting beliefs"
    ];
    let displayAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    if (!personName) {
        spiritAnimalNamme.innerText = "Please enter your Name";
    } else {
        return spiritAnimalNamme.innerText = `${personName}: ${displayAnimal}`
    }
})


