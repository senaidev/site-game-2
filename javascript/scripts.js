function menu() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Fecha a lista suspensa se o usuário clicar fora dela  
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        let myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

function enviar() {
    let nome = document.getElementById("nomeid");
    if (nome.value != "") {
        alert('Obrigado Sr(a). ' + nome.value + ' a sua opnião foi encaminhada com sucesso,      Obrigado');
    } else {
        alert("ERRO! O nome deve ser preenchido!");
    }
}

function entrar() {
    let email = document.getElementById("emailid");
    let password = document.getElementById("senhaid");
    if (email.value + password.value != "") {
        alert('Aguarde...');
    } else {
        alert("ERRO! O nome deve ser preenchido!");
    }
}