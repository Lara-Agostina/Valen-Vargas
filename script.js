document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECCIÓN DE ELEMENTOS
    // Asegúrate de que estos IDs coincidan con tu HTML
    const btnMenu = document.getElementById('menu-toggle-btn');
    const menuLinks = document.getElementById('nav-menu-list');
    const btnTickets = document.getElementById('btn-tickets');

    // 2. LÓGICA DEL MENÚ HAMBURGUESA
    if (btnMenu && menuLinks) {
        btnMenu.addEventListener('click', (e) => {
            e.preventDefault();
            menuLinks.classList.toggle('active');
            btnMenu.classList.toggle('open'); // Por si quieres animar la X
            console.log("Menú interactuado");
        });
    }

    // 3. DESPLAZAMIENTO SUAVE (SMOOTH SCROLL) Y CERRAR MENÚ
    // Buscamos todos los enlaces que van a un ID (#)
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Quitamos el menú en móvil al hacer clic
            if (menuLinks) menuLinks.classList.remove('active');
            if (btnMenu) btnMenu.classList.remove('open');

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Ajuste para que el menú no tape el título
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. CAMBIO DE COLOR DEL MENÚ AL HACER SCROLL
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            nav.classList.remove('scrolled');
            nav.style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });

    // 5. BOTÓN DE TICKETS
    if (btnTickets) {
        btnTickets.addEventListener('click', () => {
            alert('Redirigiendo a la plataforma de entradas...');
            // window.location.href = "https://tu-link-de-tickets.com";
        });
    }
});
