
function submitFormForReqistration() {
    var email = document.getElementById("email").value;
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;

    var valid = true;
    
    if (email.length < 10 || email.length > 20) {
        // email длина не менее 10 символов и не более 20
        document.getElementById("email").classList.add("invalid");
        document.getElementById("email").style.color = "brown";
        document.getElementById("email_tip").style.display = "block";
        valid = false;
    } else {
        document.getElementById("email").classList.remove("invalid");
        document.getElementById("email").style.color = "black";
        document.getElementById("email_tip").style.display = "none";
    }
    if (login.length < 5) {
        // логин не менее 5 символов
        document.getElementById("login").classList.add("invalid");
        document.getElementById("login").style.color = "brown";
        document.getElementById("login_tip").style.display = "block";
        valid = false;
    } else {
        document.getElementById("login").classList.remove("invalid");
        document.getElementById("login").style.color = "black";
        document.getElementById("login_tip").style.display = "none";
    }
    if (password.length < 10) {
        // длина пароля больше 10
        document.getElementById("password").classList.add("invalid");
        document.getElementById("password").style.color = "brown";
        document.getElementById("password_tip").style.display = "block";
        valid = false;
    } else {
        document.getElementById("password").classList.remove("invalid");
        document.getElementById("password").style.color = "black";
        document.getElementById("password_tip").style.display = "none";
    }
    if (repassword != password) {
        // пароли не совпадают
        document.getElementById("repassword").classList.add("invalid");
        document.getElementById("repassword").style.color = "brown";
        document.getElementById("repassword_tip").style.display = "block";
        valid = false;
    } else {
        document.getElementById("repassword").classList.remove("invalid");
        document.getElementById("repassword").style.color = "black";
        document.getElementById("repassword_tip").style.display = "none";
    }
    if (valid) {
        alert("Добро пожаловать, " + login + "! Вы успешно зарегистрированы на нашем сайте.");
        document.location.href = "/main.html";
    } else {
        alert("Пожалуйста, введите корректные данные.");
    }
}


function submitFormForAuthorization() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    var valid = true;
    if (login.length < 5) {
        // логин не менее 5 символов
        document.getElementById("login").classList.add("invalid");
        document.getElementById("login").style.color = "brown";
        document.getElementById("login_tip").style.display = "block";
        valid = false;
    } else {
        document.getElementById("login").classList.remove("invalid");
        document.getElementById("login").style.color = "black";
        document.getElementById("login_tip").style.display = "none";
    }
    if (password.length < 10) {
        // длина пароля больше 10
        document.getElementById("password").classList.add("invalid");
        document.getElementById("password").style.color = "brown";
        document.getElementById("password_tip").style.display = "block";
        valid = false;
    } else {
        document.getElementById("password").classList.remove("invalid");
        document.getElementById("password").style.color = "black";
        document.getElementById("password_tip").style.display = "none";
    }
    if (valid) {
        alert("Добро пожаловать, " + login + "! Вы успешно вошли на сайт.");
        document.location.href = "/main.html";
    } else {
        alert("Пожалуйста, введите корректные данные.");
    }
}
