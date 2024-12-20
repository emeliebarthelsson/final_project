const items = [
  {
    imageUrl: "../assets/images/img5.JPG",
    watch: "Certina DS Action",
    price: 2000,
    condition: "Signs of wear",
    altText: "Picture of Certina DS Action",
  },
  {
    imageUrl: "../assets/images/img10.JPG",
    watch: "Maven MUS Solar Chrono",
    price: 2000,
    condition: "New",
    altText: "Picture of Maven MUS Solar Chrono",
  },
  {
    imageUrl: "../assets/images/img15.JPG",
    watch: "Tusenö Shellback",
    price: 5000,
    condition: "Minor signs of wear",
    altText: "Picture of Tusenö Shellback",
  },
  {
    imageUrl: "../assets/images/img20.JPG",
    watch: "Oris Diver 65 cotton candy",
    price: 18000,
    condition: "Minor signs of wear",
    altText: "Picture of Oris Diver 65 cotton candy",
  },
  {
    imageUrl: "../assets/images/img32.JPG",
    watch: "Certina DS Acion Diver",
    price: 6000,
    condition: "Minor signs of wear",
    altText: "Picture of Certina DS Acion Diver",
  },
  {
    imageUrl: "../assets/images/img34.JPG",
    watch: "Maurice Lacroix Aikon Tide",
    price: 3000,
    condition: "Minor signs of wear",
    altText: "Picture of Maurice Lacroix Aikon Tide",
  },
  {
    imageUrl: "../assets/images/img37.JPG",
    watch: "Yema Superman",
    price: 5000,
    condition: "Minor signs of wear",
    altText: "Picture of Yema Superman",
  },
];

// get elements
const cartBadge = document.querySelector(".cart-badge");
const storeCardContainer = document.querySelector(".store-container");

// render store items
function renderStore(items) {
    storeCardContainer.textContent = "";
    items.forEach(item => {
        // create elements and content
        const card = document.createElement("div");
        card.classList.add("store__card");

        const img = document.createElement("img");
        img.src = item.imageUrl;
        img.alt = item.altText;

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
            shoppingCart.push(item); // add item to shopping cart
            storeCart();
            renderCartContent();
            updateCartBadge();
        });

        // append elements
        cardContent.append(watch, price, condition, addToCart);
        card.append(img, cardContent);
        storeCardContainer.append(card);
    });
};

// filter
// get element 
const search = document.querySelector(".search__input");

// event listener to search input
search.addEventListener("input", (event) => {
  let filteredWatches = [...items];
  filteredWatches = filteredWatches.filter((item) => {
    return item.watch.toLowerCase().startsWith(event.target.value.toLowerCase());
  });

  // render filtered store items
  renderStore(filteredWatches);
});

// sort
// get element
const sortButtons = document.querySelectorAll(".sort-button");

// sort store items
const sortWatches = (event) => {
  let sortedWatches = [...items];

  const sortType = event.target.dataset.sort;
  if (sortType === "price-low") {
    sortedWatches = sortedWatches.sort((a, b) => a.price - b.price);
  } else if (sortType === "price-high") {
    sortedWatches = sortedWatches.sort((a, b) => b.price - a.price);
  } else if (sortType === "all") {
    sortedWatches = [...items];
  }

  // render sorted store items
  renderStore(sortedWatches);
};

// event listener to sort buttons
sortButtons.forEach(button => {
  button.addEventListener("click", (event) => sortWatches(event));
});

// shopping cart
// variable
const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

// get elements
const cart = document.querySelector(".cart");
const cartButton = document.querySelector(".cart__button");
const totalPrice = document.querySelector(".content-total");
const closeCart = document.querySelector(".button__close");
const removeButton = document.querySelector(".button__remove");
const contentList = document.querySelector(".content-list");

// store cart
function storeCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

// render cart items
function renderCartContent() {
  if (shoppingCart.length !== 0) {
    contentList.textContent = "";

    shoppingCart.forEach((item) => {
      // create elements and content
      const contentItem = document.createElement("li");
      contentItem.classList.add("list-item");

      const contentItemImg = document.createElement("img");
      contentItemImg.classList.add("list-item__img");
      contentItemImg.src = item.imageUrl;
      contentItemImg.alt = item.altText;

      const watchPriceContainer = document.createElement("div");
      watchPriceContainer.classList.add("list-item__description");

      const watch = document.createElement("p");
      watch.textContent = item.watch;

      const price = document.createElement("p");
      price.textContent = `${item.price} NOK`;

      // append elements
      watchPriceContainer.append(watch, price);
      contentItem.append(contentItemImg, watchPriceContainer);
      contentList.append(contentItem);
    });
  } else {
    contentList.textContent = "Your cart is empty";
  }

  // total price of items in cart
  const totalPriceAmount = shoppingCart.reduce((acc, item) => acc + item.price, 0);
  totalPrice.textContent = `Total: ${totalPriceAmount} NOK`;
};

// function for cart badge
function updateCartBadge() {
  cartBadge.textContent = shoppingCart.length;
}

// event listeners to cart buttons
cartButton.addEventListener("click", () => {
  renderCartContent();
  cart.showModal();
});

closeCart.addEventListener("click", () => {
  cart.close();
});

removeButton.addEventListener("click", () => {
  shoppingCart.length = 0;
  renderCartContent();
  storeCart();
  updateCartBadge();
});

// event listener to document
document.addEventListener("DOMContentLoaded", () => {
  renderStore(items);
  renderCartContent();
  updateCartBadge();
});