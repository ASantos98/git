var password = document.getElementById('password'),
    repeatPassword = document.getElementById('repeatPassword');

function validarSenha () {
    if (password.value != repeatPassword.value){
        repeatPassword.setCustomValidity('Senhas diferentes!');
    }else{
        repeatPassword.setCustomValidity('');
    }
} 

password.onchange = validarSenha;
repeatPassword.onkeyup = validarSenha

