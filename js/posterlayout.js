
/*import {apiKey} from './config.js';

document.getElementById("search").addEventListener("click",function(){
    var searchQuery = document.getElementById("searchInput").value;
    searchMovies(searchQuery);

});

function searchMovies(query) {
    document.getElementById("imageContainer").innerHTML ="";

    var apiURL = "https://movie-database-alternative.p.rapidapi.com/s" + encodeURIComponent(query);

    fetch(apiURL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

function displayMovies(data) {
    var resultsContainer = document.getElementById("imageContainer");
  
    if (data.length === 0) {
      resultsContainer.textContent = "No results found.";
      return;
    }
  
    data.forEach(function(movie) {
      var movieElement = document.createElement("div");
      movieElement.textContent = movie.title;
      resultsContainer.appendChild(movieElement);
    });
  }


*/


/*document.getElementById("search").addEventListener("click",function(){
    var searchQuery = document.getElementById("searchInput").value;
    searchMovies(searchQuery);


});


function searchMovies(query){
    var apiEndpoint = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';

    fetch(apiEndpoint + "?query=" + query,{
        headers:{
            "X-RapidAPI-Key": apiKey,
            "Content-Type": "application.json"

        }
    })



       .then(response => response.json())
       .then(data => displayMovies(data))
       .catch(error => console.error(error));
}


function displayMovies(data) {
    var resultsContainer = document.getElementById("imageContainer");
    resultsContainer.innerHTML ="";

    if (data.length === 0){
        resultsContainer.textContent="No movies found";
        return;
    }

    data.forEach(function(movie){
        var movieElement = document.createElement("div");
        movieElement.textContent = movie.title;
        resultsContainer.appendChild(movieElement);
    });
    
}

*/






/*document.addEventListener("DOMContentLoaded", function(){
    fetchImages();
});

function fetchImages(){
    var apiURL = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr';

    fetch(apiURL)
       .then(response => response.json())
       .then(data => displayImages(data))
       .catch((error => console.error(error)));
}

function displayImages(data){
    var imageContainer = document.getElementById("imageContainer");

    if(data.length === 0){
        imageContainer.textContent = "Movie does not exist";
        return;
    }

    data.forEach(function(imageURL){
        var imgElement = document.createElement("img");
        imgElement.src = imageURL;
        imageContainer.appendChild(imgElement);
    });
}*/