"use strict"
//declaración de variables
let lado1, lado2, lado3;

lado1=parseInt(prompt("Introduzca longitud lado1. 0->Fin"));
while (lado1!=0){
    lado2=parseInt(prompt("Introduzca longitud lado2"));
    lado3=parseInt(prompt("Introduzca longitud lado3"));
    //averiguar el lado mayor
    if (lado1 < lado2 ){
        aux=lado1;
        lado1=lado2;
        lado2=aux;
    }
    if (lado1<lado3){
        aux=lado1;
        lado1=lado3;
        lado3=aux;
    }
    
   //averiguar si es un triángulo//
    if (lado1<(lado2+lado3)){
         //averiguar tipo de triángulo
        if (lado1==lado2 && lado1==lado3){
            console.log("lado1=" + lado1+ " lado2="+ lado2+ " lado3="+ lado3 +" El triángulo es equilátero");
        }else if (lado1 == lado2 || lado1== lado3 || lado2==lado3){
            console.log("lado1=" + lado1+ " lado2="+ lado2+ " lado3="+ lado3 +" El triángulo es isósceles");
        }else {
            console.log("lado1=" + lado1+ " lado2="+ lado2+ " lado3="+ lado3 +" El triángulo es escaleno");
        }
    }else{
        console.log("lado1=" + lado1+ " lado2="+ lado2+ " lado3="+ lado3 +" No se puede formar un triángulo");
    }
    lado1=parseInt(prompt("Introduzca longitud lado 1. 0->Fin"));
}