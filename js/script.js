document.addEventListener("DOMContentLoaded", function() {
    const cuentoForm = document.getElementById("cuento-form");

    cuentoForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario

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

    const servicioForm = document.getElementById("servicio-form");

    servicioForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario

        const cliente = document.getElementById("cliente").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const servicio = document.getElementById("servicio").value;

        // Realizar la solicitud AJAX o redireccionar a una nueva página para mostrar la información
        // Aquí se puede incluir el código para enviar los datos a un servidor mediante AJAX

        // Mostrar la información en una tabla en la misma página
        const tabla = document.createElement("table");
        tabla.innerHTML = `
            <tr>
                <th>Nombres y Apellidos</th>
                <td>${cliente}</td>
            </tr>
            <tr>
                <th>Correo electrónico</th>
                <td>${email}</td>
            </tr>
            <tr>
                <th>Número de celular</th>
                <td>${telefono}</td>
            </tr>
            <tr>
                <th>Servicio solicitado</th>
                <td>${servicio}</td>
            </tr>
        `;
        document.getElementById("solicitud").appendChild(tabla);
    });
});
