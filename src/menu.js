import "./menu.css";

// import Images
import waterImage from "./images/water.webp";
import fizzyWaterImage from "./images/fizzy_water.webp";
import coffeeImage from "./images/coffee.webp";
import saladImage from "./images/salad.webp";
import riceImage from "./images/rice.webp";
import eggsImage from "./images/poached_eggs.jpeg";
import pastaImage from "./images/prawn_pasta.jpeg";
import wrapsImage from "./images/wraps.webp";
import vitelImage from "./images/vitel_tone.jpg";
import gelatoImage from "./images/gelato.webp";

const content = document.querySelector("#content");

// Image selections
const water = document.createElement("img");
const fizzyWater = document.createElement("img");
const coffee = document.createElement("img");
const salad = document.createElement("img");
const rice = document.createElement("img");
const eggs = document.createElement("img");
const pasta = document.createElement("img");
const wraps = document.createElement("img");
const vitel = document.createElement("img");
const gelato = document.createElement("img");

water.src = waterImage;
fizzyWater.src = fizzyWaterImage;
coffee.src = coffeeImage;
salad.src = saladImage;
rice.src = riceImage;
eggs.src = eggsImage;
pasta.src = pastaImage;
wraps.src = wrapsImage;
vitel.src = vitelImage;
gelato.src = gelatoImage;

