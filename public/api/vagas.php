<?php require('./conexao.php'); 

$sql = "SELECT * FROM vagas";
$result = $conn->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));
