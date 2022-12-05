let menuToggle = document.getElementById('menuToggle');
let navMenu = document.getElementById('navMenu');
let overlay = document.getElementById('overlay');

function toggleMenu(){
  menuToggle.classList.toggle('menu-open');
  navMenu.classList.toggle('open');
  overlay.classList.toggle('darken');
}

function closeMenu(){
  menuToggle.classList.remove('menu-open');
  navMenu.classList.remove('open');
  overlay.classList.remove('darken');
}

menuToggle.onclick = toggleMenu;
overlay.onclick = closeMenu;