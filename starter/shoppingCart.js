console.log('Exporting module');

// blocking code
console.log('start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('finish fetching users');

const shoppingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tQ };
