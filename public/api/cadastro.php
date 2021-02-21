<?php include("./conexao.php");


if(empty($_POST['email']) || empty($_POST['senha'])  ){
    header("Refresh: 0;url=$build?erro=vazio1");
    exit();
}
 


if (isset($_POST['cadastrar'])) {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $telefone = $_POST['telefone'];
    $nome_cliente = $_POST['endereco'];
    $escolaridade = $_POST['escolaridade'];
    $funcao = $_POST['funcao'];

  
    $sql = "SELECT * FROM usuario  WHERE `email` = '{$email}'  limit 1"; 


    $result = $conn->query($sql); 
    
    if( $result ->num_rows > 0 ) {
      
        header("Refresh: 0;url=$build?erro=existe");
      
    } else{ 

        $sql = "insert into usuario (nome,  email, senha, telefone, endereco,escolaridade,funcao)
         values ('$nome', '$email', '$senha','$telefone', '$endereco','$escolaridade','$funcao')";
        header("Refresh: 0;url=$build");

    if ($conn->multi_query($sql) === TRUE) {
    echo "New records created successfully";
    } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
    }

}
?>

 