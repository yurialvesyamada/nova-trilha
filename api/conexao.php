<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET, POST, DELETE, HEAD, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-type: application/json");

$servername = "localhost";
$username = "epiz_27734971";
$password = "novatrilha2021";
$dbname = "epiz_27734971_novatrilha";


$conn = new mysqli($servername, $username, $password, $dbname);
$conn->query("set names utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>


