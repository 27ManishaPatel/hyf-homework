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

const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

// current date with toLocaleDateString method
let options = {
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
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searcheName}&units=metric&appid=66fa0f600aeb3e00b5df455da61d2af3`)
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
    icon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    description.innerHTML = data.weather[0].description;
    wind.innerHTML = data.wind.speed;
    sunrise.innerHTML = `Sunrise at ${new Date(data.sys.sunrise*1000).getHours()} : ${new Date(data.sys.sunrise*1000).getMinutes()}`
    sunset.innerHTML = `Sunset at ${new Date(data.sys.sunset*1000).getHours()} : ${new Date(data.sys.sunset*1000).getMinutes()}`
}

function initMap() {
    function getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            googlemap = new google.maps.Map(document.getElementById("map"), {
                center: { lat: latitude, lng: longitude },
                zoom: 8,
            });
            let marker = new google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: map,
            });
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=0f8c88146a435b8db9d6af1cacbbc02a`)
                .then(response => response.json())
                .then(data => {
                    searchPlace.innerHTML = `Weather in ${data.name}`
                    temperature.innerHTML = `${data.main.temp} ° C`;
                    humadity.innerHTML = `${data.main.humidity}`;
                    feels.innerHTML = `Feels like: ${data.main.feels_like}`;
                    icon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
                    description.innerHTML = data.weather[0].description;
                    wind.innerHTML = data.wind.speed;
                    sunrise.innerHTML = `Sunrise at ${new Date(data.sys.sunrise*1000).getHours()} : ${new Date(data.sys.sunrise*1000).getMinutes()}`
                    sunset.innerHTML = `Sunset at ${new Date(data.sys.sunset*1000).getHours()} : ${new Date(data.sys.sunset*1000).getMinutes()}`
                    console.log(data)
                });
        })
    };
    getLocation()
}
window.initMap = initMap;

console.log(screen.width);