
//1st Exe: Find the shortest word
let myDiv = document.getElementById("findShortWord");
myDiv.style.border = "2px solid black";
myDiv.style.padding = "20px";
myDiv.style.width = "50%";
myDiv.style.textAlign = "center";
myDiv.backgroundColor = "bisque";

let heading = document.createElement("h1");
heading.style.fontSize = "24px"
heading.innerText = "Find the shortest word";
myDiv.appendChild(heading);

let words = document.createElement("h3");
words.innerText = "Words";
myDiv.appendChild(words);

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
for (let i = 0; i < danishWords.length; i++) {
    let wordsList = document.createElement("p");
    wordsList.innerText = danishWords[i];
    myDiv.appendChild(wordsList);
}
const myButton = document.createElement('button');
myButton.style.height = "40px";
myButton.style.backgroundColor = "rgb(244, 178, 97";
myButton.style.fontSize = "20px";
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
const myDivExe2 = document.getElementById("findDanLetter");
myDivExe2.style.border = "2px solid black";
myDivExe2.style.padding = "20px";
myDivExe2.style.textAlign = "lrft";
myDivExe2.style.width = "50%";


const danishString1 = "Jeg har en blå bil";

const danishString2 = "Blå grød med røde bær"

function findDanLetter(x) {
    const para = document.createElement("p");
    para.innerText = x
    myDivExe2.appendChild(para);

    const letterÅ = /å/i;
    const letterÆ = /æ/i;
    const letterØ = /ø/i;
    const foundÅ = (x.match(letterÅ) || []).length;
    const foundÆ = (x.match(letterÆ) || []).length;
    const foundØ = (x.match(letterØ) || []).length;
    let total = foundÅ + foundÆ + foundØ;
    let result = {
        Total: total,
        Å: foundÅ,
        Æ: foundÆ,
        Ø: foundØ,
    }
    let result1 = JSON.stringify(result);
    const displayOutput = document.createElement('p')
    displayOutput.innerHTML = `Danish Letters : ${result1}`
    para.appendChild(displayOutput);
    return result
}

console.log(findDanLetter(danishString1));// returns {total: 1, å: 1}
console.log(findDanLetter(danishString2));  // returns {total: 4, æ: 1, ø: 2, å: 1}




