document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario-contacto');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const reason = document.getElementById('reason').value;

        let errores = [];

        // Validar nombre
        if (nombre === '') {
            errores.push("El nombre es obligatorio.");
        }

        // Validar correo
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegex.test(correo)) {
            errores.push("El correo electrónico no es válido.");
        }

        // Validar motivo
        if (reason === '') {
            errores.push("Seleccione un motivo de contacto.");
        }

        if (errores.length > 0) {
            alert("Corrige los siguientes errores:\n" + errores.join("\n"));
        } else {
            alert("Formulario enviado correctamente. ¡Gracias por contactarte!");
            form.reset();
        }
    });
});