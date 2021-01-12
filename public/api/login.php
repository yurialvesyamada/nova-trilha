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
    //consultar se o usuário existe
    //  se o usuário existir testar a senha
    //      se senha estiver correta, retornar nome do usuário na página vagas
    //      se senha incorreta retornar erro na página de login
    //  se não exixtir retornar erro na página de login

}

echo json_encode($result->fetch_all(MYSQLI_ASSOC));

$conn->close();
