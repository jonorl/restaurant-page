import "./about.css";

const content = document.querySelector("#content");

export function about() {
    // Clear previous content
    content.textContent = "";

    // Create the main about-us container
    const aboutUsContainer = document.createElement("div");
    aboutUsContainer.classList.add("about-us-container");

    // About Us Title
    const aboutUsTitle = document.createElement("h1");
    aboutUsTitle.textContent = "About us";
    aboutUsContainer.appendChild(aboutUsTitle);

    // Inner about-us container
    const innerAboutUsContainer = document.createElement("div");
    innerAboutUsContainer.classList.add("about-us-container");

    const aboutUsText = document.createElement("div");
    aboutUsText.classList.add("about-us");
    aboutUsText.textContent = "There's no really 'us', it's just plain old me. This is all I can cook, and you should feel thankful about it";
    innerAboutUsContainer.appendChild(aboutUsText);

    aboutUsContainer.appendChild(innerAboutUsContainer);

    // Contact Us Title
    const contactUsTitle = document.createElement("h1");
    contactUsTitle.textContent = "Contact us";
    aboutUsContainer.appendChild(contactUsTitle);

    // Contact 1
    const contact1Title = document.createElement("div");
    contact1Title.classList.add("contact1-title");
    contact1Title.textContent = "Jon";
    aboutUsContainer.appendChild(contact1Title);

    const contact1Details = document.createElement("div");
    contact1Details.classList.add("contact1-details");
    contact1Details.textContent = "Chef, manager, waiter and dishwasher"
    contact1Details.appendChild(document.createElement("br"));
    contact1Details.appendChild(document.createTextNode("+1-555-5555"));
    contact1Details.appendChild(document.createElement("br"));
    contact1Details.appendChild(document.createTextNode("jon@jon.jon"));
    aboutUsContainer.appendChild(contact1Details);

    // Contact 2
    const contact2Title = document.createElement("div");
    contact2Title.classList.add("contact2-title");
    contact2Title.textContent = "Complaints";
    aboutUsContainer.appendChild(contact2Title);

    const contact2Details = document.createElement("div");
    contact2Details.classList.add("contact1-details");
    contact2Details.textContent = "Complaint Manager";
    contact2Details.appendChild(document.createElement("br"));
    contact2Details.appendChild(document.createTextNode("+1-TOLL-FREE-NUMBER"));
    contact2Details.appendChild(document.createElement("br"));
    contact2Details.appendChild(document.createTextNode("complaints@jon.jon"));
    aboutUsContainer.appendChild(contact2Details);

    // Append the main container to the content div
    content.appendChild(aboutUsContainer);
}
