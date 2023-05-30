var modal = document.getElementById("movielist");
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
});
