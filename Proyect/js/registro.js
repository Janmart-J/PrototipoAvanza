document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const closeLogin = document.getElementById('close-login');
    const closeRegister = document.getElementById('close-register');
    const registerForm = document.getElementById('register-form');
    const successMessage = document.getElementById('success'); // Mensaje de éxito

    // Mostrar modal de login al hacer clic en "Iniciar sesión"
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    // Mostrar modal de registro al hacer clic en "Regístrate"
    registerBtn.addEventListener('click', function() {
        registerModal.style.display = 'block';
    });

    // Cerrar modal de login al hacer clic en la X
    closeLogin.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    // Cerrar modal de registro al hacer clic en la X
    closeRegister.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });

    // Cerrar modales al hacer clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });

    // Manejar envío de formulario de registro
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario (enviar y redirigir)
        
        // Recoger los datos del formulario
        const formData = new FormData(registerForm);

        // Enviar los datos al servidor
        fetch('register.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) // Asumiendo que el servidor responde con JSON
        .then(data => {
            if (data.success) {
                // Mostrar mensaje de éxito si el registro fue exitoso
                successMessage.style.display = 'block';
                successMessage.textContent = '¡Registro exitoso!';
                registerForm.reset(); // Opcional: Limpiar el formulario
            }
            
        })
    });
});
