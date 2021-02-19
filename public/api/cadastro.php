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
    $escolaridade = filter_input(INPUT_POST, 'escolaridade'); 
    $funcao = filter_input(INPUT_POST, 'funcao');  
    $telefone = filter_input(INPUT_POST, 'telefone');
    $endereco = filter_input(INPUT_POST, 'endereco'); 
    $cidade = filter_input(INPUT_POST, 'cidade'); 

  

    $sql = "SELECT * FROM usuario  WHERE `email` = '{$email}'  limit 1"; 
    
    
    $result = $conn->query($sql); 
    
    if( $result ->num_rows > 0 ) {
      
       // header("Refresh: 0;url=http://localhost:3000/cadastro?erro=existe");
      
   
        
     /* 
        $sql = "INSERT INTO `nova-trilha`.`usuario` (`id_user`, `nome`, `email`, `senha`, `escolaridade`,  `funcao`,`id_telefone`,`id_endereco`,`id_cidade`)
        SELECT  ``.`cidade` FROM `tb_telefone`,`tb_endereco`,`tb_cidade`
        where  `tb_telefone`.`id_telefone` & `tb_endereco`.`id_endereco` & `tb_cidade`.`id_cidade` = `nova-trilha`.`usuario`.`id_user` " ;  */
       // $idGerado = $user_id,;
      //  $idGerado = mysqli_insert_id($sql);
      //, id_telefone, id_endereco,id_cidade
            //insert into usuario (nome,  email, senha,escolaridade,funcao) values ('maria', 'maria@teste', '2222','tecnico', 'moto');
      
      
      
      $sql= " insert into usuario (nome,  email, senha,escolaridade,funcao) values ('$nome', '$email', '$senha','$escolaridade', '$funcao')";
       // mysql_query($sql);
       //$user_id = LAST_INSERT_ID( $sql);
      $user_id = mysqli_insert_id( $sql);
      // if(!empty($user_id) ){

      $sql= "INSERT INTO profiles (userid, bio, homepage) VALUES($user_id,'Hello world!', 'http://www.stackoverflow.com')";
      $sql = "insert into tb_telefone (id_telefone, telefone) values ('$user_id','$telefone')";
            
      $sql =" insert into tb_endereco (id_endereco, endereco) values ('$user_id','$endereco')";
            
      $sql = " insert into tb_cidade (id_cidade, cidade) values ('$user_id','$cidade')";
              
       // mysql_query($sql);
      
    
      /* 
        $sql = "BEGIN; 
                
        insert into usuario (nome,  email, senha,escolaridade,funcao) values ('$nome', '$email', '$senha','$escolaridade', '$funcao');
        insert into tb_telefone ( telefone) values ('$telefone');
            
         insert into tb_endereco ( endereco) values ('$endereco');
            
        insert into tb_cidade ( cidade) values ('$cidade');
                           
        COMMIT";
         */
        $sql1 = "insert into usuario (nome,  email, senha,escolaridade,funcao) values ('$nome', '$email', '$senha','$escolaridade', '$funcao')";
        $sql2 = " insert into tb_telefone ( telefone) values ('$telefone')";
        $sql3 = "  insert into tb_endereco ( endereco) values ('$endereco')";
        $sql4 = "     insert into tb_cidade ( cidade) values ('$cidade')";
       // $sql = "insert into usuario (nome,  email, senha, telefone, endereco) values ('$nome', '$email', '$senha','$telefone', '$endereco')";
        $insert = $conn->query($sql1);
        $insert2 = $conn->query($sql2);
        $insert3 = $conn->query($sql3);
        $insert4 = $conn->query($sql4);
        $conn->close();
        header("Refresh: 0;url=http://localhost:3000/vagas?erro=cadastro&?nome=$nome");
    }
};


