// Función para limpiar los campos de un formulario
function clearForm(formId) {
    var form = document.getElementById(formId);
    if (form) {
        form.reset();
    }
}

// Asignar la función para limpiar el formulario al abrir el modal
document.addEventListener('DOMContentLoaded', function () {
    var loginModal = document.getElementById('login-modal');
    var registerModal = document.getElementById('register-modal');

    if (loginModal) {
        loginModal.addEventListener('shown.bs.modal', function () {
            clearForm('login-form');
        });
    }

    if (registerModal) {
        registerModal.addEventListener('shown.bs.modal', function () {
            clearForm('register-form');
        });
    }
});
