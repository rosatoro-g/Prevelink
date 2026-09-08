// ---------- SERVICIO INICIAL: SALIDA AL CINE ----------

// Este servicio queda como parte de los servicios
// agregados de demostración.

const servicioCine = {
    nombre: "Salida al cine",
    categoria: "Experiencias",
    descripcion: "Acompañamiento para disfrutar de una película y compartir un buen momento.",
    precio: "35000",
    ubicacion: "Valdivia",
    imagen: "img/servicio-cine.jpg"
};


// ---------- OBTENER SERVICIOS GUARDADOS ----------

const serviciosGuardados =
    localStorage.getItem("servicios");

let servicios = [];


// Si ya tenemos servicios guardados,
// recuperamos la lista.

if (serviciosGuardados) {

    servicios = JSON.parse(serviciosGuardados);

} else {

    // Si todavía no existe la lista,
    // agregamos Salida al cine.

    servicios.push(servicioCine);


    // ---------- RECUPERAR SISTEMA ANTIGUO ----------

    // Antes guardábamos un solo servicio
    // con la clave "nuevoServicio".

    const servicioAntiguo =
        localStorage.getItem("nuevoServicio");


    if (servicioAntiguo) {

        const servicioRecuperado =
            JSON.parse(servicioAntiguo);

        servicios.push(servicioRecuperado);

        localStorage.removeItem("nuevoServicio");
    }


    // Guardamos la nueva lista.

    localStorage.setItem(
        "servicios",
        JSON.stringify(servicios)
    );
}


// ---------- CONTENEDOR DE SERVICIOS ----------

const contenedor =
    document.querySelector(".contenedor-servicios");


// ---------- MOSTRAR SERVICIOS ----------

servicios.forEach(function (servicio) {

    const nuevaTarjeta =
        document.createElement("article");

    nuevaTarjeta.classList.add("tarjeta-servicio");


    // ---------- IMAGEN DEL SERVICIO ----------

    let imagenServicio = servicio.imagen;


    // Esto es solamente para servicios antiguos
    // que fueron creados antes de permitir subir imágenes.

    if (!imagenServicio) {

        const nombreServicio =
            servicio.nombre.toLowerCase();


        // Recuperar la imagen que ya teníamos
        // para Salida al cine.

        if (nombreServicio.includes("salida al cine")) {

            imagenServicio =
                "img/servicio-cine.jpg";

        } else {

            // Imagen genérica para servicios antiguos
            // que no tengan una imagen guardada.

            imagenServicio =
                "img/servicio-evento.jpg";
        }
    }


    // ---------- CREAR TARJETA ----------

    nuevaTarjeta.innerHTML = `

        <div class="imagen-servicio">

            <img
                src="${imagenServicio}"
                alt="${servicio.nombre}"
            >

        </div>


        <div class="informacion-servicio">

            <h3>
                ${servicio.nombre}
            </h3>

            <p>
                ${servicio.descripcion}
            </p>

            <p class="precio">
                $${Number(servicio.precio).toLocaleString("es-CL")}
            </p>

            <p>
                ${servicio.ubicacion}
            </p>

        </div>
    `;


    contenedor.appendChild(nuevaTarjeta);

});