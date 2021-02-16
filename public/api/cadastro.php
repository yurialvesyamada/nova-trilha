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
    $cidade = filter_input(INPUT_POST, 'cidade'); 
    $endereco = filter_input(INPUT_POST, 'endereco'); 
    $escolaridade = filter_input(INPUT_POST, 'escolaridade'); 
    

    $sql = "SELECT * FROM usuario  WHERE `email` = '{$email}'  limit 1"; 
    
    
    $result = $conn->query($sql); 
    
    if( $result ->num_rows > 0 ) {
      
        header("Refresh: 0;url=http://localhost:3000/cadastro?erro=existe");
      
    } else{
        

        $sql = "INSERT INTO `nova-trilha`.`usuario` (`id_user`, `nome`, `email`, `senha`, `escolaridade`,  `funcao`,`id_telefone`,`id_endereco`,`id_cidade`)
 SELECT `tb_telefone`.`telefone`, `tb_endereco`.`endereco`, `tb_cidade`.`cidade` FROM `tb_telefone`,`tb_endereco`,`tb_cidade`
 where  `tb_telefone`.`id_telefone` & `tb_endereco`.`id_endereco` & `tb_cidade`.`id_cidade` = `nova-trilha`.`usuario`.`id_user` " ; 


       // $sql = "insert into usuario (nome,  email, senha, telefone, endereco) values ('$nome', '$email', '$senha','$telefone', '$endereco')";
        $insert = $conn->query($sql);
        $conn->close();
        header("Refresh: 0;url=http://localhost:3000/vagas?erro=cadastro&?nome=$nome");
    }
}
