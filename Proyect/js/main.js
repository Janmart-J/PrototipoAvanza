document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('usern');
    
    // Elementos de la interfaz
    var userGreeting = document.getElementById('user-greeting');
    var loginBtn = document.getElementById('login-btn');
    var logoutLink = document.getElementById('logout-link');

    if (username) {
        // Mostrar el saludo del usuario y el enlace para cerrar sesión
        if (userGreeting) {
            userGreeting.textContent = username; // Actualizar el saludo con el nombre del usuario
        }
        
        if (loginBtn) {
            loginBtn.style.display = 'none'; // Ocultar el botón de inicio de sesión
        }
        
        if (logoutLink) {
            logoutLink.style.display = 'block'; // Mostrar el enlace para cerrar sesión
        }
    } else {
        // Mostrar el botón de inicio de sesión y ocultar el enlace para cerrar sesión
        if (loginBtn) {
            loginBtn.style.display = 'block'; // Mostrar el botón de inicio de sesión
        }
        
        if (logoutLink) {
            logoutLink.style.display = 'none'; // Ocultar el enlace para cerrar sesión
        }
    }

    // Manejador de eventos para cerrar sesión
    var logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Evita la redirección predeterminada del enlace
            localStorage.removeItem('usern'); // Elimina el nombre del usuario del localStorage
            window.location.href = 'index.html'; // Redirige al usuario a la página principal
        });
    }
});
