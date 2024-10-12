'use strict'

let width = screen.width;
let height = screen.height;

const menuItems = document.querySelectorAll(".menu-item");
const mobileNavLinks = document.querySelector(".mobile-nav-links")
const mobileNavBar = document.querySelector(".mobile-navbar");

const ethosLearnMoreBtn = document.querySelector('.ethos-learn-more');
const closeModalBtns = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');
const ethosMoreDivs = document.querySelectorAll('.ethos-more')
const ethosMoreP1 = document.querySelector("#ethos-more__para1");
const ethosMoreP2 = document.querySelector("#ethos-more__para2");
const ethosMoreP3 = document.querySelector("#ethos-more__para3");
const nextBtn1 = document.querySelector('#next1');
const nextBtn2 = document.querySelector('#next2');
const nextBtn3 = document.querySelector('#next3');
const nextBtns = [nextBtn1, nextBtn2, nextBtn3];
const ethosParagraphs = [ethosMoreP1, ethosMoreP2, ethosMoreP3];

function myFunction() {
	menuItems.forEach(menuItem => menuItem.classList.toggle("add-transition"))
	if (width < 475) {
    mobileNavLinks.classList.toggle("increaseHeight");
    mobileNavBar.classList.toggle("increaseHeight");
	}
}

// display the first ethos modal window
const displayEthosPara1 = function () {
	ethosMoreP1.classList.contains("hidden")
    ? ethosMoreP1.classList.remove("hidden")
	: ethosMoreP1.classList.add("hidden");
	overlay.classList.contains("hidden")
    ? overlay.classList.remove("hidden")
    : overlay.classList.add("hidden");
}

nextBtns.forEach((btn, i) => {
  btn.addEventListener("click", function (e) {
    if (btn) {
      console.log("btn good");
      if (e.target.id === "next1") {
        if (!ethosParagraphs[i].classList.contains("hidden")) {
          console.log("CLICK1");
          ethosParagraphs[i].classList.add("hidden");
          ethosParagraphs[i + 1].classList.remove("hidden");
          overlay.classList.remove("hidden");
        }
      } else if (e.target.id === "next2") {
        if (!ethosParagraphs[i].classList.contains("hidden")) {
          console.log("CLICK2");
          ethosParagraphs[i].classList.add("hidden");
          ethosParagraphs[i + 1].classList.remove("hidden");
          overlay.classList.remove("hidden");
        }
      } else if (e.target.id === "next3") {
        console.log("CLICK3");
        ethosParagraphs[i].classList.add("hidden");
        overlay.classList.add("hidden");
      }
    }
  });
})

// clear the modal window and overlay
const clearModal = function () {
  ethosMoreDivs.forEach((div) => {
    div.classList.add("hidden");
  });
  overlay.classList.add("hidden");
};


// displays first ethos paragraph when clicking 'Learn  More'
if (ethosLearnMoreBtn) {
  ethosLearnMoreBtn.addEventListener("click", () => {
    displayEthosPara1();
    console.log("ethosLearnMoreBtn clicked");
  });
}

closeModalBtns.forEach((btn) => {
  btn.addEventListener('click', clearModal)
})

if (overlay) {
  overlay.addEventListener("click", clearModal); // clears modal window by clicking on overlay
}