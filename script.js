const images = [
    'medios/Portada_tv-1@2x-100.jpg',
    'medios/Portada_tv-2@2x-100.jpg',
    'medios/Portada_tv-3@2x-100.jpg'
];

let currentIndex = 0;

function changeBackgroundImage() {
    const backgroundImages = document.querySelectorAll('.background-images');
    
    // Desactivar la visibilidad de la imagen actual
    backgroundImages[0].classList.remove('visible');
    
    // Cambiar la imagen de fondo de la segunda capa
    backgroundImages[1].style.backgroundImage = `url(${images[currentIndex]})`;
    
    // Hacer visible la segunda imagen
    backgroundImages[1].classList.add('visible');
    
    // Esperar la transición y luego mover la imagen de fondo a la primera capa
    setTimeout(() => {
        backgroundImages[1].classList.remove('visible');
        backgroundImages[0].style.backgroundImage = `url(${images[(currentIndex + 1) % images.length]})`;
        backgroundImages[0].classList.add('visible');
    }, 1200);  // El tiempo debe coincidir con el de la animación de opacidad

    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3000); // Cambiar cada 3 segundos
document.addEventListener("DOMContentLoaded", function() {
    changeBackgroundImage();
});



// Función para el efecto de scroll reveal

// Función para el efecto de scroll reveal
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

// Evento de scroll
window.addEventListener('scroll', revealOnScroll);

// Llamar a la función al cargar la página
window.addEventListener('load', revealOnScroll);