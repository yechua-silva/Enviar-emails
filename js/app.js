//DOMContentLoaded, se usa para que carge primeto el contenmido del html
document.addEventListener("DOMContentLoaded", () => {
    
    //Seleccionar elemeentos de la interfaz
    const inputEmail = document.getElementById("email");
    const inputAsunto = document.getElementById("asunto");
    const inputMensaje = document.getElementById("mensaje");

    //Aignar eventos
    const validar = e   => {
        console.log(e.target.value);
    }
    //se ejecuta al salir del input
    inputEmail.addEventListener("blur", validar)
    inputAsunto.addEventListener("blur", validar)
    inputMensaje.addEventListener("blur", validar)


})