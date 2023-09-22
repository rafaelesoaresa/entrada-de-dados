function enviarFormulario(event) {
    event.preventDefault(); //suspende comport. padrão de event
    var nome = document.getElementById("nomeUsuario").value;
    document.write("Nome: " + nome);
    }