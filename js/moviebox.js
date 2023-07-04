
const movieSearch = document.getElementById('searchInput');
const MovieListBox = document.getElementById('movielistbox');
const ReviewListBox = document.getElementById('reviewlistbox');
const MovieContainer = document.getElementById('movie-container');
const movieThumbnails = document.querySelectorAll(".movie-thumbnail");



let Clicker = 0;
function handleClick(){
	Clicker++;
}

//Event listener is implemented so that when the addButton is clicked the modal is set to display block
const AddButton = document.getElementById("addButton").addEventListener("click", function() {
    document.getElementById("movielist").style.display = "block";
    document.querySelector('.movielistbox').style.display = "block";

  });



//Event lister for closing the window when the 'close' class is clicked on. 


  document.querySelector('.movielistbox .close').addEventListener('click', function() {
    document.querySelector('.movielistbox').style.display = 'none';
    document.getElementById('movielist').style.display= "none";
  });

//If user clicks outside of modal the modal closes
  
  document.getElementById("movielist").addEventListener("click", function(event) {
    if (event.target === this) {
      document.getElementById("movielist").style.display = "none";
    }
  });

//When modal pops up a frame is also added. This is where the movie poster will be placed when reviewing the movie.
  
  document.getElementById("addButton").addEventListener("click", function() {
    var newButton = document.createElement("button");
    newButton.addEventListener("click", function() {
      var addButton = document.createElement("button");
      document.getElementById("buttoncontainer").appendChild(addButton);
    });
    //document.getElementById("buttoncontainer").appendChild(newButton);
  });

  
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






  
  //-------------------------------

  /*function openReview(){
	ReviewListBox.style.display='block';
	
}

MovieContainer.addEventListener("click", function(event) {
	if(event.target.classList.contains("movie-thumbnail")){
		openReview();
	}
});


document.ElementbyClassName(".movie-container").addEventListener("click", function() {
  document.getElementById("reviewlistbox").style.display = "block";
})
*/
