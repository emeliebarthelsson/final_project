// get elements
const form = document.querySelector(".form");
const container = document.querySelector(".form-container");

// event listener for contact form
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // hide elements
    form.style.display = "none";

    // create elements
    const content = document.createElement("div");
    content.classList.add("submit-content");

    const contentHeading = document.createElement("h3");
    contentHeading.textContent = "Thank you!";

    const contentText = document.createElement("p");
    contentText.textContent = "I will contact you in 1-3 days";

    const contentGreeting = document.createElement("p");
    contentGreeting.textContent = "Have a nice day!";

    // append content
    content.append(contentHeading, contentText, contentGreeting);
    container.append(content);
});