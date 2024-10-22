import "./menu.css";

const content = document.querySelector("#content");

import water from "./images/water.webp";
import fizzyWater from "./images/fizzy_water.webp"
import coffee from "./images/coffee.webp"


export function menu() { content.innerHTML = `
    
        <h1>Menu</h1>
        <div class="beverages-container">

            <div class="beverages-title">Beverages</div>
            <div class="beverage-one">
                <div class="title">Water</div>
                <div class="content">Tap water</div>
                <div class="price">Free</div>
                <img class="menu-img" src="${water}" alt="water">
            </div>

            <div class="beverage-two">
                <div class="title">Fizzy Water</div>
                <div class="content">Tap water fizzied with CO2</div>
                <div class="price">£2</div>
                <img class="menu-img" src="./images/${fizzyWater}" alt="fizzy water">
            </div>

            <div class="beverage-three">
                <div class="title">Flat white</div>
                <div class="content">Coffee with frothy milk</div>
                <div class="price">£3</div>
                <img class="menu-img" src="./images/${coffee}" alt="flat white coffee">
            </div>
            
        </div>

        <div class="sides-container">

            <div class="sides-title">Sides</div>
            <div class="sides-one">
                <div class="title">Salad</div>
                <div class="content">Lettuce, tomatoes, carrots and avocado with balsamic, oil and salt</div>
                <div class="price">£8</div>
                <img class="menu-img" src="./images/salad.webp" alt="salad">
            </div>

            <div class="sides-two">
                <div class="title">Rice</div>
                <div class="content">White boiled rice</div>
                <div class="price">£6</div>
                <img class="menu-img" src="./images/rice.webp" alt="rice">
            </div>

        </div>

        <div class="mains-container">

            <div class="mains-title">Main Dishes</div>
            <div class="mains-one">
                <div class="title">Poached Eggs</div>
                <div class="content">Poached eggs on toast with avocado and salmon</div>
                <div class="price">£14</div>
                <img class="menu-img" src="./images/poached_eggs.jpeg" alt="eggs">
            </div>

            <div class="mains-two">
                <div class="title">Prawn Pasta</div>
                <div class="content">Pasta with fried prawns and rocket</div>
                <div class="price">£16</div>
                <img class="menu-img" src="./images/prawn_pasta.jpeg" alt="pasta">
            </div>

            <div class="mains-three">
                <div class="title">Chicken Wraps</div>
                <div class="content">Chicken wraps with avocado, cheese, salsa and soured cream</div>
                <div class="price">£18</div>
                <img class="menu-img" src="./images/wraps.webp" alt="wraps">
            </div>

            <div class="mains-four">
                <div class="title">Argie Style "Vitel Tonne"</div>
                <div class="content">Vitello Tonnato - only available at Xmas</div>
                <div class="price">£16</div>
                <img class="menu-img" src="./images/vitel_tone.jpg" alt="vitello tonnato">
            </div>
        </div>

        <div class="desserts-container">
            <div class="dessert">Desert</div>
            <div class="dessert-one">
                <div class="title">Passion Fruit Gelato</div>
                <div class="content">Home made</div>
                <div class="price">£5</div>
                <img class="menu-img" src="./images/gelato.webp" alt="gelato">
            </div>
        </div>

    </div>
    `
}