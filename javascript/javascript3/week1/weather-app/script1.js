const searchPlace = document.getElementById("search-city"); //weather in particular city
const search = document.getElementById("search-location"); //search input
const btn = document.getElementById("btn"); //search button
const temperature = document.getElementById("temperature"); // shows temeperature
const humadity = document.getElementById("humadity"); //shows humadity
const wind = document.getElementById("wind"); // wind speed
const feels = document.getElementById("feels"); // feels like temeperature
let todayDate = document.getElementById("current-date"); // current date
const icon = document.getElementById("icon"); // icon
const description = document.getElementById("description"); // description of weather

// current date with toLocaleDateString method
var options = {
    weekday: 'long',
    year: "numeric",
    month: "numeric"
}
todayDate.innerHTML = new Date().toLocaleDateString("en-US", options);
let d = new Date();
document.getElementById("time").innerHTML = new Date().getHours() + ":" + new Date().getMinutes(); // current time

// event listener
btn.addEventListener("click", function() {
        let searcheName = search.value;
        if (!searcheName) {
            alert("Write name of city")
        } else {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${searcheName} &units=metric&appid=66fa0f600aeb3e00b5df455da61d2af3`)
                .then(response => response.json())
                .then(data => {
                    display(searcheName, data)
                });
        }
    })
    //display function 
const display = (searcheName, data) => {
        searchPlace.innerHTML = `Weather in ${searcheName}`
        temperature.innerHTML = `${data.main.temp} ° C`;
        humadity.innerHTML = `${data.main.humidity}`;
        feels.innerHTML = `Feels like: ${data.main.feels_like}`;
        icon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
        description.innerHTML = data.weather[0].description;
        wind.innerHTML = data.wind.speed
        console.log(data);
    }
    //its shows copenhagen city as an default and I will update this with current place later(thats an idea)
searcheName = "copenhagen"
fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${searcheName} &units=metric&appid=66fa0f600aeb3e00b5df455da61d2af3`)
    .then(response => response.json())
    .then(data => {
        display(searcheName, data)
    });
display(copenhagen, data);