//variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos  = 0;
let temporizador = false;
let timer = 60;
let tiempoRegresico = null;
let timerInicio = 60;

//Apuntado a documento HTML
let mostrarMovimientos = document.getElementById(`movimientos`)
let mostrarAciertos = document.getElementById(`aciertos`)
let mostrarTiempo = document.getElementById(`tiempo`)

//Generaccion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

//funcion
function contarTiempo(){
    tiempoRegresico = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} s`;
        if(timer == 0){
            clearInterval(tiempoRegresico);
            bloquearTarjetas();
        }
    },1000)
}
//funcion de tiempo
function bloquearTarjetas(){
    for (let i = 0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i)
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
    }
}

//funcion principal
function destapar(id){

if(temporizador == false){
    contarTiempo();
    temporizador = true;
}

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if(tarjetasDestapadas == 1){
       // mostrar el primer numero
tarjeta1 = document.getElementById(id);
primerResultado = numeros[id]
tarjeta1.innerHTML = primerResultado;

//Deshabilitar segundo boton
tarjeta1.disabled = true;
// Segundo boton
    }if(tarjetasDestapadas ==2){
        tarjeta2 = document.getElementById(id);
segundoResultado = numeros[id];
tarjeta2.innerHTML = segundoResultado;

//Deshabilitar segundo boton
tarjeta2.disabled= true;

// Incrementar Movimientos
 movimientos++;
mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

if(primerResultado == segundoResultado){
    //encerer contador de tarjetas destapadas 
    tarjetasDestapadas = 0;

    //Aumentar aciertos
    // Revisar
    aciertos++;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

    if(aciertos == 8){
        clearInterval(tiempoRegresico);
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😎 `
        mostrarMovimientos.innerHTML = `Movimientos : ${movimientos} 👍`
        mostrarTiempo.innerHTML =`Tiempo: ${timerInicio - timer} segundos` 
    }

}else{
    //Mostrar momentaneament valores y volver a tapar
    setTimeout(()=>{
        tarjeta1.innerHTML = ` `;
        tarjeta2.innerHTML = ` `;
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
    },800);
}
    }        

}
