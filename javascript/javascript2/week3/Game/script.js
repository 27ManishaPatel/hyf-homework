const btn = document.getElementById("startBtn");
let inputTime = document.getElementById('inputTime');
const timer = document.getElementById("timer");

const scoreS = document.getElementById("scoreS");
const scoreL = document.getElementById("scoreL");

const divForS = document.getElementById("right");
const divForL = document.getElementById("left");

const wonSkey = document.getElementById("wonSkey");
const wonLkey = document.getElementById("wonLkey");

let startNUmS = 0;
let startNUmL = 0;
let ended = false; // added

btn.addEventListener("click", () => {
    startNUmS = "";
    startNUmL = "";
    let StartingSec = inputTime.value;
    ended = true;
    startGame()
    timer.innerHTML = `${StartingSec} : 00`;
    const countdown = setInterval(() => {
        StartingSec--;
        timer.innerHTML = `${StartingSec} : 00`;
        if (StartingSec <= 0) {
            ended = true;
            clearInterval(countdown);
            endGame();
        }
    }, 1000);
})

function startGame() {
    document.addEventListener("keypress", eventGame)
};
function eventGame(event){
    if (event.code !== "KeyS" && event.code !== "KeyL") {
        alert("Press either L or S")
    } else if (event.code === "KeyS") {
        scoreS.innerHTML = startNUmS++;
        console.log(event);
    } else if (event.code === "KeyL") {
        scoreL.innerHTML = startNUmL++;
    }
}

function endGame() {
    document.removeEventListener("keypress", eventGame);
    if (startNUmS === startNUmL) {
        wonSkey.innerHTML = "It's a DRAW!!";
        wonLkey.innerHTML = "It's a DRAW!!";
    } else if (startNUmS > startNUmL) {
        wonSkey.innerHTML = "WON";
        wonSkey.style.fontSize = "40px";
        wonSkey.style.color = "white";
        divForS.style.backgroundColor = "rgb(59, 179, 0)";

        var confettiSettingsS = { target: "my-canvas-s" };
        confettiSettingsS.width = 300
        var confettiS = new ConfettiGenerator(confettiSettingsS);
        confettiS.render();
    } else {
        wonLkey.innerHTML = "WON";
        wonLkey.style.fontSize = "40px";
        wonLkey.style.color = "white";
        divForL.style.backgroundColor = "rgb(59, 179, 0)";

        var confettiSettingsL = { target: "my-canvas-l" };
        confettiSettingsL.width = 300
        var confettiL = new ConfettiGenerator(confettiSettingsL);
        confettiL.render();
    }
    inputTime.value = "";
    startNUmS = "";
    startNUmL = "";
}