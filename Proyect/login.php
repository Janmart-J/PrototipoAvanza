<?php
include 'db.php'; // Incluir el archivo de conexión

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $username = $_POST['usern'];
    $password = $_POST['pass'];

    // Preparar y ejecutar la consulta SQL
    $sql = "SELECT password_hash FROM usuarios WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($password_hash);
    $stmt->fetch();
    $stmt->close();

    // Verificar la contraseña
    if (password_verify($password, $password_hash)) {
        echo "Inicio de sesión exitoso";
        // Puedes iniciar sesión y redirigir al usuario aquí
    } else {
        echo "Usuario o contraseña incorrectos";
    }

    $conn->close();
}
?>
