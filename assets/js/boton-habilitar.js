var contactoNombre = document.querySelector("#contacto__nombre");
var contactoEmail = document.querySelector("#contacto__email");
var contactoAsunto = document.querySelector("#contacto__asunto");
var contactoMensaje = document.querySelector("#contacto__mensaje");

var nombreLleno = false;
var emailLleno = false;
var asuntoLleno = false;
var mensajeLleno = false;
var todosLleno = false;

contactoNombre.addEventListener("input", function(){
    if(this.value.length > 0){
        nombreLleno = true;
    }
    verificaTodos();
});

contactoEmail.addEventListener("input", function(){
    if(this.value.length > 0){
        emailLleno = true;
    }
    verificaTodos();
});

contactoAsunto.addEventListener("input", function(){
    if(this.value.length > 0){
        asuntoLleno = true;
    }
    verificaTodos();
});

contactoMensaje.addEventListener("input", function(){
    if(this.value.length > 0){
        mensajeLleno = true;
    }
    verificaTodos();
});

function verificaTodos(){
    if(nombreLleno && emailLleno && asuntoLleno && mensajeLleno){
        todosLleno = true;
    } else {
        todosLleno = false;
    }

    if(todosLleno){
        botonEnviar.disabled = false;
    } else {
        botonEnviar.disabled = true;
    }
}