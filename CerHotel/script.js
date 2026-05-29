document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }

                let current = '';
                const sections = document.querySelectorAll('section, footer');
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= (sectionTop - 150)) {
                        current = section.getAttribute('id');
                    }
                });

                links.forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href').includes(current) && current !== '') {
                        a.classList.add('active');
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });
});