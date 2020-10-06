"use strict";
//declaración variables
let num = parseInt(prompt("Introduzca número 3 cifras. 0->Fin"));

while (num != 0) {
   //comprobar que el número es de 3 cifras
  if (num >= 100 && num <= 999) {
       
    let unidad, centena;
    
    centena = parseInt(num / 100);
    unidad = parseInt(num % 10);

    if (centena == unidad) {
      console.log("El número inverso de " + num + " es igual al original");
    } else {
      console.log("El número inverso de " + num + " no es igual al original");
    }
  } else {
    console.log("El número " + num + " no es de 3 cifras");
  }
  num = parseInt(prompt("Introduzca número 3 cifras. 0->Fin"));
}
