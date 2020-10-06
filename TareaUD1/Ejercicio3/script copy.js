"use strict";
//declaración variables
let num = parseInt(prompt("Introduzca número 3 cifras. 0->Fin"));

while (num != 0) {
  //comprobar que el número es de 3 cifras
  if (num >= 100 && num <= 999) {
    let numInverso = "",
      aux,
      numCopia = num,
      divisor = 100;

    do {
      aux = parseInt(numCopia / divisor); //aux contiene cociente
      numInverso = aux + numInverso; //vamos concatenando el cociente
      numCopia = numCopia % divisor; //numCopia se guarda el resto
      divisor = divisor / 10;
    } while (numCopia > 0);

    if (num == numCopia) {
      console.log("El número inverso de " + num + " es igual al original");
    } else {
      console.log("El número inverso de " + num + " no es igual al original");
    }
  } else {
    console.log("El número " + num + " no es de 3 cifras");
  }
  num = prompt("Introduzca número 3 cifras. 0->Fin");
}
