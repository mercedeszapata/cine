function comprarEntradasMayores() {
    let cantidadEntradas = 50;
    let cantidadComprar = parseInt(prompt("Ingrese la cantidad de entradas que quiere comprar"));
    let cantidadRestante = cantidadEntradas - cantidadComprar;
    let edad = prompt("¿Son todos los espectadores mayores de 13 años?");
    while (edad != "no") {
        let valor = cantidadComprar * 350;
        alert("El valor de las entradas es " + valor + ". Gracias por elegirnos");
        edad = prompt("Desea seguir comprando? si/no");

        console.log("Quedan " + cantidadRestante + " entradas");
    }
    while (edad == "no") {
        alert("Esta película está prohibida para menores de 13 años.");
        alert("Gracias por venir");

    }
}


function comprarEntradas() {
    let cantidadEntradas = 50;
    let cantidadComprar = parseInt(prompt("Ingrese la cantidad de entradas que quiere comprar"));
    let cantidadRestante = cantidadEntradas - cantidadComprar;
    let valor = cantidadComprar * 350;
    alert("El valor de las entradas es " + valor + ". Gracias por elegirnos");
    console.log("Quedan " + cantidadRestante + " entradas");
}