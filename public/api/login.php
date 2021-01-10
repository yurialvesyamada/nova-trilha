<?php
include("./conexao.php");

$sql = "SELECT * FROM usuario";
$result = $conn->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));

$conn->close();
