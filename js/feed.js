// ---------- ELEMENTOS DEL FEED ----------

// Buscador
const inputBusqueda = document.querySelector(".busqueda input");
const botonBuscar = document.querySelector(".busqueda button");

// Filtros
const filtroServicio = document.getElementById("filtro-servicio");
const filtroPrecio = document.getElementById("filtro-precio");
const filtroUbicacion = document.getElementById("filtro-ubicacion");
const filtroDisponibilidad = document.getElementById("filtro-disponibilidad");

// Tarjetas de perfiles
const tarjetasPerfiles = document.querySelectorAll(".tarjeta-perfil");

// Mensaje cuando no existen resultados
const mensajeSinResultados =
    document.getElementById("mensaje-sin-resultados");


// ---------- NORMALIZAR TEXTO ----------

// Convierte textos para poder compararlos fácilmente.
//
// Ejemplos:
// "Sofía" -> "sofia"
// "Acompañamiento" -> "acompanamiento"

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}


// ---------- OBTENER PRECIO ----------

function obtenerPrecio(tarjeta) {

    const elementoPrecio =
        tarjeta.querySelector(".precio-desde");

    if (!elementoPrecio) {
        return 0;
    }

    // Ejemplo:
    // "Desde $40.000" -> "40000"

    const precioTexto =
        elementoPrecio.textContent.replace(/\D/g, "");

    return Number(precioTexto);
}


// ---------- FILTRAR PERFILES ----------

function filtrarPerfiles() {

    // Obtener lo escrito en el buscador
    const textoBusqueda =
        normalizarTexto(inputBusqueda.value);

    // Obtener filtros seleccionados
    const servicioSeleccionado =
        normalizarTexto(filtroServicio.value);

    const precioSeleccionado =
        filtroPrecio.value;

    const ubicacionSeleccionada =
        normalizarTexto(filtroUbicacion.value);

    const disponibilidadSeleccionada =
        normalizarTexto(filtroDisponibilidad.value);


    // Contador de perfiles que quedan visibles
    let perfilesVisibles = 0;


    // Revisar todas las tarjetas
    tarjetasPerfiles.forEach(function (tarjeta) {

        const contenidoTarjeta =
            normalizarTexto(tarjeta.textContent);

        const precioPerfil =
            obtenerPrecio(tarjeta);


        // ---------- BUSCADOR ----------

        const coincideBusqueda =
            contenidoTarjeta.includes(textoBusqueda);


        // ---------- SERVICIO ----------

        let coincideServicio = true;

        if (servicioSeleccionado !== "") {

            coincideServicio =
                contenidoTarjeta.includes(
                    servicioSeleccionado
                );
        }


        // ---------- UBICACIÓN ----------

        let coincideUbicacion = true;

        if (ubicacionSeleccionada !== "") {

            coincideUbicacion =
                contenidoTarjeta.includes(
                    ubicacionSeleccionada
                );
        }


        // ---------- PRECIO ----------

        let coincidePrecio = true;

        if (precioSeleccionado === "30000") {

            // Hasta $30.000
            coincidePrecio =
                precioPerfil <= 30000;

        } else if (precioSeleccionado === "50000") {

            // Entre $30.000 y $50.000
            coincidePrecio =
                precioPerfil > 30000 &&
                precioPerfil <= 50000;

        } else if (precioSeleccionado === "50001") {

            // Más de $50.000
            coincidePrecio =
                precioPerfil > 50000;
        }


        // ---------- DISPONIBILIDAD ----------

        let coincideDisponibilidad = true;

        if (disponibilidadSeleccionada === "hoy") {

            coincideDisponibilidad =
                contenidoTarjeta.includes(
                    "disponible hoy"
                );

        } else if (
            disponibilidadSeleccionada === "semana"
        ) {

            coincideDisponibilidad =
                contenidoTarjeta.includes(
                    "disponible esta semana"
                );
        }


        // ---------- RESULTADO FINAL ----------

        if (
            coincideBusqueda &&
            coincideServicio &&
            coincideUbicacion &&
            coincidePrecio &&
            coincideDisponibilidad
        ) {

            tarjeta.style.display = "block";

            perfilesVisibles++;

        } else {

            tarjeta.style.display = "none";
        }

    });


    // ---------- MENSAJE SIN RESULTADOS ----------

    if (perfilesVisibles === 0) {

        mensajeSinResultados.style.display = "block";

    } else {

        mensajeSinResultados.style.display = "none";
    }
}


// ---------- EVENTOS ----------

// Buscar con botón
botonBuscar.addEventListener(
    "click",
    filtrarPerfiles
);


// Buscar con Enter
inputBusqueda.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Enter") {

            filtrarPerfiles();
        }
    }
);


// Filtrar por servicio
filtroServicio.addEventListener(
    "change",
    filtrarPerfiles
);


// Filtrar por precio
filtroPrecio.addEventListener(
    "change",
    filtrarPerfiles
);


// Filtrar por ubicación
filtroUbicacion.addEventListener(
    "change",
    filtrarPerfiles
);


// Filtrar por disponibilidad
filtroDisponibilidad.addEventListener(
    "change",
    filtrarPerfiles
);