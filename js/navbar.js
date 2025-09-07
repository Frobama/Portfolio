const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show');
            menuToggle.textContent = menu.classList.contains('show') ? '✕' : '☰';
        });

        // Cerrar menu al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
                menu.classList.remove('show');
                menuToggle.textContent = '☰';
            }
        });