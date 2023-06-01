
//Event listener is implemented so that when the addButton is clicked the modal is set to display block

document.getElementById("addButton").addEventListener("click", function() {
    document.getElementById("movielist").style.display = "block";
  });

//Event lister for closing the window when the 'close' class is clicked on.  [0] is implemented so that the webpage remains the same
//When the close button is clicked movielist is dispalyed as none
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("movielist").style.display = "none";
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
    document.getElementById("buttoncontainer").appendChild(newButton);
  });
  





