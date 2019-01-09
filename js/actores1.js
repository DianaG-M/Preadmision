let puntajeFinal=0;
function respuesta (event){

  console.log(event.target.className);
  if  (event.target.className =='correcta'){
    puntajeFinal = puntajeFinal+1;
    const puntos = "TU RESULTADO FINAL ES: " + puntajeFinal;
    document.getElementById("resultado").innerHTML = puntos;
  //alert('¡¡ CORRECTO!!\n Tu Puntaje Actual es : '+puntajeFinal);
  }else{
    puntajeFinal = puntajeFinal;
    //alert('¡FALLASTE!!\n Tu Puntaje Actual es :' +puntajeFinal);
  }



}

function color (event){
  let boton = document.getElementById ("bverdadero");
  console.log(event.target.className);
  if (event.target.className !=='boton-estado') {
    boton.style.background = "green";

  }

}

function color2 (event){
  let boton = document.getElementById ("bverdadero2");
  console.log(event.target.className);
  if (event.target.className !=='boton-estado2') {
    boton.style.background = "green";

  }
}

function color3 (event){
  let boton = document.getElementById ("bverdadero3");
  console.log(event.target.className);
  if (event.target.className !=='boton-estado3') {
    boton.style.background = "green";

  }
}
