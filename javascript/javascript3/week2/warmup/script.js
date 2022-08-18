//Movies exercise
//Create an array of bad movies
const moviesUrl = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
const myOl = document.createElement("ol");
myOl.innerHTML = "Bad Movies";
document.body.appendChild(myOl);

const latestBadMv = document.createElement("ol");
latestBadMv.innerHTML = "Bad Movies since 2000";
document.body.appendChild(latestBadMv);
fetch(moviesUrl)
    .then(Response => Response.json())
    .then(movies => {
        const badMovies = movies.filter(movie => movie.rating < 4);
        badMovies.forEach(mv => {
            const myLi = document.createElement("li");
            myLi.style.fontSize = "10px";
            myLi.innerHTML = `${mv.title} with ${mv.rating} rating`;
            myOl.appendChild(myLi);
        });
        //Creat an array of bad movies since year 2000
        const latestBadMovied = badMovies.filter(movie => movie.year >= 2000);
        latestBadMovied.forEach(mv => {
            const latestBadMvLi = document.createElement("li");
            latestBadMvLi.style.fontSize = "10px";
            latestBadMvLi.innerHTML = `${mv.title} in year ${mv.year}`;
            latestBadMv.appendChild(latestBadMvLi);
        });
    })

//Promise that resolves after set time & use it with async/await
async function myDelayMessage(resolveAfter) {
    await new Promise((resolve, reject) => {
        if (typeof resolveAfter !== "number") {
            reject()
        }
        setTimeout(function() {
            resolve()
        }, resolveAfter * 1000)
    })
}
myDelayMessage(8)
    .then(() => {
        console.log("I am called asynchronously"); // logged out after 8 seconds
    })
    .catch(() => {
        console.log("Second must be a number!")
    });

//Rewrite time
//Rewrite setTimeout
function setTimeoutPromise(time) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve();
        }, time)
    })
}
setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds ")
})

//Rewrite navigator.geolocation.getCurrentPosition

let currentLocation = document.createElement("p")
document.body.appendChild(currentLocation);

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(position.coords);
            })
        } else {
            reject();
        }
    })
}
getCurrentPosition()
    .then((data) => {
            currentLocation.innerHTML = `Latitude; ${data.latitude} 
           <br>
           Longitude; ${data.longitude}`
        })
    .catch(() => {
        currentLocation.innerHTML = "Geolocation is not supported by this browser."
    })

//Fetching and waiting with Promise
function setTimeoutPromise(time){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
};

function getDogsNames() {
    return fetch("https://dog.ceo/api/breeds/list/all")
};

setTimeoutPromise(3000)
.then(getDogsNames)
.then(Response => Response.json())
.then(data => {
    console.log(Object.keys(data.message))
})

//Fetching and waiting with acync and await 
let image = document.createElement("img");
image.style.width = "500 px";
document.body.appendChild(image)
async function getDogsPics() {
    const dogName = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogNameJson = await dogName.json()
    image.src = await dogNameJson.message
}
getDogsPics() // as async and await is better and easier to write..