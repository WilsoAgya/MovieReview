import {apiKey} from './config.js';

/*
async function myFunction(){

const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=Spongebob';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key' : apiKey,
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};
*/
//----------------------------------------

const movieSearch = document.getElementById('searchInput');
var movieList = document.querySelector(".movies");

async function loadMovies(searchTerm){
	const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=32e4ee32`;
	const res = await fetch(`${URL}`);
	const data = await res.json();
	//console.log(data.Search);
	if(data.Response == "True") displayMovieList(data.Search);

}

function findMovies(){
	let searchTerm = (movieSearch.value).trim();
	//if(searchTerm.length > 0){
		loadMovies(searchTerm);
	//}
	
}

movieSearch.addEventListener('keyup',findMovies);


function displayMovieList(movies){
	searchInput.innerHTML = "";
	for(let a = 0; a < movies.length; a++){
		let movieListItem = document.createElement('div');
		movieListItem.dataset.id = movies[a].imbdID;
		movieListItem.classList.add('movie');
		let moviePoster;
		if(movies[a].Poster !== "N/A" )
		    moviePoster = movies[a].Poster;
		else
			moviePoster = "Movie not found";
		console.log(movieListItem);
		movieListItem.innerHTML=`
		<div class = "movie-thumbnail">
		   <img src = "${moviePoster}">
		</div>
		<div class = "movie-info">
		   <h3>${movies[a].Title}</h3>
		   <p>${movies[a].Year}</p>
		</div>
		`;
		//movieList.appendChild(movieListItem);
		document.querySelector('.movie-thumbnail').innerHTML += movieListItem.innerHTML;
	}

	
}




/*fetch(url, options)
	.then(response => response.json())
	.then(response => {
		const movies = response.Search;
		movies.map(movie =>{
			//console.log(movie.Title);
			const name = movie.l;
			const year = movie.Year;
			const poster = movie.imageUrl;
			var moviecard = `<li><img src="${poster}" <h2>${name}</h2></li>`;
			//var moviecard = '<li><img src="' + poster + '"> ' +'<h2>' + name + '</h2></li>';
			document.querySelector('.movies').innerHTML += moviecard;
		})
	})

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


}

myFunction();


async function loadMovies(searchTerm){
	const URL = `https://movie-database-alternative.p.rapid.api.com/?s=${searchTerm}`
}


*/







