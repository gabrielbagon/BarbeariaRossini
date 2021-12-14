var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

const form = document.querySelector("#form");
form.addEventListener('submit', function(e) {
    e.preventDefault();
    return Enviar(e);
})

function Enviar() {


    var nome = document.getElementById("nomeid");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (nome.value && sobrenome.value && email.value && password.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}