document.addEventListener("DOMContentLoaded", function() {
    // Funcionalidad para el formulario de solicitud de servicio
    const solicitudForm = document.getElementById("solicitud-form");

    solicitudForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario

        // Obtener los valores del formulario de solicitud de servicio
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const servicio = document.getElementById("servicio").value;

        // Crear una nueva página con los datos del formulario
        const nuevaPagina = document.createElement("div");
        nuevaPagina.innerHTML = `
            <h2>Detalles de la Solicitud:</h2>
            <table>
                <tr><td>Nombres y Apellidos:</td><td>${nombre}</td></tr>
                <tr><td>Correo electrónico:</td><td>${email}</td></tr>
                <tr><td>Número de celular:</td><td>${telefono}</td></tr>
                <tr><td>Servicio solicitado:</td><td>${servicio}</td></tr>
            </table>
        `;

        // Agregar la nueva página al cuerpo del documento
        document.body.innerHTML = "";
        document.body.appendChild(nuevaPagina);
    });

    // Funcionalidad para el formulario de diseño de cuento
    const cuentoForm = document.getElementById("cuento-form");

    cuentoForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario

        // Obtener los valores del formulario de diseño de cuento
        const nombre = document.getElementById("nombre").value;
        const apodo = document.getElementById("apodo").value;
        const colorCabello = document.getElementById("color-cabello").value;
        const colorOjos = document.getElementById("color-ojos").value;
        const edad = document.getElementById("edad").value;
        const hobby = document.getElementById("hobby").value;

        // Generar el cuento
        const cuento = `Había una vez una persona llamada ${nombre}, pero todos la conocían como ${apodo}. 
        Tenía el cabello de color ${colorCabello} y unos ojos tan brillantes como el ${colorOjos}. 
        A sus ${edad} años, su hobby favorito era ${hobby}. Un día, mientras practicaba su hobby, 
        sucedió algo inesperado...`;

        // Mostrar el cuento en la página
        const cuentoContainer = document.createElement("div");
        cuentoContainer.innerHTML = `<h3>Tu cuento:</h3><p>${cuento}</p>`;
        document.getElementById("diseña-tu-cuento").appendChild(cuentoContainer);
    });
});
