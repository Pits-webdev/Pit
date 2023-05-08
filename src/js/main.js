import './../css/style.css';

const mobileMenu = document.querySelector('.menu');
const mobileOpen = document.querySelector('.menu_icon_open');
const mobileClose = document.querySelector('.menu_icon_close');

let isOpen = false;

mobileOpen.addEventListener('click', () => {
  isOpen = true;
  mobileMenu.classList.add('is_open');
  mobileOpen.style.display = 'none';
  mobileClose.style.display = 'flex';
});

mobileClose.addEventListener('click', () => {
  isOpen = false;
  mobileMenu.classList.remove('is_open');
  mobileOpen.style.display = 'flex';
  mobileClose.style.display = 'none';
});
