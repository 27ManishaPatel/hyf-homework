const logOuttext = document.getElementById("logOutText");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
let btnForLocation = document.getElementById("Location");
var displayLocation = document.getElementById("displayLocation");

//exe-1 Log out the text 2.5 seconds after the script is loaded.
const delayText = function() {
    logOuttext.innerHTML = "Called after 2.5 seconds";
}
setTimeout(delayText, 2500);

//exe-2 Created a function that takes 2 parameters: delay and stringToLog. 

const delayStringToLog = function(delay, stringToLog) {
    if (typeof delay !== "number") {
        alert("seconds must be a number")
    } else if (typeof stringToLog !== "string") {
        alert("message must be a string")
    }
    setTimeout(function() {
        text.innerHTML = stringToLog
    }, delay * 1000)
};
delayStringToLog(10, "This string logged after 10 seconds");
delayStringToLog(3, "This string logged after 3 seconds");

//exe-3 Created a button and called exe-2 function

const btnText = document.getElementById("btnText");
btn.addEventListener("click", function() {
    delayStringToLog(5, "This string logged after 5 seconds");
});

//exe-4 "earth" and "saturn" log out
const earthLogger = () => document.getElementById("earth").innerHTML = "Earth";
const saturnLogger = () => document.getElementById("saturn").innerHTML = "Saturn";

function planetLogFunction(fun) {
    typeof fun === 'function' ? fun() : alert('This is not a function');
};
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//exe-5 button called "log location"
btnForLocation.addEventListener("click", getLocation)

function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        displayLocation.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    });
}
//exe-6 Optional Now show that location on a map
function initMap() {
    function getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            var dumbo = { lat: position.coords.latitude, lng: position.coords.longitude };
            var mapOptions = {
                center: dumbo,
                zoom: 10
            };
            var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
        });
    }
    getLocation()
}
initMap()
    //exe-7 
function runAfterDelay(delay, callback) {
    setTimeout(() => {
        callback();
    }, delay * 1000);
};
runAfterDelay(4, function() {
    console.log("should be logged after 4 seconds")
});
//exe-8 double click
document.addEventListener("click", dblClickCheck);
const dblClickDiv = document.getElementById("dblclick-div");
const dblClickText = document.getElementById("dblclick-text");
let click;

function dblClickCheck() {
    time = new Date().getTime();
    if (time < click + 500) {
        dblClickText.innerHTML = "double click!";
        dblClickDiv.style.backgroundColor = "red";
        dblClickDiv.style.color = "white";
    } else {
        dblClickText.innerHTML = "not double click!";
        dblClickDiv.style.backgroundColor = "rgb(180, 244, 244)";
        dblClickDiv.style.color = "Black";
    }
    click = time;
};

//exe-9 jokeCreator
const joke = document.getElementById("joke");
const logFunnyJoke = () => joke.innerHTML = " It's a funny joke";
const logBadJoke = () => joke.innerHTML = " It's a bad joke";
const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
    if (shouldTellFunnyJoke === true) {
        logFunnyJoke()
    } else {
        logBadJoke()
    }
};
jokeCreator(false, logFunnyJoke, logBadJoke);