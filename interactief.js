// JavaScript code to open the modal when "persoonlijk" element is clicked
var persoonlijkElement = document.getElementById("persoonlijk");
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

persoonlijkElement.addEventListener("click", function() {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

  