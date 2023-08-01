<?php

$con = new mysqli("0.0.0.0", "root", "root", "FORMULARIO_WEB");

$Nome = $_POST['Nome'];
$Usuario = $_POST['Usuario'];
$email = $_POST['email'];
$Telefone = $_POST['Telefone'];
$Genero = $_POST['Genero'];
$Aniversario = $_POST['Aniversario'];
$Regiao = $_POST['Regiao'];
$Password = $_POST['Password'];
$sql = "INSERT INTO DADOSdoUSUARIO(Nome,Usuario,email,Telefone, Genero,Aniversario,Regiao,Password) VALUES('$Nome', '$Usuario', '$email', '$Telefone',  '$Genero', '$Aniversario', '$Regiao', '$Password')";

$result = mysqli_query($con, $sql);

if($result == "true"){
  echo "<center><h2>Os seus dados foram enviados com sucesso! </h2></center>";
}
else{
  echo "<center><h2>Ouh Não! Os seus dados não foram enviados. </h2></center>";
}

?>
