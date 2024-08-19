
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    // Si el inicio de sesión es exitoso:
    
    if (username && password) {
        // Almacena el nombre del usuario en el localStorage
        localStorage.setItem('usern', username);

        // Redirige a la página principal o realiza alguna otra acción
        window.location.href = 'index.html'; 
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
