var adicionarPaciente = document.querySelector("#adicionar-paciente");
adicionarPaciente.addEventListener("click", function(event){
	event.preventDefault();
	
	var form = document.querySelector("#form-adiciona");

	//extrai dados do formulário para objeto
	var paciente = obterDadosForm(form);

	var erros = validaPaciente(paciente);

	if(erros.length > 0){
		exibeMensagemErro(erros);
		return;
	}

	document.querySelector("#mensagens-erro").innerHTML = "";

	form.reset();
});

//função que efetivamente chama outras funções que monta os pacientes na tabela
function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

}

function exibeMensagemErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

//converte os dados do paciente em um objeto 
function obterDadosForm(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

//monta a tabela de pacientes
function montaTr(paciente){
	var tr = document.createElement("tr");
	tr.classList.add("paciente");
	
	tr.appendChild(montaTd(paciente.nome, "info-nome"));
	tr.appendChild(montaTd(paciente.peso, "info-peso"));
	tr.appendChild(montaTd(paciente.altura, "info-altura"));
	tr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	tr.appendChild(montaTd(paciente.imc, "info-imc"));

	return tr;
}

//preenche cada linha da tabela com os dados e com as respectivas classes
function montaTd(dado, classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	
	return td;
}

//validações de erro da tabela
function validaPaciente(paciente){
	var erros = [];
	if(paciente.nome.length==0){
		erros.push("Nome não pode ser em branco!");
	}
	if(paciente.peso.length==0){
		erros.push("Peso não pode ser em branco!");
	}
	if(!validaPeso(paciente.peso)){
		erros.push("Peso inválido!");
	}
	if(paciente.altura.length==0){
		erros.push("Altura não pode ser em branco!");
	}
	if(!validaAltura(paciente.altura)){
		erros.push("Altura inválida!");
	}
	if(paciente.gordura.length==0){
		erros.push("Gordura não pode ser em branco!");
	}

	return erros;
}