document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.service-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            document.querySelectorAll('.service-tab').forEach(t => 
                t.classList.remove('active'));
            document.querySelectorAll('.service-content').forEach(c => 
                c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const contentId = tab.getAttribute('data-tab');
            const content = document.getElementById(contentId);
            if (content) {
                content.classList.add('active');
            }
        });
    });
}); 

// Função para carregar o navbar
async function loadNavbar() {
    try {
        const response = await fetch('/components/navbar.html');
        const data = await response.text();
        document.getElementById('navbar-placeholder').innerHTML = data;

        // Ativa o menu mobile após carregar o navbar
        const burger = document.querySelector('.navbar-burger');
        const menu = document.querySelector('.navbar-menu');
        
        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    } catch (error) {
        console.error('Erro ao carregar o navbar:', error);
    }
}

// Carrega o navbar quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', loadNavbar); 



document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade do burger menu
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    
    burger?.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    // Funcionalidade dos dropdowns no mobile
    const dropdowns = document.querySelectorAll('.navbar-item.has-dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 1023) {
                e.preventDefault();
                dropdown.classList.toggle('is-active');
            }
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !burger.contains(e.target)) {
            menu.classList.remove('is-active');
            burger.classList.remove('is-active');
        }
    });
});

// Funcionalidade do Modal de Privacidade
document.addEventListener('DOMContentLoaded', () => {
    const privacyLink = document.querySelector('a[href="#"]');
    const modal = document.getElementById('privacyModal');
    const closeButtons = modal.querySelectorAll('.delete, .modal-close-button, .modal-background');
    
    // Abre o modal
    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('is-active');
    });
    
    // Fecha o modal
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.remove('is-active');
        });
    });
    
    // Fecha o modal com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-active')) {
            modal.classList.remove('is-active');
        }
    });
});