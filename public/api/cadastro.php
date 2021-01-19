<?php
include("./conexao.php");

if(empty($_POST['email']) || empty($_POST['senha'])  ){
    header("Refresh: 0;url=http://localhost:3000/cadastro?erro=vazio1");
    exit();
}

if (isset($_POST['cadastrar'])) {

    $nome = filter_input(INPUT_POST, 'nome');
    $email = filter_input(INPUT_POST, 'email');
    $senha = filter_input(INPUT_POST, 'senha');
    $telefone = filter_input(INPUT_POST, 'telefone');
    $endereco = filter_input(INPUT_POST, 'endereco'); 
    

    $sql = "SELECT * FROM usuario  WHERE `email` = '{$email}'  limit 1"; 
    
    
    $result = $conn->query($sql); 
    
    if( $result ->num_rows > 0 ) {
      
        header("Refresh: 0;url=http://localhost:3000/cadastro?erro=existe");
      
    } else{
      
        $sql = "insert into usuario (nome,  email, senha, telefone, endereco) values ('$nome', '$email', '$senha','$telefone', '$endereco')";
        $insert = $conn->query($sql);
        $conn->close();
        header("Refresh: 0;url=http://localhost:3000/vagas?erro=cadastro&?nome=$nome");
    }
}


?>