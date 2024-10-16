// Efecto de sonido al hacer clic en el botón
const btn = document.querySelector('.cta-btn');
btn.addEventListener('click', () => {
    const audio = new Audio('https://www.sitio-sonido-ejemplo.com/door-creak.mp3');
    audio.play();
});



