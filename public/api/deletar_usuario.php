<?php
include("./conexao.php");

if(empty($_POST['email'])  ){
  
  header("Refresh: 0;url=$build/Deletar_usuario?erro=vazio1");
  exit();
}

if (isset($_POST['confirmar'])) {
  $email = filter_input(INPUT_POST, 'email');
  $sql = "DELETE FROM usuario WHERE `email` = '{$email}'";

if ($conn->query($sql) === TRUE) {
  header("Refresh: 0;url=$build/login?erro=deletar"); 
}
  
  $conn->close();
}
