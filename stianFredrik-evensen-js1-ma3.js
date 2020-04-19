// question 1

(a, b) => a - b;

// question 2

const apiUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(apiUrl)
  .then((response) => response.json())

  .then(function (json) {
    const names = json.results;
    for (let i = 0; i < names.length; i++) {
      console.log(names[i].name);
    }
  })

  .catch((error) => (window.location.href = "error.html"));

// question 3

const string = "These cats are outrageous.";

console.log(string.replace("cats", "giraffes"));

// question 4

const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.dir(params);

let userId = 10;

if (userId === "") {
  window.location.href = "third.html";
} else if (userId < 10) {
  window.location.href = "first.html";
} else if (userId >= 10) {
  window.location.href = "second.html";
} else {
  window.location.href = "error.html";
}

const baseUrl = "https://my.site.com";
const userUrl = `${baseUrl}?userId=`;
const fullUrl = userUrl + userId;

// question 5

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
container.removeChild(btn);

// Question 6

const animals = document.querySelector(".animals");
const cow = document.querySelector(".cows");

const list = document.createElement("li");
list.className = "parrots";
const text = document.createTextNode("Parrots");
list.appendChild(text);

animals.appendChild(list);
cow.after(list);

// Question 7

const gamesUrl = "https://api.rawg.io/api/games/3801";
const ratingCont = document.querySelector(".rating");

fetch(gamesUrl)
  .then((response) => response.json())

  .then(function (json) {
    const gamesRating = json.rating;
    ratingCont.innerText = gamesRating;
  })
  .catch((error) => console.log(error));
