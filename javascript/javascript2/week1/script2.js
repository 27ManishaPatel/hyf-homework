//Spirit animal name generator

const hoverBtn = document.getElementById("hoverInput");
const typingBtn = document.getElementById("whenTyping");
const clickBtn = document.getElementById("btnclick");

hoverBtn.addEventListener("change", function () {
    if (hoverBtn.checked) {
        const hoverOver = document.getElementById("inputName");
        hoverOver.addEventListener("mouseover", generateNameAnimal);
    }
});


hoverBtn.addEventListener("change", function () {
    const hoverOver = document.getElementById("inputName");
    hoverOver.addEventListener("keypress", generateNameAnimal);
});


clickBtn.addEventListener("change", function () {
    const generateBtn = document.getElementById("generateNameBtn");
    generateBtn.addEventListener("click", generateNameAnimal);
});


function generateNameAnimal() {
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
    const spiritAnimalNamme = document.getElementById("animalNamePara");
    let displayAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    if (!personName) {
        spiritAnimalNamme.innerText = "Please enter your Name";
    } else {
        return spiritAnimalNamme.innerText = `${personName}: ${displayAnimal}`
    }
}





