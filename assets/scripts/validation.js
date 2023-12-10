$(document).ready(function(){
    $('.autsubmit-btn').click(function(e){
        e.preventDefault();

        $('input').removeClass('form_input');
        let email = $('input[name="email"]').val();
        let password = $('input[name="password"]').val();
    
        $.ajax({
            url: 'authorization.php',
            type: 'post',
            datatype: 'json', 
            data: {
                email: email,
                password: password
            },
            success (data){
                if (data.status){
                    document.location.href = '/profile.php';
                    
                }
                else{

                    if (data.type === 1) {
                        data.fields.forEach(function(field){
                            $(`input[name="${field}"]`).addClass('form_input');
                        });
                    }

                    $('.error-msg').removeClass('none').text(data.message);
                    $('.password').val('');
                }
            }
        });
    });
    

    $('.regsubmit-btn').click(function(e){
        e.preventDefault();
        $(".tiny_alert_text").css("display", "none");
        $('input').removeClass('form_input');
        let email = $('input[name="email"]').val();
        let login = $('input[name="login"]').val();
        let repassword = $('input[name="repassword"]').val();
        let password = $('input[name="password"]').val();
    
        $.ajax({
            url: 'Registration.php',
            type: 'post',
            datatype: 'json', 
            data: {
                login: login,
                email: email,
                password: password,
                repassword: repassword
            },
            success (data){

                if (data.status){
                    document.location.href = '/authorizationForm.html';
                }
                else{

                    if (data.type === 1) {
                        data.fields.forEach(function(field){
                            $(`input[name="${field}"]`).addClass('form_input');
                            if(field == "email") $("#email_tip").css("display", "block");
                            if(field == "login") $("#login_tip").css("display", "block");
                            if(field == "password") $("#password_tip").css("display", "block");
                            if(field == "repassword") $("#repassword_tip").css("display", "block");
                            $('.error-msg').removeClass('none').text(data.message);
                        });
                    }
                    if(data.type === 2){
                        $('.error-msg').removeClass('none').text(data.message);
                    }
                    if(data.type === 3){
                        $('.error-msg').removeClass('none').text(data.message);
                    }
                    $('.password').val('');
                }
            }
        });
    });
    
});
