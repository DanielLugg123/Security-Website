let cart = [];

// Add to cart
function addToCart(name, price) {
  cart.push({name: name, price: price});
  alert("Added to cart");
}

// Show cart
function showCart() {
  let list = document.getElementById("cartList");
  let total = 0;

  list.innerHTML = "";

  cart.forEach(function(item) {
    let li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    list.appendChild(li);

    total += item.price;
  });

  document.getElementById("total").textContent = "Total: $" + total;
}

// Clear cart
function clearCart() {
  cart = [];
  showCart();
}

// Load cart when page opens
if (document.getElementById("cartList")) {
  showCart();
}

// Login validation
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  let user = document.getElementById("user").value;

  if (user == "") {
    document.getElementById("loginMsg").textContent = "Enter username";
  } else {
    document.getElementById("loginMsg").textContent = "Login successful";
  }
});

// Register validation
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("remail").value;

  if (email == "") {
    document.getElementById("regMsg").textContent = "Enter email";
  } else {
    document.getElementById("regMsg").textContent = "Registered!";
  }
});

// Checkout validation
document.getElementById("checkoutForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;

  if (name == "") {
    document.getElementById("msg").textContent = "Enter name";
  } else {
    document.getElementById("msg").textContent = "Order placed!";
  }
});