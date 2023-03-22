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


function openNewModal() {
  // Get the new modal element by ID
  const newModal = document.getElementById("newModal");
  
  // Get the close button element inside the new modal
  const newModalCloseBtn = newModal.querySelector(".close");
  
  // When the user clicks the close button, hide the new modal
  newModalCloseBtn.onclick = function() {
      newModal.style.display = "none";
  };
  
  // Show the new modal
  newModal.style.display = "block";
}

hobbiesList.forEach((hobby, index) => {
  hobby.addEventListener("click", () => {
    hobbyTitle.innerText = hobby.innerText;
    hobbyInfo.innerText = getHobbyInfo(index);
    hobbiesPopup.style.display = "block";
    // Show the modal
    newModal.style.display = "block";
  });
});
