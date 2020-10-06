"use strict";
//declaracion de variables
let nota = parseInt(prompt("Introduzca una calificación 1-10. 0->Fin"))
while (nota<0 || nota >10){
    nota = parseInt(prompt("Error. Vuelva a introducir una calificación 1-10. 0->Fin"))
}
while (nota != 0) {

    switch (true) {
        case nota >= 1 && nota < 5:
            console.log(nota + "->" + "Insuficiente");
            break;
        case nota = 5:
            console.log(nota + "->" + "Suficiente");
            break;
        case nota = 6:
            console.log(nota + "->" + "Bien");
            break;
        case nota >= 7 && nota < 9:
            console.log(nota + "->" + "Notable");
            break;
        case nota >= 9:
            console.log(nota + "->" + "Sobresaliente");
            break;

    }
    nota = parseInt(prompt("Introduzca una calificación 1-10. 0->Fin"));
    while (nota<0 || nota >10){
        nota = parseInt(prompt("Error. Vuelva a introducir una calificación 1-10. 0->Fin"))
    }
}