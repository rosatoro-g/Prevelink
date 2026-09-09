const botonInicioSesion = document.getElementById('btn-inicio-sesion')

if (botonInicioSesion) {
    botonInicioSesion.addEventListener('click', function(e) {
        e.preventDefault()

        const inputEmail = document.getElementById('exampleDropdownFormEmail1')
        
        if (inputEmail) {
            const email = inputEmail.value.trim()
            const paginaActual = window.location.pathname

            // 1. SI ESTÁ EN LA PÁGINA DE ADMIN / COLABORADOR (inicio-admin.html)
            if (paginaActual.includes('inicio-admin.html')) {
                const rolSeleccionado = document.querySelector('input[name="rolSelect"]:checked')
                const valorRol = rolSeleccionado ? rolSeleccionado.value : 'admin'

                if (valorRol === 'admin' && email === 'Admin@tienda.cl') {
                    localStorage.setItem('rol_usuario', 'admin')
                    // Te redirige a la página privada del Admin (ej: perfil o un dashboard privado)
                    window.location.href = 'index.html' 
                } else if (valorRol === 'colaborador' && email === 'Colaborador@tienda.cl') {
                    localStorage.setItem('rol_usuario', 'colaborador')
                    window.location.href = 'perfil.html'
                } else {
                    alert('Este correo no corresponde al rol seleccionado en el área administrativa.')
                }
            } 
            // 2. SI ESTÁ EN LA PÁGINA DE CLIENTES (inicio-sesion.html)
            else {
                if (email === 'Cliente@gmail.com') {
                    localStorage.setItem('rol_usuario', 'cliente')
                    window.location.href = 'feed.html'
                } else {
                    alert('Credenciales incorrectas o correo no registrado como cliente.')
                }
            }
        }
    })
}