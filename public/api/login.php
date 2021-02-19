<?php
include("./conexao.php");

if(empty($_POST['email']) || empty($_POST['senha'])  ){
 
  header("Refresh: 0;url=$build?erro=vazio");
  exit();
}

 
  $email = filter_input(INPUT_POST, 'email');
  $senha = filter_input(INPUT_POST, 'senha');
  $sql = "SELECT * FROM usuario  WHERE `email` = '{$email}' and `senha`= '{$senha}' limit 1"; 


  $result = $conn->query($sql); 

  if( $result ->num_rows > 0 ) {
 
  if ($result->num_rows > 0) {
    $name = "SELECT nome FROM usuario  WHERE `email` = '{$email}'limit 1"; 
    $result = $conn->query($name); 
   
    while($row = $result->fetch_assoc()) {
      
      $nome = $row['nome'];
    }
  } else {
    echo "0 results";
  }
    
    header("Refresh: 0;url=$build?nome=$nome");


  } else {
    
    header("Refresh: 0;url=$build?erro=senha");


  }
$conn->close();
?>