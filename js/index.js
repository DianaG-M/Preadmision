
function mostrarPalabra(event){
	const name = document.getElementById("nombre").value;
	if(name !== ""){
		alert("Bienvenidx " + name +". Estas en Preguntitas un juego donde pondrás"+ 
		" a prueba tus conocimientos sobre CINE \n Elige 'Jugar' si ya quieres empezar a Jugar" + 
		" o 'Manual' si quieres saber como se Juega");
	}else{
		alert("Debes de ingresar tu nombre para continuar");
	}
}

function play(event){
	const name = document.getElementById("nombre").value;
	if(name == ""){
		alert("Debes de ingresar tu nombre para continuar");		
	}else{
		
		onclick=location.href='categoria.html';
	}
}


