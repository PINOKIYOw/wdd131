let count = localStorage.getItem("reviewCount");

if (!count) {
  count = 0;
}

count++;

localStorage.setItem("reviewCount", count);

document.querySelector("#counter").textContent = count;

// Footer year
document.querySelector("#year").textContent = new Date().getFullYear();