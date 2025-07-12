// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainScreen = document.getElementById('main-screen');

    // Simulate loading time (3 seconds)
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
    }, 3000);

    // Button event listeners
    const buttons = document.querySelectorAll('.app-button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            alert(`Button ${index + 1} clicked!`);
        });
    });
});

// Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}