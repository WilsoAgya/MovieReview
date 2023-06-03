import {apiKey} from './config.js';


async function myFunction(){

const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key' : apiKey,
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

//----------------------------------------

fetch(url, options)
	.then(response => response.json())
	.then(response => {
		const movies = response.Search;
		movies.map(movie =>{
			//console.log(movie.Title);
			const name = movie.Title;
			const year = movie.Year;
			const poster = movie.Poster;
			//const moviecard = '<li><img src="${poster}" alt="${name}"><h3>${name}</h3><p>${year}</p></li>';
			var moviecard = '<img src="' + poster + '"> ' +'<h2>' + name + '</h2>';
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