var botonEnviar = document.querySelector("#contacto__formulario__boton"); //adicionar-paciente

botonEnviar.addEventListener("click", function(event){
    event.preventDefault();
    var formulario = document.querySelector("#contacto__formulario");
    var datosEnviados = capturarDatos(formulario);
    var errores = validarDatos(datosEnviados);
    if (errores.length > 0){
        mostrarErrores(errores);
        return;
    }

    formulario.reset();
    var mensajesErrores = document.querySelector("#contacto__errores");
    mensajesErrores.innerHTML = "";

});

function capturarDatos(formulario){
    var datosEnviados = {
        nombre: formulario.nombre.value,
        email: formulario.email.value,
        asunto: formulario.asunto.value,
        mensaje: formulario.mensaje.value
    }
    return datosEnviados;
}

function validarDatos(datosEnviados){
    var errores = [];

    // ERRORES EN EL INPUT NOMBRE
    
    var patronLetra = new RegExp(/[A-Za-z]/);
    var patronNumeros = new RegExp(/[0-9]/);

    if(datosEnviados.nombre.length == 0) errores.push("El nombre no puede quedar vacío");
    if(datosEnviados.nombre.length > 50) errores.push("El nombre debe ser menor de 50 caracteres");
    if(patronNumeros.test(datosEnviados.nombre)) errores.push("El nombre no puede contener números")
    if(!patronLetra.test(datosEnviados.nombre)) errores.push("El nombre debe contener alguna letra");
    

    // ERRORES EN EL INPUT EMAIL
    
    var patronEmail = new RegExp(/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/);
    // "\w" = numeros o letras
    // "+" = al menos una vez
    // "*" = puede aparecer
    // "{2,5}" = tiene 2, 3, 4 o 5 letras

    if(datosEnviados.email.length == 0) errores.push("El e-mail no puede quedar vacío");
    if(!patronEmail.test(datosEnviados.email)) errores.push("El e-mail debe tener el formato nombre@servidor.dominio");
    if(!patronLetra.test(datosEnviados.email)) errores.push("El e-mail debe contener alguna letra");


    // ERRORES EN EL INPUT ASUNTO

    if(datosEnviados.asunto.length == 0) errores.push("El asunto no puede quedar vacío");
    if(datosEnviados.asunto.length > 50) errores.push("El asunto debe ser menor de 50 caracteres");
    if(!patronLetra.test(datosEnviados.asunto)) errores.push("El asunto debe contener alguna letra");


    // ERRORES EN EL TEXTAREA MENSAJE

    if(datosEnviados.mensaje.length == 0) errores.push("El mensaje no puede quedar vacío");
    if(datosEnviados.mensaje.length > 300) errores.push("El mensaje debe ser menor de 300 caracteres");
    if(!patronLetra.test(datosEnviados.mensaje)) errores.push("El mensaje debe contener alguna letra");

    return errores;
}

function mostrarErrores(errores){
    var listaError = document.querySelector("#contacto__errores");
    listaError.innerHTML = "";
    
    errores.forEach(function(error){
        var item = document.createElement("ul");
        item.textContent = error;
        listaError.appendChild(item);
    });
}