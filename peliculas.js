let cantidad
let resultado
let edadEspectadores

function valor(numero) {
    return numero * 350;
}

function precioTotal(precio) {
    alert("El valor de las entradas es " + precio + ". Gracias por elegirnos");
}

function edad() {
    edadEspectadores = prompt("¿Son todos los espectadores mayores de 13 años?");
    if (edadEspectadores != "no") {
        cantidad = parseInt(prompt("Ingrese la cantidad de entradas que quiere comprar"));
        resultado = valor(cantidad);
        precioTotal(resultado);
        
    }


    else {
        alert("Está prohibida la venta de entradas a menores de 13 años.");
        

    }
}

function comprar() {
    edad();

}