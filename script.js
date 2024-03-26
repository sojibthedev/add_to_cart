let totalPrice = 0;

function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - $${price.toFixed(2)}`;
    cartItems.appendChild(listItem);
    totalPrice += price;
    updateTotalPrice();
    openCartPanel();
}

function openCartPanel() {
    const cartPanel = document.getElementById('cart-panel');
    cartPanel.style.left = '0';
}

function closeCartPanel() {
    const cartPanel = document.getElementById('cart-panel');
    cartPanel.style.left = '-392px';
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}
