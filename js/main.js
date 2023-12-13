// comemtarios

// alert('hola mundo en alerta de js');

// consola
// console.log("Hoplaaa desde consola");
// declaracion de variables

// let nombre = "Abril";

// // concatenar texto y variable

// console.log("El nombre es: ",nombre);

// las variables no pueden ser parabras reservadas
// al nombrarlas usaremos un nombre que nos de descripcion
// constantes
// const pi=3.1416;
// // tipos de datos
// // numeros
// let edad = 10;
// // cadena texto
// let text="holaa"; 
// // booleanos true or false
// let activo=true;
// operaciones aritmeticas (+ - * / % ++ -- )
// operaciones relacionales (mayor y menos q < >) >= <= == !=
// logicos and && or||  not !


// RELOJ DIGITAL

function currentTime() {
   let date = new Date();
   let hh= date.getHours();
   let mm= date.getMinutes();
   let ss= date.getSeconds();

   hh = (hh <10) ? "0" + hh: hh;
   mm = (mm<10)? "0"+ mm : mm;
   ss = (ss<10) ? "0" + ss : ss;

   let time= hh+ ":" + mm + ":" + ss;

   let reloj = document.querySelector('#reloj');
   reloj.innerHTML=time;
}

setInterval(currentTime,1000);