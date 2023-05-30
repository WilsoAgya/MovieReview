async function myFunction(){

const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Star%20Wars&r=json&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3db8a0f822msh8ce3b9ea70d3873p19afedjsn6ac73d0e6a7d',
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