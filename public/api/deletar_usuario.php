<?php
include("./conexao.php");

if(empty($_POST['email'])  ){
  
  header("Refresh: 0;url=http://localhost:3000/Deletar_usuario?erro=vazio1");
  exit();
}

if (isset($_POST['confirmar'])) {
  $email = filter_input(INPUT_POST, 'email');
  $sql = "DELETE FROM usuario WHERE `email` = '{$email}'";

if ($conn->query($sql) === TRUE) {
  header("Refresh: 0;url=http://localhost:3000/login?erro=deletar"); 
}
  
  $conn->close();
}
?>