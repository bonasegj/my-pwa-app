// This file contains the JavaScript code for the web application, including the function to send a WhatsApp message and handles user interactions.

function sendWhatsApp() {
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    // Eliminar espacios en blanco del número de teléfono
    phone = phone.replace(/\s/g, '');

    let whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        }, function(err) {
            console.log('Service Worker registration failed:', err);
        });
    });
}