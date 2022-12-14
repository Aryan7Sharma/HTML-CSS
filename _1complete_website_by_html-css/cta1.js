const toogleButton = document.getElementById('nav-toogle');
const navLinks = document.getElementById('nav-links');

function toogleCta(){
    navLinks.classList.toggle('active');
}

toogleButton.addEventListener('click',toogleCta);