import "./style.css";

const homeButton = document.querySelector("#home")
const menuButton = document.querySelector("#menu")
const aboutButton = document.querySelector("#about")

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

aboutButton.addEventListener("click", () => {
    import("./about.js").then(module => {
        module.about();
    });
});

console.log("hello restaurant")