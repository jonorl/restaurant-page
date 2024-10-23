// Import other js modules and main CSS

import "../css/style.css";
import { home } from "./home.js"
import { menu } from "./menu.js"
import { about } from "./about.js"

// Button selectors
const homeButton = document.querySelector("#home")
const menuButton = document.querySelector("#menu")
const aboutButton = document.querySelector("#about")


// Event Listeners
homeButton.addEventListener("click", () => {
    home();
});

menuButton.addEventListener("click", () => {
    menu();
});

aboutButton.addEventListener("click", () => {
    about();
});

// Console log as requested
console.log("hello restaurant")