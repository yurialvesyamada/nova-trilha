<?php require('./conexao.php');

$sql = "SELECT vaga,  descricao, empregador, localizacao, salario FROM vagas";
$result = $conn->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));
   