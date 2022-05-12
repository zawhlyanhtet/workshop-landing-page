"use strict";
const header = document.querySelector("header");
const mainContent = document.querySelector("main");
const navBar = document.querySelector(".mySticky");
const navheight = navBar.getBoundingClientRect().height;
const waypoint = new Waypoint({
  element: mainContent,
  handler: function (direction) {
    if (direction === "down") {
      navBar.classList.toggle("navOnAnimate");
      mainContent.style.marginTop = navheight + "px";
    }
    if (direction === "up") {
      navBar.classList.toggle("navOnAnimate");
      mainContent.style.marginTop = 0 + "px";
    }
  },
});

//scroll reveal

const slideDownHeader = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  interval: 200,
  cleanup: true,
};

ScrollReveal().reveal(".headerContent", slideDownHeader);

const slideDownMain = {
  distance: "70px",
  origin: "bottom",
  duration: 1000,
  interval: 300,
  cleanup: true,
  delay: 100,
};
ScrollReveal().reveal(".mainContent", slideDownMain);
