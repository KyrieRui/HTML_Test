// Get all the size buttons
const sizeButtons = document.querySelectorAll('.size-button');

// Add event listeners to each size button
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the 'selected' class from all buttons
        sizeButtons.forEach(btn => btn.classList.remove('selected'));

        // Add the 'selected' class to the clicked button
        button.classList.add('selected');
    });
});

// Add event listener to the "Add to Cart" button
const addToCartButton = document.getElementById('add-to-cart');
addToCartButton.addEventListener('click', () => {
    // Check if a size is selected
    const selectedSize = document.querySelector('.size-button.selected');

    if (!selectedSize) {
        // Show error message if no size is selected
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    } else {
        // Hide error message if a size is selected
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'none';

        // Add the selected size to the cart (you can implement this logic as per your requirement)
        // For example, you can create an array to hold the selected sizes and update the mini-cart
        const miniCart = document.getElementById('mini-cart');
        const listItem = document.createElement('li');
        listItem.textContent = `Size: ${selectedSize.textContent}`;
        miniCart.appendChild(listItem);
    }
});


const cartButton = document.querySelector('.cart-button');
const cartCount = document.querySelector('.cart-count');

let itemCount = 0;

function addToCart() {
    itemCount++;
    cartCount.textContent = itemCount;
}

cartButton.addEventListener('click', addToCart);