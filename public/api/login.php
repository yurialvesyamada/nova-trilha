<?php
include("./conexao.php");

if(empty($_POST['email']) || empty($_POST['senha'])  ){
 
  header("Refresh: 0;url=http://localhost:3000/login?erro=vazio");
  exit();
}


  $email = filter_input(INPUT_POST, 'email');
  $senha = filter_input(INPUT_POST, 'senha');
  $sql = "SELECT * FROM usuario  WHERE `email` = '{$email}' and `senha`= '{$senha}' limit 1"; 


  $result = $conn->query($sql); 

  if( $result ->num_rows > 0 ) {
   
    header("location:http://localhost:3000/vagas");

  } else {
    
    header("Refresh: 0;url=http://localhost:3000/login?erro=senha");


  }
$conn->close();
?>