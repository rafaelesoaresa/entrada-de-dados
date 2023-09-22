function exibirDisciplinaSelecionada() {
    let selecaoDeDisciplinas = document.getElementById("selecionaDisciplina");
    let i = selecaoDeDisciplinas.selectedIndex;
    let disciplinaSelecionada = selecaoDeDisciplinas.options[i].value;
    document.write("Disciplina selecionada: " + disciplinaSelecionada);
   }
   