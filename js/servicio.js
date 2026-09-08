const formulario = document.querySelector(".formulario-servicio");


formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();


    // ---------- OBTENER DATOS DEL FORMULARIO ----------

    const nombre =
        document.getElementById("nombre").value;

    const categoria =
        document.getElementById("categoria").value;

    const descripcion =
        document.getElementById("descripcion").value;

    const precio =
        document.getElementById("precio").value;

    const ubicacion =
        document.getElementById("ubicacion").value;

    const inputImagen =
        document.getElementById("imagen");


    // ---------- OBTENER IMAGEN ----------

    const archivoImagen =
        inputImagen.files[0];


    let rutaImagen = null;


    // Si seleccionó una imagen,
    // guardamos solamente su ruta dentro de img/

    if (archivoImagen) {

        rutaImagen =
            "img/" + archivoImagen.name;
    }


    // ---------- CREAR SERVICIO ----------

    const nuevoServicio = {

        nombre: nombre,

        categoria: categoria,

        descripcion: descripcion,

        precio: precio,

        ubicacion: ubicacion,

        imagen: rutaImagen
    };


    // ---------- OBTENER SERVICIOS ANTERIORES ----------

    const serviciosGuardados =
        localStorage.getItem("servicios");


    let servicios = [];


    if (serviciosGuardados) {

        servicios =
            JSON.parse(serviciosGuardados);
    }


    // ---------- AGREGAR SERVICIO ----------

    servicios.push(nuevoServicio);


    // ---------- GUARDAR ----------

    localStorage.setItem(
        "servicios",
        JSON.stringify(servicios)
    );


    // ---------- VOLVER AL PERFIL ----------

    window.location.href = "perfil.html";

});