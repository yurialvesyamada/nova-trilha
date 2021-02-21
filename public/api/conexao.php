<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, HEAD, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-type: application/json");


$servername = "localhost";
$username = "admin";
$password = "1234";
$dbname = "nova-trilha";

/* $servername = "sql202.epizy.com";
$username = "epiz_27734971";
$password = "I7TIi8t187BLk";
$dbname = "epiz_27734971_novatrilha"; */

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->query("set names utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

/* $build = "http://novatrilha.infinityfreeapp.com"; */

 
 $build = "http://localhost:3000"; 
