<?php include("./conexao.php");


 if(empty($_POST['vaga']) || empty($_POST['empregador'])  ){
    header("Refresh: 0;url=$build?erro=vazio1");
    exit();
}
  

if (isset($_POST['cadastrar'])) {
    $vaga = $_POST['vaga'];
    $descricao = $_POST['descricao'];
    $empregador = $_POST['empregador'];
    $localizacao = $_POST['localizacao'];
    $salario = $_POST['salario'];
    
  
    $sql = "SELECT * FROM vagas  WHERE `vaga` = '{$vaga}'  limit 1"; 


    $result = $conn->query($sql); 
    
    if( $result ->num_rows > 0 ) {
      
       header("Refresh: 0;url=$build?erro=existe");
      
    } else{ 

        $sql = "insert into vagas (vaga,  descricao, empregador, localizacao, salario)
         values ('$vaga', '$descricao', '$empregador','$localizacao', '$salario')";
        header("Refresh: 0;url=$build");

    /* if ($conn->multi_query($sql) === TRUE) {
    echo "New records created successfully";
    } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    } 
  */
    $conn->close();
    }

}
?>

 