<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "yuri";
$password = "898522";
$dbname = "nova-trilha";

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->query("set names utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM vagas";
$result = $conn->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));

$conn->close();