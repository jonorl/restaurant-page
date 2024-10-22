import "./style.css";
// import kitchenImage from "./images/cafe3.jpeg";
// import {home} from "./home.js"
// import {menu} from "./menu.js"

// const image = document.createElement("img");

const homeButton = document.querySelector("#home")
const menuButton = document.querySelector("#menu")

homeButton.addEventListener("click", () => {
    import("./home.js").then(module => {
        module.home();
    });
});

menuButton.addEventListener("click", () => {
    import("./menu.js").then(module => {
        module.menu();
    });
});

// image.src = kitchenImage;

console.log("hello restaurant")