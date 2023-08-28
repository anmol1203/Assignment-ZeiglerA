let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.box .btn');

// Get the cart container and the checkout button
const cartContainer = document.querySelector('.cart-items-container');
const checkoutButton = cartContainer.querySelector('.btn');

// Event listener for "Add to Cart" buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Event listener for checkout button
checkoutButton.addEventListener('click', checkoutCart);

// Initialize the cart array to store added items
let cartItems = [];

// Function to add an item to the cart
function addToCart(event) {
  const parentBox = event.target.closest('.box');
  const itemName = parentBox.querySelector('h3').textContent;
  const itemPrice = parentBox.querySelector('.price span').textContent;

  const newItem = {
    name: itemName,
    price: itemPrice
  };

  cartItems.push(newItem);
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  cartContainer.innerHTML = ''; // Clear previous cart items

  cartItems.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    cartItemElement.innerHTML = `
      <span class="fas fa-times"></span>
      <div class="content">
        <h3>${item.name}</h3>
        <div class="price">${item.price}</div>
      </div>
    `;
    cartContainer.appendChild(cartItemElement);
  });

  // Add the "Checkout Now" button
  cartContainer.innerHTML += '<a href="#" class="btn">checkout now</a>';
}

// Function to handle the checkout action
function checkoutCart() {
  if (cartItems.length > 0) {
    alert('Thank you for your purchase!');
    cartItems = []; // Clear the cart after checkout
    updateCartDisplay();
  } else {
    alert('Your cart is empty. Add items before checking out.');
  }
}


