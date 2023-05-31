import {apiKey} from './config.js';


async function myFunction(){

const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Star%20Wars&r=json&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key' : apiKey,
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

myFunction();