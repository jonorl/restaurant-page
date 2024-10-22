import "./style.css";
import kitchenImage from "./images/cafe3.jpeg";
import {home} from "./home.js"

const image = document.createElement("img");

const homeButton = document.querySelector("#home")
homeButton.addEventListener("click", home)

image.src = kitchenImage;

console.log("hello restaurant")