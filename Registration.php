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

// Проверка, что пользователь нажал кнопку "Зарегистрироваться"
if (isset($_POST['submit'])) {
  // Получение данных из формы
  $login = $_POST['login'];
  $password = $_POST['password'];
  $email = $_POST['email'];

  // Проверка, что все поля заполнены
  if ($login && $password && $email) {
    // Проверка, что логин и электронная почта уникальны
    $sql = "SELECT * FROM users WHERE login = '$login' OR email = '$email'";
    $result = mysqli_query($mysqli, $sql);
    if (mysqli_num_rows($result) == 0) {
      // Проверка, что пароль безопасный
      if (preg_match("/[a-z]/", $password) && preg_match("/[A-Z]/", $password) && preg_match("/[0-9]/", $password) && strlen($password) >= 8) {
        // Хеширование пароля
        $password = password_hash($password, PASSWORD_DEFAULT);
        // Запись пользователя в базу данных
        $sql = "INSERT INTO users (login, password, email) VALUES ('$login', '$password', '$email')";
        $result = mysqli_query($mysqli, $sql);
        if ($result) {
          // Вывод сообщения об успешной регистрации
          echo "Вы успешно зарегистрировались!";
        } else {
          // Вывод сообщения об ошибке при записи в базу данных
          echo "Произошла ошибка при записи в базу данных: " . mysqli_error($mysqli);
        }
      } else {
        // Вывод сообщения о небезопасном пароле
        echo "Пароль должен содержать буквы в верхнем и нижнем регистре, цифры и быть не менее 8 символов!";
      }
    } else {
      // Вывод сообщения о неуникальном логине или электронной почте
      echo "Такой логин или электронная почта уже существуют!";
    }
  } else {
    // Вывод сообщения о незаполненных полях
    echo "Вы должны заполнить все поля!";
  }
}

?>
