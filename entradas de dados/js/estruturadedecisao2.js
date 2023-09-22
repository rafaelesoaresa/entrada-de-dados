function validarIdade() {
    let idade = document.getElementById("idadeInput").value;
    if ((idade > 16) && (idade < 18)) {
    document.write("Pode votar");
    } else if (idade >= 18 && idade < 70) {
    document.write("Voto Obrigatório");
    } else if (idade >= 70) {
    document.write("Voto não obrigatório");
    } else {
    document.write("Não pode votar");
    }
   }