var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write yo
 var object = {};
 let i = Math.random() * Math.floor(100)

  object.itemName = item;
  object.itemPrice = i;
  
  cart.push(object);
 
 

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
