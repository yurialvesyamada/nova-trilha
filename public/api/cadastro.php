<?php
include("./conexao.php");

if(empty($_POST['email']) || empty($_POST['senha'])  ){
    echo 'preencha os campos !';
    header("Refresh: 1;url=http://localhost:3000/cadastro");
    exit();
}

if (isset($_POST['cadastrar'])) {

    $nome = filter_input(INPUT_POST, 'nome');
    $email = filter_input(INPUT_POST, 'email');
    $senha = filter_input(INPUT_POST, 'senha');
    $telefone = filter_input(INPUT_POST, 'telefone');
    $endereco = filter_input(INPUT_POST, 'endereco'); 
    
    //$senha = filter_input(INPUT_POST, 'senha');
    $sql = "SELECT * FROM usuario  WHERE `email` = '{$email}'  limit 1"; 
    
    
    $result = $conn->query($sql); 
    
    if( $result ->num_rows > 0 ) {
        echo 'E-mail já cadastrado, tente outro !';
      
    } else{

        $sql = "insert into usuario (nome,  email, senha, telefone, endereco) values ('$nome', '$email', '$senha','$telefone', '$endereco')";
        $insert = $conn->query($sql);
        echo 'cadastro realizado com sucesso!';  
      header("Refresh: 2;url=http://localhost:3000/vagas");
    }
}


$conn->close();
?>