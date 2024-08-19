//Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const verMasBtn = document.getElementById('ver-mas-btn');
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    //Modal webinar
    // Abrir el modal al hacer clic en el botón "Ver más"
    verMasBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    // Cerrar el modal al hacer clic en el botón de cerrar (×)
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar el modal si el usuario hace clic fuera de el
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
