import "./menu.css";

const content = document.querySelector("#content");

import water from "./images/water.webp";
import fizzyWater from "./images/fizzy_water.webp"
import coffee from "./images/coffee.webp"


export function menu() {
    // Clear previous content
    content.textContent = '';

    // Create and append the menu heading
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    content.appendChild(heading);

    // Beverages container
    const beveragesContainer = document.createElement('div');
    beveragesContainer.classList.add('beverages-container');

    const beveragesTitle = document.createElement('div');
    beveragesTitle.classList.add('beverages-title');
    beveragesTitle.textContent = 'Beverages';
    beveragesContainer.appendChild(beveragesTitle);

    // Beverage one
    const beverageOne = document.createElement('div');
    beverageOne.classList.add('beverage-one');

    const beverageOneTitle = document.createElement('div');
    beverageOneTitle.classList.add('title');
    beverageOneTitle.textContent = 'Water';
    beverageOne.appendChild(beverageOneTitle);

    const beverageOneContent = document.createElement('div');
    beverageOneContent.classList.add('content');
    beverageOneContent.textContent = 'Tap water';
    beverageOne.appendChild(beverageOneContent);

    const beverageOnePrice = document.createElement('div');
    beverageOnePrice.classList.add('price');
    beverageOnePrice.textContent = 'Free';
    beverageOne.appendChild(beverageOnePrice);

    beveragesContainer.appendChild(beverageOne);

    // Beverage two
    const beverageTwo = document.createElement('div');
    beverageTwo.classList.add('beverage-two');

    const beverageTwoTitle = document.createElement('div');
    beverageTwoTitle.classList.add('title');
    beverageTwoTitle.textContent = 'Fizzy Water';
    beverageTwo.appendChild(beverageTwoTitle);

    const beverageTwoContent = document.createElement('div');
    beverageTwoContent.classList.add('content');
    beverageTwoContent.textContent = 'Tap water fizzied with CO2';
    beverageTwo.appendChild(beverageTwoContent);

    const beverageTwoPrice = document.createElement('div');
    beverageTwoPrice.classList.add('price');
    beverageTwoPrice.textContent = '£2';
    beverageTwo.appendChild(beverageTwoPrice);

    beveragesContainer.appendChild(beverageTwo);

    // Beverage three
    const beverageThree = document.createElement('div');
    beverageThree.classList.add('beverage-three');

    const beverageThreeTitle = document.createElement('div');
    beverageThreeTitle.classList.add('title');
    beverageThreeTitle.textContent = 'Flat white';
    beverageThree.appendChild(beverageThreeTitle);

    const beverageThreeContent = document.createElement('div');
    beverageThreeContent.classList.add('content');
    beverageThreeContent.textContent = 'Coffee with frothy milk';
    beverageThree.appendChild(beverageThreeContent);

    const beverageThreePrice = document.createElement('div');
    beverageThreePrice.classList.add('price');
    beverageThreePrice.textContent = '£3';
    beverageThree.appendChild(beverageThreePrice);

    beveragesContainer.appendChild(beverageThree);

    content.appendChild(beveragesContainer);

    // Sides container
    const sidesContainer = document.createElement('div');
    sidesContainer.classList.add('sides-container');

    const sidesTitle = document.createElement('div');
    sidesTitle.classList.add('sides-title');
    sidesTitle.textContent = 'Sides';
    sidesContainer.appendChild(sidesTitle);

    // Side one
    const sidesOne = document.createElement('div');
    sidesOne.classList.add('sides-one');

    const sidesOneTitle = document.createElement('div');
    sidesOneTitle.classList.add('title');
    sidesOneTitle.textContent = 'Salad';
    sidesOne.appendChild(sidesOneTitle);

    const sidesOneContent = document.createElement('div');
    sidesOneContent.classList.add('content');
    sidesOneContent.textContent = 'Lettuce, tomatoes, carrots and avocado with balsamic, oil and salt';
    sidesOne.appendChild(sidesOneContent);

    const sidesOnePrice = document.createElement('div');
    sidesOnePrice.classList.add('price');
    sidesOnePrice.textContent = '£8';
    sidesOne.appendChild(sidesOnePrice);

    sidesContainer.appendChild(sidesOne);

    // Side two
    const sidesTwo = document.createElement('div');
    sidesTwo.classList.add('sides-two');

    const sidesTwoTitle = document.createElement('div');
    sidesTwoTitle.classList.add('title');
    sidesTwoTitle.textContent = 'Rice';
    sidesTwo.appendChild(sidesTwoTitle);

    const sidesTwoContent = document.createElement('div');
    sidesTwoContent.classList.add('content');
    sidesTwoContent.textContent = 'White boiled rice';
    sidesTwo.appendChild(sidesTwoContent);

    const sidesTwoPrice = document.createElement('div');
    sidesTwoPrice.classList.add('price');
    sidesTwoPrice.textContent = '£6';
    sidesTwo.appendChild(sidesTwoPrice);

    sidesContainer.appendChild(sidesTwo);

    content.appendChild(sidesContainer);

    // Mains container
    const mainsContainer = document.createElement('div');
    mainsContainer.classList.add('mains-container');

    const mainsTitle = document.createElement('div');
    mainsTitle.classList.add('mains-title');
    mainsTitle.textContent = 'Main Dishes';
    mainsContainer.appendChild(mainsTitle);

    // Main one
    const mainsOne = document.createElement('div');
    mainsOne.classList.add('mains-one');

    const mainsOneTitle = document.createElement('div');
    mainsOneTitle.classList.add('title');
    mainsOneTitle.textContent = 'Poached Eggs';
    mainsOne.appendChild(mainsOneTitle);

    const mainsOneContent = document.createElement('div');
    mainsOneContent.classList.add('content');
    mainsOneContent.textContent = 'Poached eggs on toast with avocado and salmon';
    mainsOne.appendChild(mainsOneContent);

    const mainsOnePrice = document.createElement('div');
    mainsOnePrice.classList.add('price');
    mainsOnePrice.textContent = '£14';
    mainsOne.appendChild(mainsOnePrice);

    mainsContainer.appendChild(mainsOne);

    // Main two
    const mainsTwo = document.createElement('div');
    mainsTwo.classList.add('mains-two');

    const mainsTwoTitle = document.createElement('div');
    mainsTwoTitle.classList.add('title');
    mainsTwoTitle.textContent = 'Prawn Pasta';
    mainsTwo.appendChild(mainsTwoTitle);

    const mainsTwoContent = document.createElement('div');
    mainsTwoContent.classList.add('content');
    mainsTwoContent.textContent = 'Pasta with fried prawns and rocket';
    mainsTwo.appendChild(mainsTwoContent);

    const mainsTwoPrice = document.createElement('div');
    mainsTwoPrice.classList.add('price');
    mainsTwoPrice.textContent = '£16';
    mainsTwo.appendChild(mainsTwoPrice);

    mainsContainer.appendChild(mainsTwo);

    content.appendChild(mainsContainer);

    // Desserts container
    const dessertsContainer = document.createElement('div');
    dessertsContainer.classList.add('desserts-container');

    const dessertTitle = document.createElement('div');
    dessertTitle.classList.add('dessert');
    dessertTitle.textContent = 'Dessert';
    dessertsContainer.appendChild(dessertTitle);

    // Dessert one
    const dessertOne = document.createElement('div');
    dessertOne.classList.add('dessert-one');

    const dessertOneTitle = document.createElement('div');
    dessertOneTitle.classList.add('title');
    dessertOneTitle.textContent = 'Passion Fruit Gelato';
    dessertOne.appendChild(dessertOneTitle);

    const dessertOneContent = document.createElement('div');
    dessertOneContent.classList.add('content');
    dessertOneContent.textContent = 'Home made';
    dessertOne.appendChild(dessertOneContent);

    const dessertOnePrice = document.createElement('div');
    dessertOnePrice.classList.add('price');
    dessertOnePrice.textContent = '£5';
    dessertOne.appendChild(dessertOnePrice);

    dessertsContainer.appendChild(dessertOne);

    content.appendChild(dessertsContainer);
}

