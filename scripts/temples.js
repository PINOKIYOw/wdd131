const menuButton = document.querySelector('#menuButton');
const navMenu = document.querySelector('#navMenu');

menuButton.addEventListener('click', () => {
navMenu.classList.toggle('show');

if(menuButton.textContent === '☰'){
menuButton.textContent = 'X';
}else{
menuButton.textContent = '☰';
}
});

// Footer Dynamic Year
document.querySelector('#year').textContent = new Date().getFullYear();

// Last Modified
document.querySelector('#lastModified').textContent = document.lastModified;
