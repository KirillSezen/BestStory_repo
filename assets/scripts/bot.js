// Подключаем модуль http и socket.io
var http = require("http");
var io = require("socket.io");

// Создаем http-сервер
var server = http.createServer(function(req, res) {
  res.end("Hello, world!");
});

// Создаем socket.io-сервер, привязанный к http-серверу
var io = io(server);

// Обрабатываем подключение клиентов
io.on("connection", function(socket) {
  console.log("A client connected");

  // Обрабатываем получение сообщений от клиентов
  socket.on("message", function(message) {
    console.log("A client sent a message: " + message);

    // Распознаем проблемные места в тексте проблемы с помощью регулярных выражений
    var problem = null;
    if (/login|авторизация|sign in/i.test(message)) {
      problem = "login";
    } else if (/registration|регистрация/i.test(message)) {
      problem = "registration";
    } else if (/create|создание|запись/i.test(message)) {
      problem = "create";
    }

    // Отвечаем соответственно опознанному случаю, предлагая возможные решения
    var reply = null;
    if (problem == "login") {
      reply = "Для решения проблем с авторизацией, пожалуйста, проверьте, что вы ввели правильный логин и пароль, и что у вас есть активный аккаунт на нашем сайте.";
    } else if (problem == "registration") {
      reply = "Для решения проблем с регистрацией, пожалуйста, заполните все обязательные поля формы, и подтвердите свой адрес электронной почты, перейдя по ссылке, которую мы вам отправили.";
    } else if (problem == "create") {
      reply = "Для решения проблем с созданием записи, пожалуйста, убедитесь, что у вас есть достаточно места на диске, и что вы имеете права на запись в выбранную папку.";
    } else {
      reply = "Извините, я не смог распознать вашу проблему. Пожалуйста, уточните ваш вопрос или обратитесь к нашему специалисту по телефону или электронной почте.";
    }

    // Отправляем ответ на клиент
    socket.emit("message", reply);
  });
});

// Запускаем сервер на порту 3000
server.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
// Подключаем модуль http и socket.io
var http = require("http");
var io = require("socket.io");

// Создаем http-сервер
var server = http.createServer(function(req, res) {
  res.end("Hello, world!");
});

// Создаем socket.io-сервер, привязанный к http-серверу
var io = io(server);

// Обрабатываем подключение клиентов
io.on("connection", function(socket) {
  console.log("A client connected");

  // Обрабатываем получение сообщений от клиентов
  socket.on("message", function(message) {
    console.log("A client sent a message: " + message);

    // Распознаем проблемные места в тексте проблемы с помощью регулярных выражений
    var problem = null;
    if (/login|авторизация|sign in/i.test(message)) {
      problem = "login";
    } else if (/registration|регистрация/i.test(message)) {
      problem = "registration";
    } else if (/create|создание|запись/i.test(message)) {
      problem = "create";
    }

    // Отвечаем соответственно опознанному случаю, предлагая возможные решения
    var reply = null;
    if (problem == "login") {
      reply = "Для решения проблем с авторизацией, пожалуйста, проверьте, что вы ввели правильный логин и пароль, и что у вас есть активный аккаунт на нашем сайте.";
    } else if (problem == "registration") {
      reply = "Для решения проблем с регистрацией, пожалуйста, заполните все обязательные поля формы, и подтвердите свой адрес электронной почты, перейдя по ссылке, которую мы вам отправили.";
    } else if (problem == "create") {
      reply = "Для решения проблем с созданием записи, пожалуйста, убедитесь, что у вас есть достаточно места на диске, и что вы имеете права на запись в выбранную папку.";
    } else {
      reply = "Извините, я не смог распознать вашу проблему. Пожалуйста, уточните ваш вопрос или обратитесь к нашему специалисту по телефону или электронной почте.";
    }

    // Отправляем ответ на клиент
    socket.emit("message", reply);
  });
});

// Запускаем сервер на порту 3000
server.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
