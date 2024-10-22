import "./home.css";

const content = document.querySelector("#content");

export function home() { content.innerHTML = `
    <div class="content-top">
                <h1>Jon's Cooking</h1>
            </div>

            <div class="top-container">
                <div class="quote">Jon can only cook like 4 dishes. I guess they're ok<br>
                    as long as your expectations are low.</div>
                <div class="quoted-person">-Jon's best friend</div>
            </div>

            <div class="mid-container">
                <div class="mid-container-header">Hours</div>
                <div class="timeslots">
                    Monday: 6am to 9pm<br>
                    Tuesday: 6am to 9pm<br>
                    Wednesday: 6am to 9pm<br>
                    Thursday: 6am to 9pm<br>
                    Friday: Breakfast and lunch only<br>
                    Saturday: Breakfast only<br>
                    Sunday: Breakfast only<br>
                </div>
            </div>

            <div class="bottom-container">
                <div class="bottom-container-header">Location</div>
                <div class="location">Jon's house 123, Jon's Land, Jon's country</div>
            </div>
    `
}

