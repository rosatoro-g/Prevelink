const rolUsuario = localStorage.getItem('rol_usuario')

if (rolUsuario !== 'admin') {
    alert('Acceso no autorizado. Inicia sesión como administrador.')
    window.location.href = 'inicio-admin.html'
}