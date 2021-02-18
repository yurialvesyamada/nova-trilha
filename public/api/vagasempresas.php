<?php require('./conexao.php');

$sql = "SELECT * FROM vagas where empregador = 'Animalias Pet Center'";
$result = $conn->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));
