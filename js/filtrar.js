var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", function() {
	this.value;

	var pacientes = document.querySelectorAll(".paciente");

	for (var i = 0; i < pacientes.length; i++) {
		var paciente = pacientes[i]
		var tdNombre = paciente.querySelector(".info-nombre");
		var nombre = tdNombre.textContent;
	}
});

