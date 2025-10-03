// Fonction pour animer les barres de progression
function animateProgressBars() {
    // Sélectionne toutes les barres de progression
    const bars = document.querySelectorAll('.progress-bar');
    
    bars.forEach(bar => {
        // Récupère le niveau de compétence depuis l'attribut data-level
        const level = bar.getAttribute('data-level'); 
        
        // Définit la largeur de la barre. Grâce à la transition CSS, elle s'animera.
        if (level) {
            bar.style.width = level + '%';
        }
    });
}

// Lance l'animation lorsque le document est entièrement chargé
document.addEventListener('DOMContentLoaded', animateProgressBars);


// --- SCROLL ANIMATION LOGIC (Intersection Observer) ---

const observerOptions = {
    root: null, // Regarde le viewport (la fenêtre)
    rootMargin: '0px 0px -100px 0px', // Déclenche l'animation 100px AVANT que l'élément n'arrive en bas
    threshold: 0.1 // Déclenche si 10% de l'élément est visible
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Si l'élément est visible
            entry.target.classList.add('is-visible');
            // Arrêtez d'observer pour ne pas la re-déclencher
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Cible toutes les sections à animer
document.querySelectorAll('.fade-in-section').forEach(section => {
    scrollObserver.observe(section);
});

// --- LOGIQUE DU MENU BURGER MOBILE ---

document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger-menu');
    const navLinks = document.getElementById('navLinks');
    const links = navLinks.querySelectorAll('a');

    // 1. Gérer le clic sur le bouton burger
    burgerButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Fermer le menu après avoir cliqué sur un lien (pour la navigation sur mobile)
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});
