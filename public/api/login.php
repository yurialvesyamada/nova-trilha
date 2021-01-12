<?php
include("./conexao.php");

//$sql = "SELECT senha,email FROM usuario";
//$result = $conn->query($sql);
if (isset($_POST['entrar'])) {

    $senha =   $_POST['senha'];
    $email =    $_POST['email'];
    $sql = "select * from usuario where email =  '$email' and senha = '$senha'";
    $result = $conn->query($sql);
    $total_registro = mysqli_num_rows($result);
    if ($total_registro > 0) {
        header("location:Vagas.js");
    } else {
        echo '<div class="alert alert-danger" role="alert">
        Login ou senha incorreta! </div>';
    }
}

echo json_encode($result->fetch_all(MYSQLI_ASSOC));

$conn->close();
