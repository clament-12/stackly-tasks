let products = [];
let filteredProducts = [];

const container = document.getElementById("productContainer");
const loader = document.getElementById("loader");
const errorDiv = document.getElementById("error");

// FETCH DATA
async function fetchProducts() {
  try {
    loader.style.display = "block";

    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("API failed");

    products = await res.json();
    filteredProducts = [...products];

    loader.style.display = "none";
    displayProducts(filteredProducts);

  } catch (err) {
    loader.style.display = "none";
    errorDiv.innerText = "Error loading data";
  }
}

// DISPLAY PRODUCTS
function displayProducts(data) {
  container.innerHTML = "";

  data.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <span class="badge">NEW</span>
      <img src="${p.image}">
      <h4>${p.title.slice(0, 20)}</h4>
      <p>${p.description.slice(0, 60)}...</p>
      <button class="price-btn">₹ ${p.price}</button>
      <button class="view-btn" onclick="viewDetails(${p.id})">View More</button>
    `;

    container.appendChild(card);
  });
}

// SEARCH
document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  displayProducts(filteredProducts);
});

// CATEGORY FILTER
document.getElementById("category").addEventListener("change", (e) => {
  const value = e.target.value;

  filteredProducts = value
    ? products.filter(p => p.category === value)
    : [...products];

  displayProducts(filteredProducts);
});

// SORT
function sortProducts(type) {
  let sorted = [...filteredProducts];

  if (type === "low") {
    sorted.sort((a, b) => a.price - b.price);
  } else {
    sorted.sort((a, b) => b.price - a.price);
  }

  displayProducts(sorted);
}

// MODAL
function viewDetails(id) {
  const product = products.find(p => p.id === id);

  document.getElementById("modalTitle").innerText = product.title;
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalDesc").innerText = product.description;
  document.getElementById("modalPrice").innerText = "₹ " + product.price;

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// INIT
fetchProducts();