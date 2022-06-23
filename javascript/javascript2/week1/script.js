
//1st Exe: Find the shortest word
let myDiv = document.getElementById("findShortWord");
let heading = document.createElement("h1");
heading.innerText = "Find the shortest word";
myDiv.appendChild(heading);

let words = document.createElement("ul");
words.innerText = "Words";
myDiv.appendChild(words);

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
for (let i = 0; i < danishWords.length; i++) {
    let wordsList = document.createElement("li");
    wordsList.innerText = danishWords[i];
    words.appendChild(wordsList);
}
const myButton = document.createElement('button');
myButton.innerText = 'Shortest Word';
myDiv.appendChild(myButton);

myButton.addEventListener("click", findShortWord);

function findShortWord() {
    let display = document.createElement("p");
    myDiv.appendChild(display);
    let shortest = danishWords.reduce((current, previous) => {
        return current.length < previous.length ? current : previous;
    });
    display.innerText = shortest;
};

//Find and count the Danish letters
let myDiv2 = document.getElementById("findDanLetter");
let input = document.createElement("p");
myDiv2.appendChild(input);
input.innerText = "Jeg har en blå bil å æ";

let danishString = input.innerText;
let danishStringInArray = danishString.split("");
console.log(danishStringInArray);

const myButton2 = document.createElement('button');
myButton2.innerText = 'Danish Word';
myDiv2.appendChild(myButton2);

myButton2.addEventListener("click", findDanLetetr);

function findDanLetetr() {
    let danishStringInArray = danishString.split("");
    let display2 = document.createElement("p");
    myDiv2.appendChild(display2);

    const danishLetterÅ = /å/i;
    const danishLetterÆ = /æ/i;
    const danishLetterØ = /ø/i;

    const foundÅ = (danishStringInArray.match(danishLetterÅ) || []).length;
    const foundÆ = (danishStringInArray.match(danishLetterÆ) || []).length;
    const foundØ = (danishStringInArray.match(danishLetterØ) || []).length;
    let Total = foundÅ + foundÆ + foundØ

    let result = {
        total: Total,
        æ: foundÅ,
        ø: foundÆ,
        å: foundØ
    }
    return display2.innerText = result;

    // return display2.innerText = displyChar;
}
    // let danStrinInArray = danishString.split("");
    // let pattern = /(å|æ)/g;
    // let result = danStrinInArray.match(pattern);
    // display2.innerText = result;

    // for (let i = 0; i < danStrinInArray.length; i++) {
    //     if (danStrinInArray == "å"){
    //         display2.innerText = `Total: ${danLetterInInput} , å: ${danLetterInInput}`
    //     }

    // let danLetterInInput = danishString.match(danLetter[i]);
    // display2.innerText = `Total: ${danLetterInInput} , å: ${danLetterInInput}`;


