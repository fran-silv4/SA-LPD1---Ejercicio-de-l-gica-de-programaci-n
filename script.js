function encontrarMayorMenorCentral (){
    //asignarle variables a los 3 numeros e ingresar los valores por prompt
    const num1 = Number(prompt("Ingrese el primer número: "));
    const num2 = Number(prompt("Ingrese el segundo número: "))
    const num3 = Number(prompt("Ingrese el tercer número: "));
   
    //verificar que sea un numero
    if (isNaN (num1) || isNaN(num2) || isNaN(num3)) {
        alert("Debe ingresar un número");
        return;
    }
    //encontrar el numero mayor
    let mayor = num1;
    if (mayor < num2) {
        mayor = num2
    }
    if (mayor < num3) {
        mayor = num3
    }
    //encontrar el numero menor
    let menor = num1
    if (menor > num2) {
        menor = num2
    }
    if (menor > num3){
        menor = num3
    }
    //encontrar el numero central
    const central = (num1 + num2 + num3) - mayor - menor
    //identificar si hay numeros iguales
    if (num1 === num2 && num2 === num3){
        const resultado = "Los tres números son iguales"
        mostrarResultado(resultado)
        return
    }

    const resultados = []
    //mostrar los numero de mayor a menor
    const ordenMayorMenor = [mayor , central, menor].sort((a,b) => b - a)
    const resultadoMayorMenor = ordenMayorMenor.join(', ');
    resultados.push(resultadoMayorMenor)

    //mostrar los numero de menor a mayor
    const ordenMenorMayor = ordenMayorMenor.slice().reverse()
    const resultadoMenorMayor = ordenMenorMayor.join(', ');
   resultados.push(resultadoMenorMayor)

    // mostrar todos los resultados
   for (const resultado of resultados) {
    mostrarResultado(resultado);
  }

}
function mostrarResultado(resultado){
    const resultadoElement = document.getElementById('resultado')
    resultadoElement.innerHTML += resultado + '<br>'; // += concatena los resultados y '<br>' agrega un salto de linea entre cada resultado
}

encontrarMayorMenorCentral();