export function menu() {
    // Clear previous content
    content.textContent = "";

    // Create and append the menu heading
    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    content.appendChild(heading);

    // Beverages container
    const beveragesContainer = document.createElement("div");
    beveragesContainer.classList.add("beverages-container");

    const beveragesTitle = document.createElement("div");
    beveragesTitle.classList.add("beverages-title");
    beveragesTitle.textContent = "Beverages";
    beveragesContainer.appendChild(beveragesTitle);

    // Beverage one
    const beverageOne = document.createElement("div");
    beverageOne.classList.add("beverage-one");

    const beverageOneTitle = document.createElement("div");
    beverageOneTitle.classList.add("title");
    beverageOneTitle.textContent = "Water";
    beverageOne.appendChild(beverageOneTitle);

    const beverageOneContent = document.createElement("div");
    beverageOneContent.classList.add("content");
    beverageOneContent.textContent = "Tap water";
    beverageOne.appendChild(beverageOneContent);

    const beverageOnePrice = document.createElement("div");
    beverageOnePrice.classList.add("price");
    beverageOnePrice.textContent = "Free";
    beverageOne.appendChild(beverageOnePrice);

    const beverageOneImage = water;
    beverageOneImage.classList.add("menu-img");
    beverageOne.appendChild(beverageOneImage);

    beveragesContainer.appendChild(beverageOne);

    // Beverage two
    const beverageTwo = document.createElement("div");
    beverageTwo.classList.add("beverage-two");

    const beverageTwoTitle = document.createElement("div");
    beverageTwoTitle.classList.add("title");
    beverageTwoTitle.textContent = "Fizzy Water";
    beverageTwo.appendChild(beverageTwoTitle);

    const beverageTwoContent = document.createElement("div");
    beverageTwoContent.classList.add("content");
    beverageTwoContent.textContent = "Tap water fizzied with CO2";
    beverageTwo.appendChild(beverageTwoContent);

    const beverageTwoPrice = document.createElement("div");
    beverageTwoPrice.classList.add("price");
    beverageTwoPrice.textContent = "£2";
    beverageTwo.appendChild(beverageTwoPrice);

    const beverageTwoImage = fizzyWater;
    beverageTwoImage.classList.add("menu-img");
    beverageTwo.appendChild(beverageTwoImage);

    beveragesContainer.appendChild(beverageTwo);

    // Beverage three
    const beverageThree = document.createElement("div");
    beverageThree.classList.add("beverage-three");

    const beverageThreeTitle = document.createElement("div");
    beverageThreeTitle.classList.add("title");
    beverageThreeTitle.textContent = "Flat white";
    beverageThree.appendChild(beverageThreeTitle);

    const beverageThreeContent = document.createElement("div");
    beverageThreeContent.classList.add("content");
    beverageThreeContent.textContent = "Coffee with frothy milk";
    beverageThree.appendChild(beverageThreeContent);

    const beverageThreePrice = document.createElement("div");
    beverageThreePrice.classList.add("price");
    beverageThreePrice.textContent = "£3";
    beverageThree.appendChild(beverageThreePrice);

    const beverageThreeImage = coffee;
    beverageThreeImage.classList.add("menu-img");
    beverageThree.appendChild(beverageThreeImage);

    beveragesContainer.appendChild(beverageThree);

    content.appendChild(beveragesContainer);

    // Sides container
    const sidesContainer = document.createElement("div");
    sidesContainer.classList.add("sides-container");

    const sidesTitle = document.createElement("div");
    sidesTitle.classList.add("sides-title");
    sidesTitle.textContent = "Sides";
    sidesContainer.appendChild(sidesTitle);

    // Side one
    const sidesOne = document.createElement("div");
    sidesOne.classList.add("sides-one");

    const sidesOneTitle = document.createElement("div");
    sidesOneTitle.classList.add("title");
    sidesOneTitle.textContent = "Salad";
    sidesOne.appendChild(sidesOneTitle);

    const sidesOneContent = document.createElement("div");
    sidesOneContent.classList.add("content");
    sidesOneContent.textContent = "Lettuce, tomatoes, carrots and avocado with balsamic, oil and salt";
    sidesOne.appendChild(sidesOneContent);

    const sidesOnePrice = document.createElement("div");
    sidesOnePrice.classList.add("price");
    sidesOnePrice.textContent = "£8";
    sidesOne.appendChild(sidesOnePrice);

    const sidesOneImage = salad;
    sidesOneImage.classList.add("menu-img");
    sidesOne.appendChild(sidesOneImage);

    sidesContainer.appendChild(sidesOne);

    // Side two
    const sidesTwo = document.createElement("div");
    sidesTwo.classList.add("sides-two");

    const sidesTwoTitle = document.createElement("div");
    sidesTwoTitle.classList.add("title");
    sidesTwoTitle.textContent = "Rice";
    sidesTwo.appendChild(sidesTwoTitle);

    const sidesTwoContent = document.createElement("div");
    sidesTwoContent.classList.add("content");
    sidesTwoContent.textContent = "White boiled rice";
    sidesTwo.appendChild(sidesTwoContent);

    const sidesTwoPrice = document.createElement("div");
    sidesTwoPrice.classList.add("price");
    sidesTwoPrice.textContent = "£6";
    sidesTwo.appendChild(sidesTwoPrice);

    const sidesTwoImage = rice;
    sidesTwoImage.classList.add("menu-img");
    sidesTwo.appendChild(sidesTwoImage);

    sidesContainer.appendChild(sidesTwo);

    content.appendChild(sidesContainer);

    // Mains container
    const mainsContainer = document.createElement("div");
    mainsContainer.classList.add("mains-container");

    const mainsTitle = document.createElement("div");
    mainsTitle.classList.add("mains-title");
    mainsTitle.textContent = "Main Dishes";
    mainsContainer.appendChild(mainsTitle);

    // Main one
    const mainsOne = document.createElement("div");
    mainsOne.classList.add("mains-one");

    const mainsOneTitle = document.createElement("div");
    mainsOneTitle.classList.add("title");
    mainsOneTitle.textContent = "Poached Eggs";
    mainsOne.appendChild(mainsOneTitle);

    const mainsOneContent = document.createElement("div");
    mainsOneContent.classList.add("content");
    mainsOneContent.textContent = "Poached eggs on toast with avocado and salmon";
    mainsOne.appendChild(mainsOneContent);

    const mainsOnePrice = document.createElement("div");
    mainsOnePrice.classList.add("price");
    mainsOnePrice.textContent = "£14";
    mainsOne.appendChild(mainsOnePrice);

    const mainsOneImage = eggs;
    mainsOneImage.classList.add("menu-img");
    mainsOne.appendChild(mainsOneImage);

    mainsContainer.appendChild(mainsOne);

    // Main two
    const mainsTwo = document.createElement("div");
    mainsTwo.classList.add("mains-two");

    const mainsTwoTitle = document.createElement("div");
    mainsTwoTitle.classList.add("title");
    mainsTwoTitle.textContent = "Prawn Pasta";
    mainsTwo.appendChild(mainsTwoTitle);

    const mainsTwoContent = document.createElement("div");
    mainsTwoContent.classList.add("content");
    mainsTwoContent.textContent = "Pasta with fried prawns and rocket";
    mainsTwo.appendChild(mainsTwoContent);

    const mainsTwoPrice = document.createElement("div");
    mainsTwoPrice.classList.add("price");
    mainsTwoPrice.textContent = "£16";
    mainsTwo.appendChild(mainsTwoPrice);

    const mainsTwoImage = pasta;
    mainsTwoImage.classList.add("menu-img");
    mainsTwo.appendChild(mainsTwoImage);

    mainsContainer.appendChild(mainsTwo);

    // Main three
    const mainsThree = document.createElement("div");
    mainsThree.classList.add("mains-three");

    const mainsThreeTitle = document.createElement("div");
    mainsThreeTitle.classList.add("title");
    mainsThreeTitle.textContent = "Chicken Wraps";
    mainsThree.appendChild(mainsThreeTitle);

    const mainsThreeContent = document.createElement("div");
    mainsThreeContent.classList.add("content");
    mainsThreeContent.textContent = "Chicken wraps with avocado, cheese, salsa and soured cream";
    mainsThree.appendChild(mainsThreeContent);

    const mainsThreePrice = document.createElement("div");
    mainsThreePrice.classList.add("price");
    mainsThreePrice.textContent = "£18";
    mainsThree.appendChild(mainsThreePrice);

    const mainsThreeImage = wraps;
    mainsThreeImage.classList.add("menu-img");
    mainsThree.appendChild(mainsThreeImage);

    mainsContainer.appendChild(mainsThree);

    // Main Four
    const mainsFour = document.createElement("div");
    mainsFour.classList.add("mains-Four");

    const mainsFourTitle = document.createElement("div");
    mainsFourTitle.classList.add("title");
    mainsFourTitle.textContent = "Argie Style Vitel Tonne";
    mainsFour.appendChild(mainsFourTitle);

    const mainsFourContent = document.createElement("div");
    mainsFourContent.classList.add("content");
    mainsFourContent.textContent = "Vitello Tonnato - only available at Xmas";
    mainsFour.appendChild(mainsFourContent);

    const mainsFourPrice = document.createElement("div");
    mainsFourPrice.classList.add("price");
    mainsFourPrice.textContent = "£16";
    mainsFour.appendChild(mainsFourPrice);

    const mainsFourImage = vitel;
    mainsFourImage.classList.add("menu-img");
    mainsFour.appendChild(mainsFourImage);

    mainsContainer.appendChild(mainsFour);

    content.appendChild(mainsContainer);

    // Desserts container
    const dessertsContainer = document.createElement("div");
    dessertsContainer.classList.add("desserts-container");

    const dessertTitle = document.createElement("div");
    dessertTitle.classList.add("dessert");
    dessertTitle.textContent = "Dessert";
    dessertsContainer.appendChild(dessertTitle);

    // Dessert one
    const dessertOne = document.createElement("div");
    dessertOne.classList.add("dessert-one");

    const dessertOneTitle = document.createElement("div");
    dessertOneTitle.classList.add("title");
    dessertOneTitle.textContent = "Passion Fruit Gelato";
    dessertOne.appendChild(dessertOneTitle);

    const dessertOneContent = document.createElement("div");
    dessertOneContent.classList.add("content");
    dessertOneContent.textContent = "Home made";
    dessertOne.appendChild(dessertOneContent);

    const dessertOnePrice = document.createElement("div");
    dessertOnePrice.classList.add("price");
    dessertOnePrice.textContent = "£5";
    dessertOne.appendChild(dessertOnePrice);

    const dessertOneImage = gelato;
    dessertOneImage.classList.add("menu-img");
    dessertOne.appendChild(dessertOneImage);

    dessertsContainer.appendChild(dessertOne);

    content.appendChild(dessertsContainer);
}