// Translations Object
const translations = {
    pt: {
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contato',
        'hero.greeting': 'Olá! Sou Leandro Feder',
        'hero.subtitle': 'Desenvolvedor de Software Sênior',
        'hero.description': 'Especialista em desenvolvimento backend e integração de sistemas com mais de 10 anos de experiência. Apaixonado por criar soluções robustas, escaláveis e de alta qualidade.',
        'hero.contact': 'Entre em contato',
        'hero.experience': 'Veja minha experiência',
        'about.title': 'Sobre Mim',
        'about.paragraph1': 'Sou um desenvolvedor de software sênior com formação em Engenharia Elétrica pela UNIASSELVI. Minha jornada começou com eletrônica industrial e evoluiu para desenvolvimento de software de alta complexidade.',
        'about.paragraph2': 'Atualmente atuo como Product Owner e Technical Lead em sistemas de qualidade, onde coordeno desenvolvimento de soluções complexas, integração de sistemas e otimização de processos.',
        'about.paragraph3': 'Sou defensor de código limpo, testes automatizados e boas práticas de engenharia de software. Gosto de trabalhar em equipes colaborativas e sempre busco aprender novas tecnologias.',
        'about.languages': '🌍 Idiomas',
        'about.portuguese': 'Português (Brasil)',
        'about.english': 'Inglês',
        'about.fluent': 'Fluente',
        'about.intermediate': 'Intermediário',
        'about.yearsExperience': 'Anos de Experiência',
        'about.projectsCompleted': 'Projetos Concluídos',
        'about.languages': 'Linguagens',
        'experience.title': 'Experiência Profissional',
        'experience.weg.role': 'Senior Software Developer',
        'experience.weg.period': 'jun 2023 - Presente • 2 anos 9 meses',
        'experience.weg.location': '📍 Presencial - Blumenau, Santa Catarina',
        'experience.weg.title': 'Product Owner e Technical Lead do Time de Sistemas de Qualidade',
        'experience.weg.resp1': 'Desenvolvimento e suporte de sistemas para testes de transformadores',
        'experience.weg.resp2': 'Integração entre sistemas de laboratório e corporativos',
        'experience.weg.resp3': 'Comunicação entre sistemas de testes e equipamentos de medição',
        'experience.weg.resp4': 'Desenvolvimento em Java, JavaScript e LabVIEW',
        'experience.weg.resp5': 'Gestão e otimização de desempenho de banco de dados PostgreSQL',
        'experience.weg.resp6': 'Automação de sistemas para aumentar eficiência e confiabilidade',
        'experience.zenvia.role': 'Operations Developer',
        'experience.zenvia.period': 'abr 2022 - jun 2023 • 1 ano 3 meses',
        'experience.zenvia.location': '🌐 Remoto',
        'experience.zenvia.resp1': 'Desenvolvimento de assistentes virtuais (chatbots)',
        'experience.zenvia.resp2': 'Desenvolvimento de APIs REST',
        'experience.zenvia.resp3': 'Testes unitários de APIs com Jest.js',
        'experience.hdj.role': 'Fitter - Técnico em Eletrônica',
        'experience.hdj.period': 'out 2013 - set 2021 • 8 anos',
        'experience.hdj.location': '📍 Presencial - Blumenau, Santa Catarina',
        'experience.hdj.resp1': 'Montagem e manutenção de placas eletrônicas',
        'experience.hdj.resp2': 'Soldagem de componentes eletrônicos',
        'skills.title': 'Habilidades Técnicas',
        'skills.backend': 'Backend',
        'skills.frontend': 'Frontend',
        'skills.database': 'Banco de Dados',
        'skills.tools': 'Ferramentas & DevOps',
        'skills.testing': 'Testing & QA',
        'skills.specialized': 'Especializado',
        'contact.title': 'Vamos Conversar?',
        'contact.subtitle': 'Estou aberto a novas oportunidades, projetos interessantes e colaborações. Entre em contato via LinkedIn ou GitHub.',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.email': 'Email',
        'contact.note': 'Atualize os links acima com seus perfis reais',
        'footer.copyright': '© 2024 Leandro Feder. Todos os direitos reservados.'
    },
    en: {
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'hero.greeting': 'Hello! I\'m Leandro Feder',
        'hero.subtitle': 'Senior Software Developer',
        'hero.description': 'Backend development specialist and systems integration expert with over 10 years of experience. Passionate about creating robust, scalable, and high-quality solutions.',
        'hero.contact': 'Get in touch',
        'hero.experience': 'See my experience',
        'about.title': 'About Me',
        'about.paragraph1': 'I\'m a senior software developer with a degree in Electrical Engineering from UNIASSELVI. My journey started with industrial electronics and evolved into high-complexity software development.',
        'about.paragraph2': 'Currently, I work as a Product Owner and Technical Lead in quality systems, coordinating the development of complex solutions, systems integration, and process optimization.',
        'about.paragraph3': 'I\'m an advocate for clean code, automated testing, and software engineering best practices. I enjoy working in collaborative teams and always seek to learn new technologies.',
        'about.languages': '🌍 Languages',
        'about.portuguese': 'Portuguese (Brazil)',
        'about.english': 'English',
        'about.fluent': 'Fluent',
        'about.intermediate': 'Intermediate',
        'about.yearsExperience': 'Years of Experience',
        'about.projectsCompleted': 'Projects Completed',
        'about.languages': 'Languages',
        'experience.title': 'Professional Experience',
        'experience.weg.role': 'Senior Software Developer',
        'experience.weg.period': 'Jun 2023 - Present • 2 years 9 months',
        'experience.weg.location': '📍 On-Site - Blumenau, Santa Catarina',
        'experience.weg.title': 'Product Owner and Technical Lead of Quality Systems Team',
        'experience.weg.resp1': 'Development and support of systems for transformer testing',
        'experience.weg.resp2': 'Integration between laboratory and corporate systems',
        'experience.weg.resp3': 'Communication between test systems and measurement equipment',
        'experience.weg.resp4': 'Development in Java, JavaScript, and LabVIEW',
        'experience.weg.resp5': 'Management and optimization of PostgreSQL database performance',
        'experience.weg.resp6': 'Systems automation to increase efficiency and reliability',
        'experience.zenvia.role': 'Operations Developer',
        'experience.zenvia.period': 'Apr 2022 - Jun 2023 • 1 year 3 months',
        'experience.zenvia.location': '🌐 Remote',
        'experience.zenvia.resp1': 'Development of virtual assistants (chatbots)',
        'experience.zenvia.resp2': 'Development of REST APIs',
        'experience.zenvia.resp3': 'Unit testing of APIs with Jest.js',
        'experience.hdj.role': 'Fitter - Electronics Technician',
        'experience.hdj.period': 'Oct 2013 - Sep 2021 • 8 years',
        'experience.hdj.location': '📍 On-Site - Blumenau, Santa Catarina',
        'experience.hdj.resp1': 'Assembly and maintenance of electronic boards',
        'experience.hdj.resp2': 'Soldering of electronic components',
        'skills.title': 'Technical Skills',
        'skills.backend': 'Backend',
        'skills.frontend': 'Frontend',
        'skills.database': 'Database',
        'skills.tools': 'Tools & DevOps',
        'skills.testing': 'Testing & QA',
        'skills.specialized': 'Specialized',
        'contact.title': 'Let\'s Talk?',
        'contact.subtitle': 'I\'m open to new opportunities, interesting projects, and collaborations. Get in touch via LinkedIn or GitHub.',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.email': 'Email',
        'contact.note': 'Update the links above with your actual profiles',
        'footer.copyright': '© 2024 Leandro Feder. All rights reserved.'
    },
    es: {
        'nav.about': 'Acerca de',
        'nav.experience': 'Experiencia',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contacto',
        'hero.greeting': '¡Hola! Soy Leandro Feder',
        'hero.subtitle': 'Desarrollador de Software Senior',
        'hero.description': 'Especialista en desarrollo backend e integración de sistemas con más de 10 años de experiencia. Apasionado por crear soluciones robustas, escalables y de alta calidad.',
        'hero.contact': 'Ponte en contacto',
        'hero.experience': 'Ver mi experiencia',
        'about.title': 'Acerca de Mí',
        'about.paragraph1': 'Soy un desarrollador de software senior con formación en Ingeniería Eléctrica por UNIASSELVI. Mi carrera comenzó con electrónica industrial y evolucionó hacia el desarrollo de software de alta complejidad.',
        'about.paragraph2': 'Actualmente trabajo como Product Owner y Technical Lead en sistemas de calidad, coordinando el desarrollo de soluciones complejas, integración de sistemas y optimización de procesos.',
        'about.paragraph3': 'Soy defensor del código limpio, pruebas automatizadas y mejores prácticas de ingeniería de software. Me gusta trabajar en equipos colaborativos y siempre busco aprender nuevas tecnologías.',
        'about.languages': '🌍 Idiomas',
        'about.portuguese': 'Portugués (Brasil)',
        'about.english': 'Inglés',
        'about.fluent': 'Fluido',
        'about.intermediate': 'Intermedio',
        'about.yearsExperience': 'Años de Experiencia',
        'about.projectsCompleted': 'Proyectos Completados',
        'about.languages': 'Lenguajes',
        'experience.title': 'Experiencia Profesional',
        'experience.weg.role': 'Desarrollador de Software Senior',
        'experience.weg.period': 'jun 2023 - Presente • 2 años 9 meses',
        'experience.weg.location': '📍 Presencial - Blumenau, Santa Catarina',
        'experience.weg.title': 'Product Owner y Technical Lead del Equipo de Sistemas de Calidad',
        'experience.weg.resp1': 'Desarrollo y soporte de sistemas para pruebas de transformadores',
        'experience.weg.resp2': 'Integración entre sistemas de laboratorio y corporativos',
        'experience.weg.resp3': 'Comunicación entre sistemas de prueba y equipos de medición',
        'experience.weg.resp4': 'Desarrollo en Java, JavaScript y LabVIEW',
        'experience.weg.resp5': 'Gestión y optimización del desempeño de la base de datos PostgreSQL',
        'experience.weg.resp6': 'Automatización de sistemas para aumentar eficiencia y confiabilidad',
        'experience.zenvia.role': 'Desarrollador de Operaciones',
        'experience.zenvia.period': 'abr 2022 - jun 2023 • 1 año 3 meses',
        'experience.zenvia.location': '🌐 Remoto',
        'experience.zenvia.resp1': 'Desarrollo de asistentes virtuales (chatbots)',
        'experience.zenvia.resp2': 'Desarrollo de APIs REST',
        'experience.zenvia.resp3': 'Pruebas unitarias de APIs con Jest.js',
        'experience.hdj.role': 'Montador - Técnico de Electrónica',
        'experience.hdj.period': 'oct 2013 - sep 2021 • 8 años',
        'experience.hdj.location': '📍 Presencial - Blumenau, Santa Catarina',
        'experience.hdj.resp1': 'Montaje y mantenimiento de placas electrónicas',
        'experience.hdj.resp2': 'Soldadura de componentes electrónicos',
        'skills.title': 'Habilidades Técnicas',
        'skills.backend': 'Backend',
        'skills.frontend': 'Frontend',
        'skills.database': 'Base de Datos',
        'skills.tools': 'Herramientas y DevOps',
        'skills.testing': 'Pruebas y QA',
        'skills.specialized': 'Especializado',
        'contact.title': '¿Hablamos?',
        'contact.subtitle': 'Estoy abierto a nuevas oportunidades, proyectos interesantes y colaboraciones. Ponte en contacto a través de LinkedIn o GitHub.',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.email': 'Correo Electrónico',
        'contact.note': 'Actualiza los enlaces anteriores con tus perfiles reales',
        'footer.copyright': '© 2024 Leandro Feder. Todos los derechos reservados.'
    }
};

// Get stored language or default to Portuguese
let currentLanguage = localStorage.getItem('language') || 'pt';
let currentTheme = localStorage.getItem('theme') || 'dark';

// Initialize theme on page load
function initializeTheme() {
    setTheme(currentTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);

    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) themeIcon.textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) themeIcon.textContent = '🌙';
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Language switching functions
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function setupLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    setLanguage(currentLanguage);
    setupLanguageButtons();

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    smoothScroll();
});

// Smooth scroll for anchor links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offset = 80; // navbar height
                const targetPosition = target.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.experience-card, .skill-category, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile menu toggle (if you add a hamburger menu later)
const isMobile = window.innerWidth < 768;

// Handle resize
window.addEventListener('resize', function() {
    const nowMobile = window.innerWidth < 768;
    if (nowMobile !== isMobile) {
        location.reload(); // Simple refresh on size change
    }
});
