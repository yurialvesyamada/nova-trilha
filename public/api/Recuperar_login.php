<?php
include("./conexao.php");

if(empty($_POST['email']) ){
 
  header("Refresh: 0;url=$build?erro=vazio4");
  exit();
}


  $email = filter_input(INPUT_POST, 'email');
  $sql = "SELECT * FROM usuario  WHERE `email` = '{$email}'"; 
  $result = $conn->query($sql); 


  if( $result ->num_rows > 0 ) {
    header("Refresh: 0;url=$build?erro=email");  
    header("Refresh: 0;url=$build?erro=email");
  } else {
    header("Refresh: 0;url=$build?erro=errado");  
  }
$conn->close();
?>