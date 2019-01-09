function respuesta(event){

  console.log (event.target.className);
  if (event.target.className =='correcta'){
    alert ("La respuesta es correcta");
}else{
  alert("La respuesta es incorrecta");
  }

}

let puntajeFinal= 0;
function respuesta (event) {
  console.log(event.target.className);
  if (event.target.className =="correcta") {
    puntajeFinal=puntajeFinal+1;
    const puntos = "TU RESULTADO FINAL ES: " + puntajeFinal;
    document.getElementById("resultado").innerHTML = puntos;
    //alert("¡Correcto!\n Tu puntaje actual es : " + puntajeFinal);

  } else {
    puntajeFinal = puntajeFinal;
    //alert("¡Fallaste! \n Tu puntaje actual es: " + puntajeFinal);
  }

}

function color(event) {
let boton= document.getElementById('bverdadero');
  console.log(event.target.className);
  if (event.target.className !=='boton-estado') {
    boton.style.background="green";

 }
}

function color1(event) {
let boton= document.getElementById('bverdadero1');
  console.log(event.target.className);
  if (event.target.className !=='boton-estado') {
    boton.style.background="green";

 }
}
