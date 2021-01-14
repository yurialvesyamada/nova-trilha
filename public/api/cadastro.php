<?php
include("./conexao.php");


$nome =    $_POST['nome'];
$email =    $_POST['email'];
$senha =   $_POST['senha'];
$telefone =    $_POST['telefone'];
$endereco =    $_POST['endereco'];
$sql = "select * from usuario where email =  '$email'";
$result = $conn->query($sql);
$total_registro = mysqli_num_rows($result);

if ($total_registro > 0) {
    echo ' Esse e-mail já está cadastrado!';
   
} else {

    $sql = "insert into usuario (nome,  email, senha, telefone, endereco) values ('$nome', '$email', '$senha','$telefone', '$endereco')";
    $insert = $conn->query($sql);
    echo '<div class="alert alert-success" role="alert">
    Cadastro realizado com sucesso!!
  </div>';
   // header("Refresh: 5;url=vagas.php");
}
echo json_encode($result->fetch_all(MYSQLI_ASSOC));

$conn->close();
?>