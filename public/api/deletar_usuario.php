<?php
include("./conexao.php");

if(empty($_POST['email'])  ){
  echo 'preencha os campos !';
  header("Refresh: 1;url=http://localhost:3000/Deletar_usuario");
  exit();
}

if (isset($_POST['confirmar'])) {

  $email = filter_input(INPUT_POST, 'email');
  $sql = "DELETE FROM usuario WHERE `email` = '{$email}'";
  
  if ($conn->query($sql) === TRUE) {
    echo "Usuário deletado com sucesso !";
    header("Refresh: 1;url=http://localhost:3000/");
  } else {
    echo "Error : " . $conn->error;
  }
  
  $conn->close();
}
?>