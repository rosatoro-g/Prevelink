const servicioGuardado = localStorage.getItem("nuevoServicio");

if (servicioGuardado) {

    const servicio = JSON.parse(servicioGuardado);

    const contenedor = document.querySelector(".contenedor-servicios");

    const nuevaTarjeta = document.createElement("article");

    nuevaTarjeta.classList.add("tarjeta-servicio");

    nuevaTarjeta.innerHTML = `
        <div class="imagen-servicio">
            Imagen
        </div>

        <div class="informacion-servicio">

            <h3>${servicio.nombre}</h3>

            <p>${servicio.descripcion}</p>

            <p class="precio">
                $${Number(servicio.precio).toLocaleString("es-CL")}
            </p>

            <p>
                ${servicio.ubicacion}
            </p>

        </div>
    `;

    contenedor.appendChild(nuevaTarjeta);
}