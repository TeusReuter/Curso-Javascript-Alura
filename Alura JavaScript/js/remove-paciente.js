
var tabela = document.querySelector("#tabela-pacientes");


tabela.addEventListener("dblclick", function(event) {
	// Somente executa o codigo de remover caso o elemento em que clicamos seja um <td>
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function() {
		event.target.parentNode.remove();
	}, 500);

});