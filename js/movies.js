

const movieSearch = document.getElementById('searchInput');
const MovieListBox = document.getElementById('movielistbox');
const ReviewListBox = document.querySelector('.reviewlistbox');
const MovieContainer = document.getElementById('movie-container');



async function loadMovies(searchTerm){
	const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=32e4ee32`;
	const res = await fetch(`${URL}`);
	const data = await res.json();
	console.log(data.Search);
	if(data.Response == "True") displayMovieList(data.Search);

}

function findMovies(){
	let searchTerm = (movieSearch.value).trim();
	if(searchTerm.length > 0){
		MovieContainer.classList.remove('hide-search-list');
		loadMovies(searchTerm);
	}
	else{
		MovieContainer.classList.add('hide-search-list');
	}
}

movieSearch.addEventListener('keyup',findMovies);


function displayMovieList(movies){
	let moviePoster;
    MovieContainer.innerHTML = "";
	for(let a = 0; a < movies.length; a++){
		let movieListItem = document.createElement('div');
		movieListItem.dataset.id = movies[a].imdbID;
		movieListItem.classList.add('movie-thumbnail');

		if(movies[a].Poster != "N/A" )
		    moviePoster = movies[a].Poster;
		else
		moviePoster = movies[a].Poster;
		//moviePoster.innerHTML = "Movie Not found";
		console.log(movieListItem);
		movieListItem.innerHTML=`
		<div class="movie-thumbnail">
			<img src="${moviePoster}">
		</div>
		<div class="movie-item-info">
		     <h3>${movies[a].Title}</h3>
			 <p>${movies[a].Year}</p>
		</div>
	
		`;
		MovieContainer.appendChild(movieListItem);
	
	
	}
	openReview();
	loadMovieDetails();

}


function openReview(){
document.querySelectorAll('.movie-thumbnail').forEach(image => {
	image.onclick = () =>{
		document.querySelector('.reviewlist').style.display = 'block';
		document.querySelector('.movielistbox').style.display='none';
	}
});
document.querySelector('.reviewlistbox .close').addEventListener("click", function() {
    document.querySelector('.reviewlist').style.display = "none";
	document.querySelector('.movielistbox').style.display = 'block';
  });
}

function loadMovieDetails(){
	const searchListMovies = MovieContainer.querySelectorAll('.movie-thumbnail');
	searchListMovies.forEach(movie => {
		movie.addEventListener('click',async() => {
			//console.log(movie.dataset.id);
			movieSearch.value ="";
			const imdbID = movie.dataset.id;
			const result = await fetch(`https://omdbapi.com/?i=${imdbID}&apikey=32e4ee32`);
			const movieSummary = await result.json();
			displayMovieDetails(movieSummary);
		});
	});
}

function displayMovieDetails(summary){
	console.log(summary);
	ReviewListBox.innerHTML=`
	<div class = "reviewimage">
		<img src = "${summary.Poster}" alt = "Movie Poster">
	</div>
	`;
}










