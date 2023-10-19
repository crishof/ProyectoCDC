function validarEnviar() {
    // Validar el campo de nombre
    if (document.fvalida.nombre.value.length <= 5) {
        alert("Tiene que escribir su nombre");
        document.fvalida.nombre.focus();
        return;
    };


    if (document.fvalida.interes.selectedIndex == 0) {
        alert("Debe seleccionar un motivo de su contacto.");
        document.fvalida.interes.focus();
        return;
    }

    // Si todas las validaciones pasan, se envía el formulario.
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}