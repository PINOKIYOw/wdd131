const products = [
  { id: "p1", name: "Smartphone" },
  { id: "p2", name: "Laptop" },
  { id: "p3", name: "Headphones" },
  { id: "p4", name: "Smartwatch" }
];

const select = document.querySelector("#product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

// Footer year
document.querySelector("#year").textContent = new Date().getFullYear();