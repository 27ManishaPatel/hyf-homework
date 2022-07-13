const searchGify = document.getElementById("search-gifs");
const gifyBtn = document.getElementById("search-btn");
const numOfGify = document.getElementById("number-of-gifs");
const gifyContainer = document.getElementById("container");

const apiKey = "V8V02wFyIrDZPBpfeY18HaDyPAKXikHL";
//add event 
gifyBtn.addEventListener("click", function() {
    const gifySearch = searchGify.value;
    const gifyTotal = numOfGify.value;
    if (!gifySearch) {
        alert("Write something for GIF")
    } else if (!gifyTotal) {
        alert("How many GIF you want?")
    } else {
        gifyContainer.innerHTML = ""
        fetch(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${apiKey}&limit=${gifyTotal}&q=${gifySearch}`)
            .then(response => response.json())
            .then(data => {
                displayGif(data);
            });
    }
})

// default gif 
gifySearch = "find here";
gifyTotal = 4;
fetch(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${apiKey}&limit=${gifyTotal}&q=${gifySearch}`)
    .then(response => response.json())
    .then(data => {
        displayGif(data);
    });
//function to display 
function displayGif(data) {
    data.data.forEach(dat => {
        const gifyUrl = dat.images.original.url;
        let newImage = document.createElement("img");
        newImage.setAttribute("class", "my-gify-style")
        newImage.setAttribute("src", gifyUrl)
        gifyContainer.appendChild(newImage);
        console.log(gifyUrl)
    })
}