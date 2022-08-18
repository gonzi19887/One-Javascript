var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = true;
	var alturaValida = true;

	if ((peso < 0) || (peso > 400)) {
		tdImc.textContent = "Peso Incorrecto";
		pesoValido = false;
		paciente.classList.add("paciente-incorrecto");
	}

	if ((altura < 0) || (altura > 2.50)) {
		tdImc.textContent = "Altura Incorrecta";
		alturaValida = false;
		paciente.classList.add("paciente-incorrecto");
	}

	if (pesoValido && alturaValida) {
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}

}
