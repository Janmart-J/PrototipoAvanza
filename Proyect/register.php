<?php
include 'db.php'; // Incluir el archivo de conexión

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $username = $_POST['usern'];
    $password = $_POST['pass'];


    // Encriptar la contraseña
    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    // Preparar y ejecutar la consulta SQL
    $sql = "INSERT INTO usuarios (fullname, email, username, password_hash) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $fullname, $email, $username, $password_hash);

    if ($stmt->execute()) {
        echo "Usuario registrado exitosamente";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
