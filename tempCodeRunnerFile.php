<?php
$servername = "localhost";
$database = "BestStory_db";
$username = "root";
$password = "";

// Создаем соединение

$conn = mysqli_connect($servername, $username, $password, $database);

// Проверяем соединение

if (!$conn) {

    die("Connection failed: " . mysqli_connect_error());

}
echo "Connected successfully";
mysqli_close($conn);