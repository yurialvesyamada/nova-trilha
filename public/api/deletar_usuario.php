<?php
include("./conexao.php");

if(empty($_POST['email'])  ){
  
  header("Refresh: 0;url=$build?erro=vazio1");
  exit();
}

if (isset($_POST['confirmar'])) {
  $email = filter_input(INPUT_POST, 'email');
  $sql = "DELETE FROM usuario WHERE `email` = '{$email}'";

if ($conn->query($sql) === TRUE) {
  header("Refresh: 0;url=$build?erro=deletar"); 
}
  
  $conn->close();
}
