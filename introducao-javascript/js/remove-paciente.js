var tabela = document.querySelector("table");//define a tabela como evento de escuta, pois todos seus filhos terão o mesmo efeito

tabela.addEventListener("dblclick", function(event) {
		var alvoDoClick = event.target;
		var paiDoAlvo = alvoDoClick.parentNode;	
		paiDoAlvo.classList.add("fadeOut");
		setTimeout(function(){
			paiDoAlvo.remove();
		}, 500);
		
});