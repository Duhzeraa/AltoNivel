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




// Pega os 3 elementos que vamos usar
const botaoMenu = document.getElementById('menu-toggle');
const navPrincipal = document.getElementById('main-nav');
const navAuth = document.getElementById('auth-nav');

// "Escuta" o clique no botão
botaoMenu.addEventListener('click', () => {
    // Adiciona ou remove a classe 'active'
    // NAS DUAS NAVS ao mesmo tempo!
    navPrincipal.classList.toggle('active');
    navAuth.classList.toggle('active');
});