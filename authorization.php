<?php
// запуск сессии
session_start();

if($_SESSION['user']){
  header('Location: main.html');
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

// Получение данных из формы m
$email = $_POST['email'];
$password = $_POST['password'];

$error_fields = [];

if($password === ''){
  $error_fields[] = 'password';
}
if($email === ''){
  $error_fields[] = 'email';
}


if(!empty($error_fields)){
  $response = [
  "status" => false,
  "message" => "Проверьте правилность ввода",
  "type" => 1,
  "fields" => $error_fields
  ];
  echo json_encode($response);
  
  die();
}

$password = md5($password);

// Валидация данных
if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($password)) {
  // Поиск пользователя в базе данных
  $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {

    $user = mysqli_fetch_assoc($result);
    // Пользователь найден, установка сессии
    $_SESSION['user'] = [
      "id" => $user['id'],
      "login" => $user['login'],
      "email" => $user['email']
    ];


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
   echo json_encode($response);
  }
} 

mysqli_close($conn);  
?>