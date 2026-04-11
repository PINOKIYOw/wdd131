// MENU TOGGLE
const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

// FOOTER YEAR
const year = document.querySelector("#year");
if (year) {
    year.textContent = new Date().getFullYear();
}

// DATA (ARRAY + OBJECTS)
const places = [
    { name: "Kruger National Park", type: "Safari" },
    { name: "Cape Town", type: "City" },
    { name: "Durban Beach", type: "Beach" }
];

// DISPLAY DATA
const container = document.querySelector("#places");

if (container) {
    places.forEach(place => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${place.name}</h3><p>${place.type}</p>`;
        container.appendChild(div);
    });
}

// FORM + LOCAL STORAGE
const form = document.querySelector("#form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value;

        localStorage.setItem("username", name);

        document.querySelector("#message").textContent =
            `Thank you ${name}, we will contact you!`;
    });
}
