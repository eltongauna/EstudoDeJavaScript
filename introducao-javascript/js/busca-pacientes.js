var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
	var erroAjax = document.querySelector("#erro-ajax");//span que indica erro ou sucesso
	//acesso a conteudo externo.
	var xhr = new XMLHttpRequest(); 
	//tipo de requisição e caminho 
	xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
	//escuta de retorno de requisição
	xhr.addEventListener("load", function() {
		if(xhr.status == 200){
			erroAjax.textContent = "Adicionado com sucesso!";//add mensagem ao span
			var resposta = xhr.responseText;
        	var pacientes = JSON.parse(resposta);//conversão da resposta para o formato JSON
        	//passa pela lista que veio e adiciona cada objeto em uma linha da tabela
        	pacientes.forEach(function(paciente){
        		adicionaPacienteNaTabela(paciente);
        	});
		}else{
			console.log(xhr.status);
			console.log(xhr.responseText);
			erroAjax.textContent = "Erro ao buscar pacientes!";//add mensagem ao span
		}
    });
    //envio da solicitação
	xhr.send();
});