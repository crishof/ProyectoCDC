function validarEnviar() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var interes = document.getElementById("interes").value;
    var consulta = document.getElementById("consulta").value;
    
    var errorNombre = document.getElementById("error-nombre");
    var errorEmail = document.getElementById("error-email");
    var errorInteres = document.getElementById("error-interes");
    var errorConsulta = document.getElementById("error-consulta");
    
    // Reiniciamos los mensajes de error
    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorInteres.textContent = "";
    errorConsulta.textContent = "";
    
    // Validación del nombre (no debe estar vacío)
    if (nombre.trim() === "") {
        errorNombre.textContent = "Por favor, ingrese su nombre.";
        return;
    }
    
    // Validación del email
    if (email.trim() === "" || !validarEmail(email)) {
        errorEmail.textContent = "Por favor, ingrese un email válido.";
        return;
    }
    // Validación del campo "interes" (debe ser diferente de "Elegir")
    if (interes === "Elegir") {
        errorInteres.textContent = "Por favor, seleccione una opción.";
        return;
    }

    // Validación de la consulta (opcional: puedes agregar reglas de validación específicas)
    if (consulta.trim() === "") {
        errorConsulta.textContent = "Por favor, ingrese su consulta.";
        return;
    }
    
    // Si llegamos aquí, el formulario es válido y puedes enviar los datos.
    // Puedes agregar la lógica de envío de datos aquí.
    alert("Gracias "+ nombre + ",nos comunicaremos a la brevedad");

    document.forms["fvalida"].reset();
}

function validarEmail(email) {
    var emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegExp.test(email);
}