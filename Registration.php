<?php

if($_SESSION['user']){
  header('Location: profile.php');
}
// Подключение к базе данных
$servername = "127.0.0.1";
$database = "BestStory_bd";
$username = "root";
$password = "root";

// Создаем соединение
$conn = mysqli_connect($servername, $username, $password, $database);

// Проверяем соединение
if (!$conn) {

    die("Connection failed: " . mysqli_connect_error());

}

// Получение данных из формы
$login = $_POST['login'];
$password = $_POST['password'];
$email = $_POST['email'];
$repassword = $_POST['repassword'];

$check_email = mysqli_query($conn, "SELECT * FROM `users` WHERE `email` = '$email'");
if(mysqli_num_rows($check_email) > 0) {
  $response = [
    "status" => false,
    "type" => 2,
    "message" => "Пользователь с такой почтой уже существует",
    "fields" => ['email']
  ];
  header("Content-Type: application/json");
  echo json_encode($response);
  die();
}

$check_login = mysqli_query($conn, "SELECT * FROM `users` WHERE `login` = '$login'");
if(mysqli_num_rows($check_login) > 0) {
  $response = [
    "status" => false,
    "type" => 3,
    "message" => "Пользователь с таким логином уже существует",
    "fields" => ['login']
  ];
  header("Content-Type: application/json");
  echo json_encode($response);
  die();
}
$error_fields = [];

if($password === '' || !preg_match("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/", $password)){
  $error_fields[] = 'password';
}
if($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)){
  $error_fields[] = 'email';
}
if($login === '' || !preg_match("/^[a-zA-Z0-9]+$/", $login) || strlen($login) < 5){
  $error_fields[] = 'login';
}
if($repassword === '' || $repassword!=$password){
  $error_fields[] = 'repassword';
}


if(!empty($error_fields)){
  $response = [
  "status" => false,
  "message" => "Проверьте правильность ввода",
  "type" => 1,
  "fields" => $error_fields
  ];
  header("Content-Type: application/json");
  echo json_encode($response);
  
  die();
}

$password = md5($password);


  
// Формируем SQL-запрос
$sql = "INSERT INTO users (login, email, password) VALUES ('" . mysqli_real_escape_string($conn, $login) . "', '" . mysqli_real_escape_string($conn, $email) . "', '" . mysqli_real_escape_string($conn, $password) . "')";

// Выполняем SQL-запрос
if (mysqli_query($conn, $sql)) {

  $response = [
    "status" => true
  ];
  header("Content-Type: application/json");
  echo json_encode($response);
} else {
  $response = [
    "status" => false,
    "message" => "Неверный email или пароль"
  ];
  header("Content-Type: application/json");
  // Если запрос неуспешен, выводим сообщение об ошибке
  echo json_encode($response);
}

// Закрываем соединение
mysqli_close($conn);  
?>