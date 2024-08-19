<?php
include 'db.php'; // Incluir el archivo de conexión

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $nombre = $_POST['course-name'];
    $curso_id = $_POST['course-id'];
    $opcion = $_POST['option'];

    // Preparar y ejecutar la consulta SQL
    $sql = "INSERT INTO cursos (nombre, curso_id, opcion) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nombre, $curso_id, $opcion);

    if ($stmt->execute()) {
        echo "Curso registrado exitosamente";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
