// Preloader

export default function() {
    const body = document.querySelector('body');
    const preloader = document.querySelector('.preloader');

    window.addEventListener('load', function() {
        setTimeout(() => {
            document.body.classList.add("loaded");
        }, 5000);

        setInterval(() => {
            document.body.classList.add("fadeOut");
        }, 5500);
    });
}