const formulario = document.querySelector(".formulario-servicio");

formulario.addEventListener("submit", function (evento) {

    // Evita que el formulario recargue la página
    evento.preventDefault();


    // Obtener los datos escritos en el formulario
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value;
    const precio = document.getElementById("precio").value;
    const ubicacion = document.getElementById("ubicacion").value;


    // Crear un servicio con esos datos
    const nuevoServicio = {
        nombre: nombre,
        categoria: categoria,
        descripcion: descripcion,
        precio: precio,
        ubicacion: ubicacion
    };


    // Guardar el servicio temporalmente en el navegador
    localStorage.setItem(
        "nuevoServicio",
        JSON.stringify(nuevoServicio)
    );


    // Volver al perfil
    window.location.href = "perfil.html";

});