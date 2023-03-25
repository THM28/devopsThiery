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

// Code voor zaalvoetbal tekst
const footballIcon = document.querySelector(".fa.fa-futbol-o");

footballIcon.addEventListener("mouseover", () => {
  const tooltipText = footballIcon.getAttribute("data-tooltip");
  const tooltipElement = document.createElement("div");
  tooltipElement.innerText = tooltipText;
  tooltipElement.classList.add("tooltip");
  footballIcon.appendChild(tooltipElement);
});

footballIcon.addEventListener("mouseout", () => {
  const tooltipElement = document.querySelector(".tooltip");
  if (tooltipElement) {
    tooltipElement.remove();
  }
});

// Code voor video afspelen en delete button kickboks
const heartIcon = document.querySelector(".fa.fa-heartbeat");
const videoContainer = document.querySelector("#video-container");
let video;

heartIcon.addEventListener("mouseover", () => {
  if (!video) {
    video = document.createElement("video");
    video.src = "path/to/kickboxing/video.mp4";
    video.autoplay = true;
    video.controls = true;
    videoContainer.appendChild(video);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-button");
    deleteBtn.addEventListener("click", () => {
      video.pause();
      videoContainer.removeChild(video);
      video = null;
      deleteBtn.style.display = "none";
    });
    videoContainer.appendChild(deleteBtn);
  }
});


// Code voor programmeren tekst
const laptopIcon = document.querySelector(".fa.fa-laptop");

laptopIcon.addEventListener("mouseover", () => {
  const tooltipText = laptopIcon.getAttribute("data-tooltip1");
  const tooltipElement = document.createElement("div");
  tooltipElement.innerText = tooltipText;
  tooltipElement.classList.add("tooltip");
  laptopIcon.appendChild(tooltipElement);
});

laptopIcon.addEventListener("mouseout", () => {
  const tooltipElement = document.querySelector(".tooltip");
  if (tooltipElement) {
    tooltipElement.remove();
  }
});

// Code voor puzzelen & gamen tekst
const puzzleIcon = document.querySelector(".fa.fa-puzzle-piece");
const gamingIcon = document.querySelector(".fa.fa-gamepad");

const addTooltip = (icon, tooltipNum) => {
  icon.addEventListener("mouseover", () => {
    const tooltipText = icon.getAttribute(`data-tooltip${tooltipNum}`);
    const tooltipElement = document.createElement("div");
    tooltipElement.innerText = tooltipText;
    tooltipElement.classList.add("tooltip");
    icon.appendChild(tooltipElement);
  });

  icon.addEventListener("mouseout", () => {
    const tooltipElement = document.querySelector(".tooltip");
    if (tooltipElement) {
      tooltipElement.remove();
    }
  });
}

addTooltip(puzzleIcon, 2);
addTooltip(gamingIcon, 3);
