<?php
include("./conexao.php");

if (empty($_POST['email']) || empty($_POST['senha'])) {

    header("Refresh: 0;url=$build/Atualizar_cadastro?erro=vazio3");
    exit();
}

if (isset($_POST['confirmar'])) {
    $nome = filter_input(INPUT_POST, 'nome');
    $email = filter_input(INPUT_POST, 'email');
    $senha = filter_input(INPUT_POST, 'senha');
    $telefone = filter_input(INPUT_POST, 'telefone');
    $endereco = filter_input(INPUT_POST, 'endereco');
    $email_novo = filter_input(INPUT_POST, 'email_novo');

    $sql = "SELECT * FROM usuario  WHERE `email` = '{$email_novo}'  limit 1";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
    } else {

        $teste = "UPDATE usuario
 SET 
 `nome` = '$nome',
 `email` = '$email_novo', 
 `senha` = '$senha',
 `telefone` = '$telefone',
 `endereco` ='$endereco' 

 WHERE  `email` =   '$email' ";
        $atualizar = $conn->query($teste);
    }
    header("Refresh: 0;url=$build/login?erro=atualiza");
}

$conn->close();
