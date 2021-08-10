
alert('Сайт-портфолио дизайнера \n\nВерстал cам\n\nТехнологии в проэкте: \n- Html\n- Css\n- JavaScript\n- Normalize.css')

// MENU
const menu = document.querySelector('.navbar-menu');
const menuBtn = document.querySelector('.button-menu');
const closeMenuBtn = document.querySelector('.close-menu-button');

menuBtn.addEventListener("click", () => {
  menu.classList.toggle('is-open');
})

closeMenuBtn.addEventListener("click", () => {
  menu.classList.toggle('is-open');
})