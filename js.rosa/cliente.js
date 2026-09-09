const rolUsuario = localStorage.getItem('rol_usuario')

if (rolUsuario !== 'cliente') {
    alert('Acceso no autorizado. Inicia sesión como cliente.')
    window.location.href = 'inicio-sesion.html'
}