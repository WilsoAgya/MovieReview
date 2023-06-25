

const movieSearch = document.getElementById('searchInput');
const MovieListBox = document.getElementById('movielistbox');
const ReviewListBox = document.querySelectorAll('reviewlistbox');
const MovieContainer = document.getElementById('movie-container');
const movieThumbnails = document.querySelectorAll(".movie-thumbnail");


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

}

function openReview(){
document.querySelectorAll('.movie-container').forEach(image => {
	image.onclick = () =>{
		document.querySelector('.reviewlistbox').style.display = 'block';
		document.querySelector('.movielistbox').style.display='none';
	}
});
document.querySelector('.reviewlistbox .close').addEventListener("click", function() {
    document.querySelector('.reviewlistbox').style.display = "none";
	document.querySelector('.movie-container').style.diplay = 'block';
  });

}




/*var modal = document.getElementById("reviewlistbox");
var modalImage = document.getElementById("modalImage");
var thumbnails = document.getElementsByClassName("movie-thumbnail");

function openReview(){
	for(var i = 0; i<thumbnails.length; i++) {
	thumbnails[i].onclick = function() {
		var movieThumbnail = this.querySelector('img');
		modalImage.src = movieThumbnail.src;
		modal.style.display="block";
	};
}
}


*/


/*movieThumbnails.forEach((thumbnail) => {
		thumbnail.addEventListener('click',function(){
			const moviePoster = event.currentTarget.querySelector('img').src;
			openReview(moviePoster);
			});
		});*/




/*function movieaddlist(){
	const movieThumbnails = document.querySelectorAll(".movie-thumbnail");

	movieThumbnails.forEach((thumbnail) => {
		thumbnail.addEventListener('click',function(){
			const reviewscreen = document.getElementById("movie-container");
			reviewscreen.style.display = "block";
		});
	});
	
}*/


	
	
	
	/*var addButton = document.getElementById('addButton');
            var container = document.getElementById('container');
            addButton.addEventListener('click', function() {
                var newFrame = document.createElement('button');
                newFrame.className='movieslot';
                newFrame.classList.add('button');
                newFrame.textContent="Movie";
                container.appendChild(newFrame);*/










