/*
const NavbarToggle = document.querySelector('.Navbar__toggle');
const Nav = document.querySelector('.Navbar__items ');

NavbarToggle.addEventListener('click', (e) =>{
    Nav.classList.toggle('Navbar__toggleshow');
});
*/
const NavbarToggle = document.querySelector('.Navbar__toggle');
function classToggle() {
    const navs = document.querySelectorAll('.Navbar__items');

  navs.forEach(nav => nav.classList.toggle('Navbar__toggleShow'))
  
  }

 NavbarToggle.addEventListener('click', classToggle);