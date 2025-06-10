document.addEventListener('DOMContentLoaded', () => {
    
    // --- CABEÇALHO DINÂMICO ---
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // --- GALERIA DE ROLAGEM HORIZONTAL ---
    const galleryWrapper = document.querySelector('.horizontal-gallery-wrapper');
    if (galleryWrapper) {
        const galleryContainer = galleryWrapper.querySelector('.horizontal-gallery-container');
        const scrollHint = galleryWrapper.querySelector('.scroll-hint');
        let hintHidden = false;

        const handleScroll = (evt) => {
            evt.preventDefault();
            if (!hintHidden && scrollHint) {
                scrollHint.classList.add('hidden');
                hintHidden = true;
            }
            // A rolagem horizontal agora é feita nativamente pelo CSS overflow-x: auto
            // Mas mantemos o listener para esconder a dica.
            // Para "sequestrar" o scroll vertical:
            galleryContainer.scrollLeft += evt.deltaY;
        };

        galleryContainer.addEventListener('wheel', handleScroll, { passive: false });
    }
    
    // --- MODAL DA GALERIA ---
    const modal = document.getElementById("modal");
    if (modal) {
        const modalImg = document.getElementById("modal-img");
        const fecharModal = document.querySelector(".fechar-modal");

        document.querySelectorAll(".img-thumb").forEach(img => {
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = img.src;
            });
        });
        fecharModal.addEventListener("click", () => modal.style.display = "none");
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });
    }

    // --- VÍDEO PLAYER CUSTOMIZADO ---
    const video = document.getElementById('portfolio-video');
    const playButton = document.getElementById('play-button');
    if (video && playButton) {
        const togglePlay = () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        };
        playButton.addEventListener('click', togglePlay);
        video.addEventListener('click', togglePlay);
        video.addEventListener('pause', () => playButton.classList.remove('hidden'));
        video.addEventListener('play', () => playButton.classList.add('hidden'));
    }

    // --- FORMULÁRIO COM PACOTES DINÂMICOS ---
    const eventoSelect = document.getElementById('evento');
    const pacoteSelect = document.getElementById('pacote');
    if (eventoSelect && pacoteSelect) {
        const pacotes = {
            casamento: ['Básico (Cerimônia)', 'Padrão (Making of + Festa)', 'Premium (Completo + Vídeo)'],
            aniversario: ['Simples (3h)', 'Completo (Festa toda)'],
            gestante: ['Ensaio Externo', 'Ensaio em Estúdio'],
            corporativo: ['Vídeo Institucional', 'Cobertura Fotográfica de Evento']
        };

        eventoSelect.addEventListener('change', () => {
            const evento = eventoSelect.value;
            let opcoes = '<option value="" disabled selected>Pacote de serviços</option>';
            if (evento && pacotes[evento]) {
                pacotes[evento].forEach(pacote => {
                    opcoes += `<option value="${pacote.toLowerCase().replace(/\s/g, '-')}">${pacote}</option>`;
                });
            }
            pacoteSelect.innerHTML = opcoes;
        });
    }

    // --- ANIMAÇÕES DE ENTRADA (SCROLL) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section-header, .ensaios-grid, #contact-form, .horizontal-gallery-wrapper').forEach(el => {
        el.classList.add('anim-reveal');
        observer.observe(el);
    });
});

// --- LÓGICA DO MENU MOBILE (HAMBURGER) ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('main-nav');
    const navLinks = mobileNav.querySelectorAll('a');

    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', () => {
            // Adiciona/remove a classe 'active' para mostrar/esconder o menu e animar o botão
            mobileNav.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');

            // Atualiza o atributo aria-expanded para acessibilidade
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
        });

        // Adiciona um listener para cada link do menu
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Fecha o menu quando um link é clicado
                if (mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }