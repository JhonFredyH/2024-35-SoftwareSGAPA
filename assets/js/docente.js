document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
    const darkModeToggle = document.getElementById("darkmode-toggle");

    // Alternar menú lateral
    nav.onclick = function () {
        sidebar.classList.toggle("active");
        main.classList.toggle("active");

        // Rotar el ícono del menú
        nav.querySelector("i").classList.toggle("rotate");

        // Actualizar visibilidad de los nombres
        document.querySelectorAll('.link_name').forEach(linkName => {
            if (sidebar.classList.contains('active')) {
                linkName.classList.add('hidden'); // Ocultar nombres
            } else {
                linkName.classList.remove('hidden'); // Mostrar nombres
            }
        });
    };

    // Manejar submenús y flechas
    document.querySelectorAll('.toggle-menu').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const subMenu = this.parentElement.nextElementSibling;
            const arrowIcon = this.querySelector('.arrows');

            // Ocultar todos los demás submenús abiertos
            document.querySelectorAll('.sub_menu').forEach(menu => {
                if (menu !== subMenu) {
                    menu.classList.remove('show');
                    menu.previousElementSibling.querySelector('.arrows').classList.remove('rotate');
                }
            });

            // Alternar el submenú actual
            if (subMenu) {
                subMenu.classList.toggle('show');
                arrowIcon.classList.toggle('rotate');
            }
        });
    });

    // Cambiar color dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", () => {
            document.body.classList.toggle("dark", darkModeToggle.checked);
            if (sidebar) {
                sidebar.classList.toggle("dark", darkModeToggle.checked);
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelectorAll('.toggle-menu').forEach(menu => {
        menu.addEventListener('click', function (e) {
            e.preventDefault(); 

            const subMenu = this.querySelector('.submenu'); // Buscar el submenú dentro del contenedor
            const arrowIcon = this.querySelector('.arrows'); // Buscar la flecha dentro del contenedor

            // Ocultar todos los demás submenús abiertos
            document.querySelectorAll('.submenu').forEach(otherMenu => {
                if (otherMenu !== subMenu) {
                    otherMenu.classList.remove('show');
                    otherMenu.parentElement.querySelector('.arrows').classList.remove('rotate');
                }
            });

            // Alternar el submenú actual
            if (subMenu) {
                subMenu.classList.toggle('show');
                if (arrowIcon) {
                    arrowIcon.classList.toggle('rotate');
                }
            }
        });
    });
});

