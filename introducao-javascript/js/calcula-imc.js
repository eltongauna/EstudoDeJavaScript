var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length; i++){
	var paciente = pacientes[i];
	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var imc = paciente.querySelector(".info-imc");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;
	var pesoEhValido = validaPeso(peso);
	var alturaEhValido = validaAltura(altura);

	if(!pesoEhValido){
		pesoEhValido = false;
		tdPeso.textContent = "Peso Inválido!";
		paciente.classList.add("paciente-invalido");
	}

	if(!alturaEhValido){
		alturaEhValido = false;
		tdAltura.textContent = "Altura Inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if(pesoEhValido && alturaEhValido){
		var imcValor = calculaImc(peso, altura);
		imc.textContent = imcValor;
	}	
}

function validaPeso(peso){
	if(peso>=0 && peso<=500){
		return true;
	}
}

function validaAltura(altura){
	if(altura>=0 && altura<=3.00){
		return true;
	}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = (peso/(altura*altura)).toFixed(2);
	return imc;
}
