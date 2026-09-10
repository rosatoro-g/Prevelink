class Layout {

    crearNavbar() {
        const navbar = document.getElementById("navbar");

        navbar.innerHTML = `
            <nav class="navbar">

                <div class="logo">
                    <a href="feed.html">PrivéLink</a>
                </div>

                <div class="navbar-links">
                    <a href="feed.html">Explorar</a>
                    <a href="perfil.html">Mi perfil</a>
                    <a href="index.html">Cerrar sesión</a>
                </div>

            </nav>
        `;
    }


    crearFooter() {
        const footer = document.getElementById("footer");

        footer.innerHTML = `
            <div class="footer-contenido">

                <span class="footer-logo">
                    PrivéLink
                </span>

                <p> © 2026 PrivéLink · Todos los derechos reservados </p>

            </div>
        `;
    }
}


document.addEventListener("DOMContentLoaded", () => {

    const layout = new Layout();

    layout.crearNavbar();
    layout.crearFooter();

});