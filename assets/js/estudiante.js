document.addEventListener("DOMContentLoaded", () => {
    // Manejar submenús
    document.querySelectorAll('.toggle-menu').forEach(menu => {
        menu.addEventListener('click', function (e) {
            e.preventDefault();

            const subMenu = this.querySelector('.submenu'); // Submenú
            const arrowIcon = this.querySelector('.arrows'); // Flecha

            // Ocultar otros submenús abiertos
            document.querySelectorAll('.submenu').forEach(otherMenu => {
                if (otherMenu !== subMenu) {
                    otherMenu.classList.remove('show');
                    const otherArrow = otherMenu.parentElement.querySelector('.arrows');
                    if (otherArrow) {
                        otherArrow.classList.remove('rotate');
                    }
                }
            });

            // Alternar visibilidad del submenú actual
            if (subMenu) {
                subMenu.classList.toggle('show');
            }
            if (arrowIcon) {
                arrowIcon.classList.toggle('rotate');
            }
        });
    });

    // Manejar modo oscuro
    const darkModeToggle = document.getElementById('darkmode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode', darkModeToggle.checked);

            // Opcional: Cambiar otros elementos si es necesario
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.classList.toggle('dark-mode', darkModeToggle.checked);
            }
        });
    }
});
