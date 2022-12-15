//DOMContentLoaded, se usa para que carge primeto el contenmido del html
document.addEventListener("DOMContentLoaded", () => {
    
    //Seleccionar elemeentos de la interfaz
    const inputEmail = document.getElementById("email");
    const inputAsunto = document.getElementById("asunto");
    const inputMensaje = document.getElementById("mensaje");
    const formulario = document.getElementById('formulario')

    //Funciones
    //Mostrar alertas de la validacion
    const mostrarAlerta = () => {
        //Generar HTML
        const error = document.createElement('P')
        error.textContent = 'Hubo un error...';
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        
        //Inyectar error al formulario
        formulario.appendChild(error)
    }


    //Validacon de eventos
    const validar = e   => {
        //trim elimina espacios en blanco, siempre se recomienda ponerlo en un formulario
        if (e.target.value.trim() === '') {
            mostrarAlerta();
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