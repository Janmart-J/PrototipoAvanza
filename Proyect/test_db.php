<?php
include 'db.php'; // Incluye el archivo de configuración de conexión

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} else {
    echo "Conexión exitosa a la base de datos.";
}

// Cerrar la conexión
$conn->close();
?>
