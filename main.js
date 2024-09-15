function mostrar(){
  let seleccion = document.querySelector(".parrafo-class");

  seleccion.innerHTML += Date() +`<br>`;
}


// CALCULADORA

function agregar(valor){
  let pantaCalc = document.querySelector(`.pantalla`).value +=valor;
}

function borrar(){
  let borrado = document.querySelector(`.pantalla`).value = " ";
}

function calcular(){
  let valorPantalla = document.querySelector(`.pantalla`).value

  let resultados = eval(valorPantalla)

  document.querySelector(`.pantalla`).value = resultados
}


//CALCULADORA otra opcion(para no llamar siempre con queriselector, directamente llamamos a la pantalla)
const pantalla = document.querySelector('.pantalla');

function agregar(valor) {
  pantalla.value += valor;
}

function borrar() {
  pantalla.value = '';
}

function calcular() {

  try {
    const valorPantalla = pantalla.value;
    const resultado = eval(valorPantalla);
    pantalla.value = resultado;
  } catch (error) {
    pantalla.value = 'Error';
  }
}



