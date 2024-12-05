const items = [
  {
    imageUrl: "../assets/images/img5.JPG",
    watch: "Certina DS Action",
    price: 2000,
    condition: "Signs of wear"
  },
  {
    imageUrl: "../assets/images/img10.JPG",
    watch: "Maven MUS Solar Chrono",
    price: 2000,
    condition: "New"
  },
  {
    imageUrl: "../assets/images/img15.JPG",
    watch: "Tusenö Shellback",
    price: 5000,
    condition: "Minor signs of wear"
  },
  {
    imageUrl: "../assets/images/img20.JPG",
    watch: "Oris Diver 65 cotton candy",
    price: 18000,
    condition: "Minor signs of wear"
  },
  {
    imageUrl: "../assets/images/img32.JPG",
    watch: "Certina DS Acion Diver",
    price: 6000,
    condition: "Minor signs of wear"
  },
  {
    imageUrl: "../assets/images/img34.JPG",
    watch: "Maurice Lacroix Aikon Tide",
    price: 3000,
    condition: "Minor signs of wear"
  },
  {
    imageUrl: "../assets/images/img37.JPG",
    watch: "Yema Superman",
    price: 5000,
    condition: "Minor signs of wear"
  }
];

// variable
const shoppingCart = [];

// get element
const cartBadge = document.querySelector(".cart-badge");
const storeCardContainer = document.querySelector(".store-container");

// event listener to window
window.addEventListener("DOMContentLoaded", () => renderStore(items));

// render store items
function renderStore(items) {
    storeCardContainer.textContent = "";
    items.forEach(item => {
        // create elements
        const card = document.createElement("div");
        card.classList.add("store__card");

        const img = document.createElement("img");
        img.src = item.imageUrl;

        const cardContent = document.createElement("div");
        cardContent.classList.add("card__content");

        const watch = document.createElement("p");
        watch.textContent = `Watch: ${item.watch}`;

        const price = document.createElement("p");
        price.textContent = `Price: ${item.price} NOK`;

        const condition = document.createElement("p");
        condition.textContent = `Condition: ${item.condition}`;

        const addToCart = document.createElement("button");
        addToCart.textContent = "Add to cart";
        addToCart.classList.add("secondary__button");

        // event listener to "add to cart" button
        addToCart.addEventListener("click", () => {
            shoppingCart.push(item);
            cartBadge.textContent = shoppingCart.length;
        });

        // append elements
        cardContent.append(watch, price, condition, addToCart);
        card.append(img, cardContent);
        storeCardContainer.append(card);
    });
};