//Ex-1 Doubling of number
//doubles the odd numbers in an array and throws away the even number.

let numbers = [1, 2, 3, 4];
let newNumbers = numbers
    .filter(num => num % 2 !== 0)
    .map(num => num * 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]

//Ex-2 Working with movies
//1. Create an array of movies containing the movies with a short title (you define what short means)
const shortTitleMovies = movies.filter(shortMovie => shortMovie.title.length < 5);
console.log(shortTitleMovies);

//2.Create an array of movie titles with long movie titles
const longTitleMovies = movies.filter(longMovie => longMovie.title.length > 25);
console.log(longTitleMovies);

//3. Count the number of movies made between 1980-1989 (including both the years)
const oldMovies = movies
    .filter(movie => movie.year >= 1980)
    .filter(movie => movie.year <= 1989)
console.log(`${oldMovies.length} Movies were made between 1980-1989 (including both the years)`);

//4.Create a new array that has an extra key called tag. 
//The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const moviesWithTag = [];
const goodMovie = movies.filter(movie => movie.rating >= 7);
goodMovie.forEach(movie => movie.tag = "Good");
const avarageMovie = movies.filter(movie => movie.rating >= 4 && movie.rating < 7);
avarageMovie.forEach(movie => movie.tag = "Average");
const badMovie = movies.filter(movie => movie.rating < 4);
badMovie.forEach(movie => movie.tag = "Bad");
moviesWithTag.push(goodMovie, avarageMovie, badMovie);

console.log(moviesWithTag);

//5. Using chaining, first filter the movies array to only contain the movies rated higher than 6. 
//Now map the movies array to only the rating of the movies.

const higherRatedMovie = movies.filter(movie => movie.rating > 6).map(movie => movie.rating);
console.log(higherRatedMovie);

//6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. 
//So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?

const noOfMovies = movies.filter(movie => movie.title.match(/SURFER|Benjamin|Alien/i)).length
console.log(`${noOfMovies}  movies contains following keywords: Surfer, Alien or Benjamin.`);

//7.Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

const duplicateMovie = movies.filter((movie) => {
    const moviesTitlleInArray = movie.title.toLowerCase().split(" ").sort();
    for (let i = 0; i < moviesTitlleInArray.length; i++) {
        if (moviesTitlleInArray[i] === moviesTitlleInArray[i + 1]) {
            return movie;
        }
    }
});
console.log(`Movies with duplicate words are ${duplicateMovie.length}`)

//8.Calculate the average rating of all the movies using reduce. Optional

const avarageRating = (movies.reduce((el, value) => el + value.rating, 0) / movies.length).toFixed(2);
console.log(`The average rating of all the movies is ${avarageRating}`);

//9.Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
// const tagRatingMovies = movies.reduce((mv, value) => {
//     let good = mv + (value.tag == "Good")
//     return good
// }, 0)
const tagRatingMovies = movies.reduce((mv, movie) => {
    if (movie.tag == "Good") {
        mv.goodMovies++;
    } else if (movie.tag == "Average") {
        mv.averageMovies++;
    } else if (movie.tag == "Bad") {
        mv.badMovies++;
    }
    return mv;
}, { goodMovies: 0, averageMovies: 0, badMovies: 0 }
);
console.log(tagRatingMovies)