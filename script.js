// Función para validar un paso específico
function validarPaso(paso) {
  const contenedorPaso = document.getElementById(`paso-${paso}`);
  const inputs = contenedorPaso.querySelectorAll('input[required], textarea[required]');
  let esValido = true;

  inputs.forEach(input => {
    const contenedorCampo = input.closest('.campo') || input.closest('.campo-foto');
    
    // Si no pasa la validación nativa del navegador (vacío, patrón incorrecto, etc.)
    if (!input.checkValidity()) {
      esValido = false;
      if (contenedorCampo) contenedorCampo.classList.add('error');
    } else {
      if (contenedorCampo) contenedorCampo.classList.remove('error');
    }
  });

  return esValido;
}

// Cambiar al siguiente paso
function siguientePaso(pasoActual) {
  if (!validarPaso(pasoActual)) return;

  const pasoSiguiente = pasoActual + 1;
  document.getElementById(`paso-${pasoActual}`).classList.remove('activo');
  document.getElementById(`paso-${pasoSiguiente}`).classList.add('activo');

  actualizarProgreso(pasoSiguiente);
}

// Volver al paso anterior
function anteriorPaso(pasoActual) {
  const pasoAnterior = pasoActual - 1;
  document.getElementById(`paso-${pasoActual}`).classList.remove('activo');
  document.getElementById(`paso-${pasoAnterior}`).classList.add('activo');

  actualizarProgreso(pasoAnterior);
}

// Actualizar barra e indicadores
function actualizarProgreso(paso) {
  const barra = document.getElementById('barra-progreso');
  const porcentajes = { 1: '33.33%', 2: '66.66%', 3: '100%' };
  barra.style.width = porcentajes[paso];

  const dots = document.querySelectorAll('.paso-dot');
  dots.forEach((dot, idx) => {
    if (idx < paso) {
      dot.classList.add('activo');
    } else {
      dot.classList.remove('activo');
    }
  });
}

// Evento al presionar enviar en el último paso
document.getElementById('registro-trabajadora').addEventListener('submit', function(e) {
  e.preventDefault();
  if (validarPaso(3)) {
    alert('¡Registro enviado con éxito! Perfil en proceso de revisión.');
  }
});