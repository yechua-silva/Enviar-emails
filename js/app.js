//DOMContentLoaded, se usa para que carge primeto el contenmido del html
document.addEventListener("DOMContentLoaded", () => {
    
    //Seleccionar elemeentos de la interfaz
    const inputEmail = document.getElementById("email");
    const inputAsunto = document.getElementById("asunto");
    const inputMensaje = document.getElementById("mensaje");

    //Validaconl de eventos
    const validar = e   => {
        //trim elimina espacios en blanco, siempre se recomienda ponerlo en un formulario
        if (e.target.value.trim() === '') {
            console.log('Esta vacio');
        }else{
            console.log('Tiene contenido');
        }
    }
    //Aignar eventos
    //se ejecuta al salir del input
    inputEmail.addEventListener("blur", validar)
    inputAsunto.addEventListener("blur", validar)
    inputMensaje.addEventListener("blur", validar)


})