
document.getElementById("addButton").addEventListener("click", function() {
    document.getElementById("movielist").style.display = "block";
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("movielist").style.display = "none";
  });
  
  document.getElementById("movielist").addEventListener("click", function(event) {
    if (event.target === this) {
      document.getElementById("movielist").style.display = "none";
    }
  });
  
  document.getElementById("addButton").addEventListener("click", function() {
    var newButton = document.createElement("button");
    newButton.addEventListener("click", function() {
      var addButton = document.createElement("button");
      document.getElementById("buttoncontainer").appendChild(addButton);
    });
    document.getElementById("buttoncontainer").appendChild(newButton);
  });
  






/*document.getElementById("addButton").addEventListener("click", function() {
    document.getElementById("movielist").style.display = "block";

});

document.getElementsByClassName("close")[0].addEventListener("click",function(){
    document.getElementById("movielist").style.display="none";
});*/


/*var modal = document.getElementById("movielist");
var closeButton = document.getElementById("close-modal");

function openList(){
    modal.style.display="block";
}

function closeList() {
    modal.style.display="none"
}

document.getElementById("open-modal").addEventListener("click", openList);
closeButton.addEventListener("click", openList);
window.addEventListener("click", function(event) {
    if(event.target == modal){
        closeList();
    }
});*/