// export function menu() { content.innerHTML = `
    
//         <h1>Menu</h1>
//         <div class="beverages-container">

//             <div class="beverages-title">Beverages</div>
//             <div class="beverage-one">
//                 <div class="title">Water</div>
//                 <div class="content">Tap water</div>
//                 <div class="price">Free</div>
//                 <img class="menu-img" src="${water}" alt="water">
//             </div>

//             <div class="beverage-two">
//                 <div class="title">Fizzy Water</div>
//                 <div class="content">Tap water fizzied with CO2</div>
//                 <div class="price">£2</div>
//                 <img class="menu-img" src="./images/${fizzyWater}" alt="fizzy water">
//             </div>

//             <div class="beverage-three">
//                 <div class="title">Flat white</div>
//                 <div class="content">Coffee with frothy milk</div>
//                 <div class="price">£3</div>
//                 <img class="menu-img" src="./images/${coffee}" alt="flat white coffee">
//             </div>
            
//         </div>

//         <div class="sides-container">

//             <div class="sides-title">Sides</div>
//             <div class="sides-one">
//                 <div class="title">Salad</div>
//                 <div class="content">Lettuce, tomatoes, carrots and avocado with balsamic, oil and salt</div>
//                 <div class="price">£8</div>
//                 <img class="menu-img" src="./images/salad.webp" alt="salad">
//             </div>

//             <div class="sides-two">
//                 <div class="title">Rice</div>
//                 <div class="content">White boiled rice</div>
//                 <div class="price">£6</div>
//                 <img class="menu-img" src="./images/rice.webp" alt="rice">
//             </div>

//         </div>

//         <div class="mains-container">

//             <div class="mains-title">Main Dishes</div>
//             <div class="mains-one">
//                 <div class="title">Poached Eggs</div>
//                 <div class="content">Poached eggs on toast with avocado and salmon</div>
//                 <div class="price">£14</div>
//                 <img class="menu-img" src="./images/poached_eggs.jpeg" alt="eggs">
//             </div>

//             <div class="mains-two">
//                 <div class="title">Prawn Pasta</div>
//                 <div class="content">Pasta with fried prawns and rocket</div>
//                 <div class="price">£16</div>
//                 <img class="menu-img" src="./images/prawn_pasta.jpeg" alt="pasta">
//             </div>

//             <div class="mains-three">
//                 <div class="title">Chicken Wraps</div>
//                 <div class="content">Chicken wraps with avocado, cheese, salsa and soured cream</div>
//                 <div class="price">£18</div>
//                 <img class="menu-img" src="./images/wraps.webp" alt="wraps">
//             </div>

//             <div class="mains-four">
//                 <div class="title">Argie Style "Vitel Tonne"</div>
//                 <div class="content">Vitello Tonnato - only available at Xmas</div>
//                 <div class="price">£16</div>
//                 <img class="menu-img" src="./images/vitel_tone.jpg" alt="vitello tonnato">
//             </div>
//         </div>

//         <div class="desserts-container">
//             <div class="dessert">Desert</div>
//             <div class="dessert-one">
//                 <div class="title">Passion Fruit Gelato</div>
//                 <div class="content">Home made</div>
//                 <div class="price">£5</div>
//                 <img class="menu-img" src="./images/gelato.webp" alt="gelato">
//             </div>
//         </div>

//     </div>
//     `
// }