//DOMContentLoaded, se usa para que carge primeto el contenmido del html
document.addEventListener("DOMContentLoaded", () => {
    //Objeto con los datos ingresados
    const email = {
        email: '',
        emailCC: '',
        asunto: '',
        mensaje: ''
    }
    
    //Seleccionar elemeentos de la interfaz
    const inputEmail = document.getElementById("email");
    const inputEmailExtra = document.getElementById("emailCC");
    const inputAsunto = document.getElementById("asunto");
    const inputMensaje = document.getElementById("mensaje");
    const formulario = document.getElementById('formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.getElementById('spinner')

    //FUNCIONES
    //Enviar email
    const enviarEmail = e => {
        e.preventDefault();
        //Mostrar spinner
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');
        //Desaparecer spinner, sumular que ya se envio
        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            //Reiniciamos el objeto
            resetFormulario()
            //Crear alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'reunded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente'
            //Agregar al HTML
            formulario.appendChild(alertaExito);
            //Desaparecer alerta
            setTimeout(() => {
                alertaExito.remove();
                limpiarAlerta(e.target.parentElement);
                
            },2000)
        }, 2000);
    };
     //Validacon de eventos
    const validar = e   => {
        //trim elimina espacios en blanco, siempre se recomienda ponerlo en un formulario
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail()
            return;
        }
        //validacion del email
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El campo email no es valido', e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail()
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
        if (email.email === '' || email.asunto === '' || email.mensaje === '') {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        }
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false;
        
    };
    //Resetear formulario
    const resetFormulario = () => {
        //Reiniciamos el objeto
        email.email = '';
        email.emailCC = '';
        email.asunto = '';
        email.mensaje = '';
        formulario.reset();
        comprobarEmail();
    };

    const validarEmailExtra = e => {
        //Comprueba si esta vacio y no generar la alerta
        if (e.target.id === 'emailCC' && e.target.value === '') {
            limpiarAlerta(e.target.parentElement);
            return
        }
        //Verifica si el email es valido en caso de que lo agrege
        if (e.target.id === 'emailCC' && !validarEmail(e.target.value)){
            mostrarAlerta('El campo email no es valido', e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail()
            return;  
        }
        //asignar valores
        email[e.target.id] = e.target.value.trim().toLowerCase();
        limpiarAlerta(e.target.parentElement);
    };
    //ASIGNACION DE EVENTOS
    //se ejecuta al salir del input
    inputEmail.addEventListener("input", validar)
    inputAsunto.addEventListener("input", validar)
    inputMensaje.addEventListener("input", validar)
    inputEmailExtra.addEventListener("input", validarEmailExtra)
    formulario.addEventListener('submit', enviarEmail)
    btnReset.addEventListener('click', e => {
        // pare poder preguntar si esta seguro de resetear
        e.preventDefault();   
        //Reinciar objeto
        resetFormulario();
    })
})