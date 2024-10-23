import "./style.css";

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

console.log("hello restaurant")