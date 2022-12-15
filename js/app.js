//DOMContentLoaded, se usa para que carge primeto el contenmido del html
document.addEventListener("DOMContentLoaded", () => {
    //Objeto con los datos ingresados
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }
    
    //Seleccionar elemeentos de la interfaz
    const inputEmail = document.getElementById("email");
    const inputAsunto = document.getElementById("asunto");
    const inputMensaje = document.getElementById("mensaje");
    const formulario = document.getElementById('formulario')

    //Funciones
     //Validacon de eventos
    const validar = e   => {
        //trim elimina espacios en blanco, siempre se recomienda ponerlo en un formulario
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }
        //validacion del email
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El campo email no es valido', e.target.parentElement);
            return;
        }
        limpiarAlerta(e.target.parentElement);
        //Aignar valores
        email[e.target.id] = e.target.value.trim().toLowerCase();

        //Conprobar email
        comprobarEmail();

    }
    //Mostrar alertas de la validacion
    const mostrarAlerta = (mensaje, referencia) => {
        //limpiarAlerta
        limpiarAlerta(referencia);
        //Generar HTML
        const error = document.createElement('P')
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        
        //Inyectar error al formulario
        referencia.appendChild(error);
    }
    //Limpiar alertas 
    const limpiarAlerta = (referencia) => {
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600')
        if (alerta) {
            //SI existe, la elimina y solo queda la que estaba
            alerta.remove();
        }
    };
    //Validacion de email
    const validarEmail = (email) => {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    };
    //Comprueba el email
    const comprobarEmail = () => {
        //Comprueba los campos vacios
        console.log(Object.values(email).includes(''));
    };




    //Aignar eventos
    //se ejecuta al salir del input
    inputEmail.addEventListener("blur", validar)
    inputAsunto.addEventListener("blur", validar)
    inputMensaje.addEventListener("blur", validar)
})