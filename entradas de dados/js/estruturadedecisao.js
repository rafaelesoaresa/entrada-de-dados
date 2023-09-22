function validarIdade() {
    let idade = document.getElementById("idadeInput").value;
    if (idade >= 18) {
     document.write("Deve votar");
    }
    else {
        document.write("Não vota");
       }
    }