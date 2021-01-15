<?php
include("./conexao.php");

if(empty($_POST['email']) || empty($_POST['senha'])  ){
    echo 'preencha os campos !';
    header("Refresh: 1;url=http://localhost:3000/Atualizar_cadastro");
    exit();
}



$sql = "UPDATE MyGuests SET lastname='Doe' WHERE id=2";

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();
?>