<?php include("./conexao.php");


if (empty($_POST['email']) || empty($_POST['senha'])) {
    header("Refresh: 0;url=$build?erro=vazio1");
    exit();
}



if (isset($_POST['cadastrar'])) {
    $nome = $_POST['nome'];
    $cnpj = $_POST['cnpj'];
    $Ramo_atividade = $_POST['Ramo_atividade'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $telefone = $_POST['telefone'];
    $endereco = $_POST['endereco'];


    $sql = "SELECT * FROM empresa  WHERE `email` = '{$email}'  limit 1";


    $result = $conn->query($sql);

    if ($result->num_rows > 0) {

        header("Refresh: 0;url=$build?erro=existe");
    } else {



        $sql = "insert into empresa (nome, cnpj, Ramo_atividade, email, senha, telefone, endereco)
        values ('$nome', '$cnpj', '$Ramo_atividade',  '$email', '$senha', '$telefone', '$endereco')";

        header("Refresh: 0;url=$build");

        if ($conn->multi_query($sql) === TRUE) {
            echo "New records created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();
    }
}
