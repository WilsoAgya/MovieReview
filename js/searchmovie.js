/*import {apiKey} from './config.js'


document.getElementById('search').addEventListener("click",searchMovies);





function searchMovies() {
  var searchTerm = document.getElementById("searchInput").value;
  var Key = apiKey;
  var apiUrl ="https://movie-database-alternative.p.rapid.api.com/?s=" + searchTerm + "&apiKey=" + Key;
  
  
  fetch(apiUrl)

    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      var movies = data.results
    

    movies.forEach(function(movie){
      console.log(movie.title);
    });
    })

    .catch(function(error){
      console.log(error);
    })



  
}



/*function searchMovies(){
  var searchTerm= document.getElementById("searchInput").value;

  fetch("https://movie-database-alternative.p.rapidapi.com/?s=" + searchTerm,{
        headers:{
          
            'X-RapidAPI-Key' : apiKey,
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
          
        }

       })


        .then(function(response) {
          return response.json();
        })
        .then(function(data)  {
          var movies = data.results;
        

        updateMovieList(movies);
      })

      .catch(function(error) {
        console.log(error);
      
      });

      }
      */

/*function updateMovieList(movies) {
  var movieList = document.querySelector(".movies");
  movieList.innerHTML = "";

  movies.forEach(function(movie) {
    var movieElement = document.createElement("div");
    movieElement.classList.add("movie-item");

    var titleElement = document.createElement("h3");
    titleElement.textContent = movie.Title;
    movieElement.appendChild(titleElement);

    var imageElement = document.createElement("img");
    imageElement.src = movie.Poster;
    movieElement.appendChild(imageElement);
    
    movieList.appendChild(movieElement);
  });
}*/
