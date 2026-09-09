const rolUsuario = localStorage.getItem('rol_usuario')

if (rolUsuario !== 'colaborador') {
    alert('Acceso no autorizado. Inicia sesión como colaborador.')
    window.location.href = 'inicio-admin.html'
}