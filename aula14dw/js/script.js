
	function somar(val1, val2){
		return val1 + val2;
	}

	function subtrair(val1, val2){
		return val1 - val2;
	}

	function multiplicar(val1, val2){
		return val1 * val2;
	}

	function dividir(val1, val2){
		return val1 / val2;
	}

	function calcular(){
		var v1 = parseFloat(document.getElementById("val1").value);

		var v2 = parseFloat(document.getElementById("val2").value);

			console.log("teste v1: "+v1);
			console.log("teste v2: "+v2);

		var rads = document.getElementsByName("rdcalc");

		var rdSelect = null;

	
	for (var i = 0; i<rads.length; i++) {
		if (rads[i].checked) {
			rdSelect = rads[i].value;
		}
	}
	console.log("radio selecionada: "+rdSelect);

	var result = 0;

	switch(rdSelect){
		case 'somar':
			result = "Soma: " +somar(v1,v2);
			break;

		case 'subtrair':
			result = "Subtração: " +subtrair(v1,v2);
			break;

		case 'multiplicar':
			result = "multiplica: " +multiplicar(v1,v2);
			break;

		case 'dividir':
			result = "dividi: " +dividir(v1,v2);
			break;

		default: alert("opcao invalida");
		break;
	}

	document.getElementById("resultado").innerHTML = result;
}

