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
    content.textContent = `Thank you! I will contact you in 1-3 days. Have a nice day!`;

    // append content
    container.append(content);
});