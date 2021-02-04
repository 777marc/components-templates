console.log('load main js')
const menuBtn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleBtn);

function toggleBtn() {
    console.log('here')
}