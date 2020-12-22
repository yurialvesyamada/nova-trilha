<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nova-trilha";

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->query("set names utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
