<?php
include("./conexao.php");



$nome = filter_input(INPUT_POST, 'nome');
$email = filter_input(INPUT_POST, 'email');
$senha = filter_input(INPUT_POST, 'senha');
$telefone = filter_input(INPUT_POST, 'telefone');
$endereco = filter_input(INPUT_POST, 'endereco'); 

//$senha = filter_input(INPUT_POST, 'senha');
$sql = "SELECT * FROM usuario  WHERE `email` = '{$email}'  limit 1"; 


$result = $conn->query($sql); 

if( $result ->num_rows > 0 ) {
    echo 'E-mail já cadastrado, tente outro !';
  
} else {

 $insert =  "INSERT INTO usuario (id,nome, email, senha, telefone, endereco)
VALUES ('{$nome}', '{$email}', '{$senha}','{$telefone}', '{$endereco}')";   

$consulta = $conn->query($insert);
echo 'cadastrado realizado com sucesso!';  
header("Refresh: 2;url=http://localhost:3000/vagas");

}  
//  echo json_encode($result->fetch_all(MYSQLI_ASSOC));

$conn->close();
?>