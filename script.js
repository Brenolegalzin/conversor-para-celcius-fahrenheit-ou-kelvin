//fahrenheit
function selecionar(){
	if(document.getElementById("fahrenheit1").checked==true){
		document.getElementById("kelvin1").checked = false;
		document.getElementById("celcius1").checked = false;
	}
	if(document.getElementById("kelvin1").checked==true){
		document.getElementById("fahrenheit1").checked = false;
		document.getElementById("celcius1").checked = false;
	}
	if(document.getElementById("celcius1").checked==true){
		document.getElementById("kelvin1").checked = false;
		document.getElementById("fahrenheit1").checked = false;
	}
	if(document.getElementById("fahrenheit2").checked==true){
		document.getElementById("kelvin2").checked = false;
		document.getElementById("celcius2").checked = false;
	}
	if(document.getElementById("kelvin2").checked==true){
		document.getElementById("fahrenheit2").checked = false;
		document.getElementById("celcius2").checked = false;
	}
	if(document.getElementById("celcius2").checked==true){
		document.getElementById("kelvin2").checked = false;
		document.getElementById("fahrenheit2").checked = false;
	}
}
function calcular(){
	if(document.getElementById("fahrenheit1").checked==true){
		if(document.getElementById("kelvin2").checked==true){
			const valor = parseFloat(document.getElementById("userInput").value);
			let resultado = valor-32*5;
			resultado = resultado/9;
			resultado = resultado+273.15
			document.getElementById("result").innerText = resultado;
		}
		if(document.getElementById("celcius2").checked==true){
			const valor = parseFloat(document.getElementById("userInput").value);
			let resultado = valor-32
			resultado = resultado*5/9;
			document.getElementById("result").innerText = resultado;
		}
		if(document.getElementById("fahrenheit2").checked==true){
			alert("invalido!");
		}
	}
	if(document.getElementById("celcius1").checked==true){
		if(document.getElementById("kelvin2").checked==true){
			const valor = parseFloat(document.getElementById("userInput").value);
			let resultado = valor+273.15
			document.getElementById("result").innerText = resultado;
		}
		if(document.getElementById("fahrenheit2").checked==true){
			const valor = parseFloat(document.getElementById("userInput").value);
			let resultado = valor*9/5;
			resultado = resultado+32;
			document.getElementById("result").innerText = resultado;
		}
		if(document.getElementById("celcius2").checked==true){
			alert("invalido!");
		}
	}
	if(document.getElementById("kelvin1").checked==true){
		if(document.getElementById("celcius2").checked==true){
			const valor = parseFloat(document.getElementById("userInput").value);
			let resultado = valor-273.15;
			document.getElementById("result").innerText = resultado;
		}
		if(document.getElementById("fahrenheit2").checked==true){
			const valor = parseFloat(document.getElementById("userInput").value);
			let resultado = valor*9/5;
			resultado = resultado-459.67;
			document.getElementById("result").innerText = resultado;
		}
		if(document.getElementById("kelvin2").checked==true){
			alert("invalido!");
		}
	}
}
