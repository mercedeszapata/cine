function suscribirse(){
    let suscripcion= prompt("¿Desea recibir novedades en su email?");
    if(suscripcion =="si"){
        let email= prompt("Ingese su email: ");
        alert("Ya estás suscripto");
    }
    else{
        alert("Lo esperamos proximamente");
    }
}
