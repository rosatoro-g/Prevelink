function validarPaso(paso) {
  const contenedorPaso = document.getElementById(`paso-${paso}`);
  const inputs = contenedorPaso.querySelectorAll('input[required], textarea[required]');
  let esValido = true;

  inputs.forEach(input => {
    const grupo = input.closest('.grupo-input');
    
    if (!input.checkValidity()) {
      esValido = false;
      if (grupo) grupo.classList.add('error');
    } else {
      if (grupo) grupo.classList.remove('error');
    }
  });

  return esValido;
}

function siguientePaso(pasoActual) {
  if (!validarPaso(pasoActual)) return;

  const pasoSiguiente = pasoActual + 1;
  document.getElementById(`paso-${pasoActual}`).classList.remove('activo');
  document.getElementById(`paso-${pasoSiguiente}`).classList.add('activo');

  actualizarIndicadores(pasoSiguiente);
}

function anteriorPaso(pasoActual) {
  const pasoAnterior = pasoActual - 1;
  document.getElementById(`paso-${pasoActual}`).classList.remove('activo');
  document.getElementById(`paso-${pasoAnterior}`).classList.add('activo');

  actualizarIndicadores(pasoAnterior);
}

function actualizarIndicadores(paso) {
  const lineaFill = document.getElementById('barra-fill');
  const porcentajes = { 1: '0%', 2: '50%', 3: '100%' };
  lineaFill.style.width = porcentajes[paso];

  for (let i = 1; i <= 3; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (i <= paso) {
      dot.classList.add('activo');
    } else {
      dot.classList.remove('activo');
    }
  }
}

document.getElementById('fotos').addEventListener('change', function(e) {
  const textoUpload = document.getElementById('texto-upload');
  const archivos = e.target.files;

  if (archivos.length === 1) {
    textoUpload.textContent = `Archivo seleccionado: ${archivos[0].name}`;
    textoUpload.classList.add('archivo-cargado');
  } else if (archivos.length > 1) {
    textoUpload.textContent = `${archivos.length} archivos seleccionados`;
    textoUpload.classList.add('archivo-cargado');
  } else {
    textoUpload.textContent = 'Adjunta al menos una foto de perfil';
    textoUpload.classList.remove('archivo-cargado');
  }
});

document.getElementById('form-registro').addEventListener('submit', function(e) {
  e.preventDefault();
  if (validarPaso(3)) {
    alert('¡Registro completado con éxito!');
  }
});