class Layout {

    crearNavbar() {
        const navbar = document.getElementById("navbar");

        navbar.innerHTML = `
            <nav class="navbar">

                <div class="logo">
                    <a href="feed.html">PrivéLink</a>
                </div>

                <div class="navbar-links">
                    <a href="feed.html">Inicio</a>
                    <a href="#">Mi perfil</a>
                    <a href="index.html">Cerrar sesión</a>
                </div>

            </nav>
        `;
    }


    crearFooter() {
        const footer = document.getElementById("footer");

        footer.innerHTML = `
            <p>© 2026 PrivéLink</p>
        `;
    }
}


document.addEventListener("DOMContentLoaded", () => {

    const layout = new Layout();

    layout.crearNavbar();
    layout.crearFooter();

});