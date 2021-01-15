<?php
include("./conexao.php");

if(empty($_POST['email']) || empty($_POST['senha'])  ){
  echo 'preencha os campos !';
  header("Refresh: 1;url=http://localhost:3000/login");
  exit();
}


  $email = filter_input(INPUT_POST, 'email');
  $senha = filter_input(INPUT_POST, 'senha');
  $sql = "SELECT * FROM usuario  WHERE `email` = '{$email}' and `senha`= '{$senha}' limit 1"; 


  $result = $conn->query($sql); 

  if( $result ->num_rows > 0 ) {
  
    header("location:http://localhost:3000/vagas");

  } else {
    echo 'E-mail ou senha incorreta !';

  }
$conn->close();
?>