var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

 var object = {};
 let i = Math.random() * Math.floor(100)
 
 object.itemName = item;
 object.itemPrice = i;
 
 cart.push(object);
 
 return `${item} has been added to your cart.`
}
 
 

function viewCart() {
  // write your code here
  i = 0;
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  } else {
    statement = `In your cart, you have `;
    do {
      
    }
    while (i < cart.lenth - 1)
  }
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
