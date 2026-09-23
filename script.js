let cart = [];
let total = 0;

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total = total + price;

    displayCart();
}

function displayCart() {

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>No items added yet.</p>";
        return;
    }

    cart.forEach(function(item, index) {

        let div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartItems.appendChild(div);
    });

    document.getElementById("total").innerText = total;
}

function removeItem(index) {

    total = total - cart[index].price;

    cart.splice(index, 1);

    displayCart();
}

function placeOrder() {

    if (cart.length === 0) {
        alert("Please add some items to your cart.");
        return;
    }

    alert("Order placed successfully! 🎉\nTotal Amount: ₹" + total);

    cart = [];
    total = 0;

    displayCart();

    document.getElementById("total").innerText = "0";
}

function goToMenu() {

    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}