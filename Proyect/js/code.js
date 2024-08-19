document.addEventListener('DOMContentLoaded', function() {
    const dayOffBtn = document.getElementById('day-off-btn');
    const coursesBtn = document.getElementById('courses-btn');
    const compensationBtn = document.getElementById('compensation-btn');
    const registerSection = document.getElementById('register-section');
    const closeRegister = document.getElementById('close-register-form');
    const registerForm = document.getElementById('course-registration');
    const codeDisplay = document.getElementById('code-display');
    const registrationCode = document.getElementById('registration-code');
    const generateAndSubmitBtn = document.getElementById('generate-and-submit-btn');
    const successMessage = document.getElementById('success-message');

    // Función para generar un código aleatorio de 8 caracteres
    function generateCode() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    }

    // Mostrar formulario correspondiente al hacer clic en los botones
    [dayOffBtn, coursesBtn, compensationBtn].forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            registerSection.style.display = 'block'; // Muestra el formulario de registro
            registerSection.scrollIntoView({ behavior: 'smooth' }); // Desplaza hasta el formulario con animación suave
        });
    });

    // Cerrar formulario
    closeRegister.addEventListener('click', function() {
        registerSection.style.display = 'none'; // Oculta el formulario al hacer clic en el botón de cerrar
        codeDisplay.style.display = 'none'; // Oculta el código generado
        successMessage.style.display = 'none'; // Oculta el mensaje de éxito
    });

    // Manejar clic en el botón "Registrar Curso"
    generateAndSubmitBtn.addEventListener('click', function() {
        // Generar código aleatorio
        const code = generateCode();
        registrationCode.textContent = code;
        codeDisplay.style.display = 'block'; // Muestra el código generado
        successMessage.style.display = 'block'; // Muestra el mensaje de éxito

        // Recoger los datos del formulario
        const formData = new FormData(registerForm);

        // Enviar los datos al servidor
        fetch('process_registration.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) // Asumiendo que el servidor responde con JSON
        .then(data => {
            if (data.success) {
                // Mostrar mensaje de éxito si el registro fue exitoso
                successMessage.style.display = 'block';
            }
        })

        // Opcional: Limpiar el formulario
        registerForm.reset();
    });
});
