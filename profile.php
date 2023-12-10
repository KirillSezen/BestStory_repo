<?php
session_start();

if(!$_SESSION['user']){
  header('Location: main.html');
}

?>

<html>
<head>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .profile {
      display: flex;
      align-items: center;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 20px;
    }

    .profile-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
    }

    .profile-info {
      flex: 1;
      margin-left: 20px;
    }

    .profile-name {
      font-size: 24px;
      font-weight: bold;
      color: #333333;
      margin-bottom: 10px;
    }

    .profile-bio {
      font-size: 18px;
      color: #666666;
      margin-bottom: 10px;
    }

    .profile-social {
      display: flex;
      gap: 10px;
    }

    .profile-social a {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #eeeeee;
      text-align: center;
      line-height: 40px;
      text-decoration: none;
      color: #333333;
    }

    .profile-social a:hover {
      background-color: #dddddd;
    }
  </style>
      <link rel="stylesheet" href="/assets/css/formStyle.css">
      <title>Профиль</title>
</head>
<body>
  <div class="container">
    <div class="profile">
      <div class="profile-info">
        <h1 class="profile-name">Логин: <?= $_SESSION['user']['login'] ?></h1>
        <h3 >Почта: <?= $_SESSION['user']['email'] ?></h3>
        <p class="profile-bio">Привет, я веб-разработчик из Беларуси. Я люблю создавать красивые и функциональные сайты с HTML и CSS.</p>
      </div>
    </div>
    <a class="backbtn" href="main.html">Вернутся на главную</a>
    <a href="logout.php" class="backbtn">Выйти</a>
  </div>
</body>
</html>
