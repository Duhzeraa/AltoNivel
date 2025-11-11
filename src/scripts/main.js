// --- Lógica do Menu Hamburger ---
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

if (menuToggle) { // Boa prática: checar se o bicho existe
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// --- Scroll Suave nos Links Internos ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});