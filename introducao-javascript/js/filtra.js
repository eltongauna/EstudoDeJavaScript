var campoFiltro = document.querySelector("#filtrar-tabela"); //faz um link entre a variavvel e o item no html

//adiciona um evento para escutar tudo que for digitado no html
campoFiltro.addEventListener("input", function(){
    console.log(this.value);//exibe no console tudo que está sendo digitado - não necessário
    var pacientes = document.querySelectorAll(".paciente");//cria uma variável com todas as classes pacientes para pesquisa

    if(this.value.length){//verifica se há valor. 
	    for (var i = 0; i < pacientes.length; i++) {
	        var paciente = pacientes[i];
	        var tdNome = paciente.querySelector(".info-nome");
	        var nome = tdNome.textContent;
	        var expressao = new RegExp(this.value, "i");//expressao regular compara os valores digitados com a lista de nomes

	        if (!expressao.test(nome)) {
	            paciente.classList.add("invisivel");
	        } else {
	            paciente.classList.remove("invisivel");
	        }
	    }
	}else{
		for (var i = 0; i < pacientes.length; i++) {
	        var paciente = pacientes[i];
			paciente.classList.remove("invisivel");
		};
	};
});