const translations = {
    es: {
        nav: {
            inicio: 'Inicio',
            enygmalab: 'EnygmaLab',
            sobreMi: 'Sobre Mí',
            especialidades: 'Especialidades',
            proyectos: 'Proyectos',
            contacto: 'Contacto'
        },
        hero: {
            kicker: 'Anthony Barrera',
            lead: 'CTO at EnygmaLab | QA Automation & Software Development',
            subtitle: 'Fundador y CTO de <a href="https://enygmalab.com" target="_blank" style="color:inherit;font-weight:600;">EnygmaLab</a> — empresa de staff augmentation y soluciones de IA con ingenieros nearshore elite de LatAm. Lidero equipos multidisciplinarios de QA y desarrollo, automatizo procesos de testing y construyo software confiable a través de calidad, liderazgo y enseñanza.',
            ctaPrimary: 'EnygmaLab',
            ctaSecondary: 'Ver LinkedIn',
            signalTalent: 'Talento nearshore',
            signalMatching: 'Matching'
        },
        enygmalab: {
            title: 'EnygmaLab',
            tagline: 'Staff Augmentation & Soluciones de IA',
            description: 'Conectamos empresas con ingenieros nearshore elite de LatAm. Matching garantizado en 48 horas con talento del top 3%, perfiles alineados con zonas horarias EST/PST y onboarding ágil.',
            stats: {
                matching: 'Tiempo de Matching',
                talent: 'Talento Elite LatAm',
                profiles: 'Perfiles Disponibles',
                timezone: 'Alineación Horaria'
            },
            services: {
                staff: {
                    title: 'Staff Augmentation',
                    desc: 'Ingenieros veteados con proceso riguroso, listos para integrarse a tu equipo en días, no meses.',
                    item1: 'Full Stack (React / Node.js)',
                    item2: 'Java / Backend',
                    item3: 'QA Automation Engineers'
                },
                ai: {
                    title: 'AI Solutions',
                    desc: 'Soluciones de inteligencia artificial a medida, desde integración LLM hasta automatización de procesos.',
                    item1: 'Integración de modelos LLM',
                    item2: 'Automatización con IA',
                    item3: 'AI / LLM Engineers (próximamente)'
                },
                qa: {
                    title: 'Quality Engineering',
                    desc: 'Frameworks completos de automatización QA que reducen bugs y aceleran el ciclo de entrega.',
                    item1: 'Automatización QA (Cypress / Playwright)',
                    item2: 'Integración CI/CD con Jenkins',
                    item3: 'Testing end-to-end y estrategia'
                }
            },
            cta: 'Visita enygmalab.com'
        },
        about: {
            title: 'Sobre Mí',
            mainText: '¡Saludos! 👋 Soy Anthony, Ingeniero de Sistemas y CTO de EnygmaLab — una empresa de staff augmentation y soluciones de IA basada en la República Dominicana, especializada en conectar empresas con ingenieros nearshore elite de LatAm. Con más de 6 años de experiencia en automatización de pruebas y desarrollo de software, combino liderazgo técnico, visión de producto y formación de talento.',
            enygmalabTitle: 'EnygmaLab — Staff Augmentation & AI Solutions',
            enygmalabText: 'Como CTO y co-fundador, lidero la arquitectura técnica y los procesos de vetting de ingenieros en EnygmaLab. Ofrecemos matching en 48 horas con ingenieros en el top 3%, alineados con zonas horarias EST/PST. Perfiles actuales: Full Stack (React/Node), Java/Backend y QA Engineers.',
            learningTitle: 'Aprendizaje Continuo y Contribuciones',
            learningText: 'Busco activamente nuevas tecnologías y metodologías para mantenerme actualizado en un campo en constante evolución. Contribuyo a proyectos de código abierto y aplico consistentemente las habilidades aprendidas a escenarios prácticos del mundo real.',
            interestsTitle: 'Intereses Personales',
            interestsText: 'Fuera de la vida profesional, encuentro alegría en la lectura, la exploración de videojuegos y el arte visual, lo que me mantiene equilibrado y creativamente inspirado.',
            highlights: {
                cto: {
                    title: 'CTO & Co-Fundador — EnygmaLab',
                    content: 'Empresa de staff augmentation y soluciones de IA. Ingenieros nearshore elite LatAm con vetting top 3%, matching en 48h y alineación EST/PST.'
                },
                qa: {
                    title: 'Expertise en QA Automation',
                    content: 'Desarrollo de frameworks de automatización completos utilizando herramientas como Cypress y Selenium, reduciendo el tiempo de testing en un 30% en múltiples proyectos.'
                },
                dev: {
                    title: 'Desarrollo de Software',
                    content: 'Experiencia en desarrollo full-stack con enfoque en calidad y mejores prácticas. Especializado en arquitecturas escalables y microservicios con tecnologías modernas.'
                },
                security: {
                    title: 'Ciberseguridad & DevSecOps',
                    content: 'Rol clave en mejorar la seguridad de bases de datos de clientes usando SIEM y Firewalls, alineado con ISO27001 y estándares NIST.'
                },
                edu: {
                    title: 'Educación y Mentoría',
                    content: 'Profesor universitario y mentor técnico especializado en Java y metodologías ágiles. Comprometido con formar la próxima generación de desarrolladores.'
                }
            }
        },
        expertise: {
            title: 'Especialidades',
            intro: 'Áreas en las que combino liderazgo técnico, ejecución y visión de producto.',
            cto: {
                title: 'CTO & Tech Leadership',
                desc: 'Liderazgo técnico y estratégico como CTO de EnygmaLab, definiendo arquitectura, procesos y cultura de ingeniería.',
                item1: 'Vetting de ingenieros top 3% en LatAm',
                item2: 'Matching de talento en 48 horas',
                item3: 'Estrategia de AI/LLM y DevOps'
            },
            qa: {
                title: 'QA Automation Leadership',
                desc: 'Líder de automatización de pruebas con experiencia comprobada en aumentar la cobertura y eficiencia del testing.',
                item1: 'Incremento de 60% en cobertura de pruebas automatizadas',
                item2: 'Reducción del 30% en bugs mediante testing estratégico',
                item3: 'Implementación de CI/CD con Jenkins'
            },
            dev: {
                title: 'Software Development',
                desc: 'Desarrollador full-stack con enfoque en calidad y mejores prácticas de desarrollo.',
                item1: 'Desarrollo de APIs y microservicios',
                item2: 'Optimización de bases de datos SQL',
                item3: 'Implementación de arquitecturas escalables'
            },
            security: {
                title: 'Cybersecurity & DevSecOps',
                desc: 'Experiencia en seguridad informática y mejores prácticas de DevSecOps.',
                item1: 'Certificaciones NSE 1 y 2 en Network Security',
                item2: 'Implementación de medidas de seguridad SIEM',
                item3: 'Reducción del 80% en vulnerabilidades'
            },
            education: {
                title: 'Educación & Mentoría',
                desc: 'Profesor universitario y mentor técnico especializado en Java y metodologías ágiles.',
                item1: 'Máster en Inteligencia Artificial',
                item2: 'Facilitador de formación profesional',
                item3: 'Certificado C1 Advanced en inglés'
            }
        },
        stats: {
            experience: 'Años de Experiencia',
            testCoverage: '↑ Cobertura de Tests',
            bugReduction: '↓ Bugs en Producción',
            qaEfficiency: '↑ Eficiencia en QA'
        },
        projects: {
            title: 'Algunos proyectos realizados',
            enygmalab: {
                title: 'EnygmaLab',
                subtitle: 'Staff Augmentation & AI Solutions',
                desc: 'Empresa nearshore que conecta compañías con ingenieros elite de LatAm (top 3%). Matching en 48h, alineación EST/PST y perfiles en Full Stack, Java/Backend y QA Engineering.'
            },
            agroSoftWeb: {
                title: 'AgroSoftWeb',
                subtitle: 'Sistema de Gestión Agrícola',
                desc: 'Aplicación web para la gestión y control de procesos agrícolas, incluyendo inventario, ventas y reportes.'
            },
            agroSoftDesktop: {
                title: 'AgroSoft-Escritorio',
                subtitle: 'Versión de Escritorio',
                desc: 'Versión desktop del sistema de gestión agrícola con funcionalidades offline y sincronización.'
            }
        },
        contact: {
            title: 'Conectemos',
            text1: '¿Interesado en colaborar, contratar talento a través de EnygmaLab, o conocer más sobre mi trabajo?',
            text2: 'Elige el canal que mejor encaje con lo que necesitas y conversemos.',
            eyebrow: 'Disponible para colaboraciones, liderazgo técnico y oportunidades nearshore',
            ctaPrimary: 'Hablemos por LinkedIn',
            ctaSecondary: 'Ver EnygmaLab',
            point1: 'Staff augmentation y perfiles técnicos validados.',
            point2: 'Conversaciones sobre QA, software y liderazgo de ingeniería.',
            point3: 'Presencia activa en comunidades, contenido y proyectos técnicos.',
            panelLabel: 'Canales disponibles',
            panelTitle: 'Escoge dónde conectar',
            panelBadge: 'Respuesta rápida'
        },
        footer: {
            rights: 'Todos los derechos reservados.'
        },
        toast: 'Idioma cambiado a: <strong>Español</strong>'
    },

    en: {
        nav: {
            inicio: 'Home',
            enygmalab: 'EnygmaLab',
            sobreMi: 'About Me',
            especialidades: 'Expertise',
            proyectos: 'Projects',
            contacto: 'Contact'
        },
        hero: {
            kicker: 'Anthony Barrera',
            lead: 'CTO at EnygmaLab | QA Automation & Software Development',
            subtitle: 'Founder and CTO of <a href="https://enygmalab.com" target="_blank" style="color:inherit;font-weight:600;">EnygmaLab</a> — a staff augmentation and AI solutions company connecting businesses with elite nearshore engineers from LatAm. I lead multidisciplinary QA and development teams, automate testing processes, and build reliable software through quality, leadership, and teaching.',
            ctaPrimary: 'EnygmaLab',
            ctaSecondary: 'View LinkedIn',
            signalTalent: 'Nearshore talent',
            signalMatching: 'Matching'
        },
        enygmalab: {
            title: 'EnygmaLab',
            tagline: 'Staff Augmentation & AI Solutions',
            description: 'We connect companies with elite nearshore engineers from LatAm. Guaranteed 48-hour matching with top 3% talent, profiles aligned with EST/PST time zones, and agile onboarding.',
            stats: {
                matching: 'Matching Time',
                talent: 'Elite LatAm Talent',
                profiles: 'Available Profiles',
                timezone: 'Timezone Alignment'
            },
            services: {
                staff: {
                    title: 'Staff Augmentation',
                    desc: 'Rigorously vetted engineers ready to integrate into your team in days, not months.',
                    item1: 'Full Stack (React / Node.js)',
                    item2: 'Java / Backend',
                    item3: 'QA Automation Engineers'
                },
                ai: {
                    title: 'AI Solutions',
                    desc: 'Custom AI solutions, from LLM integration to process automation tailored to your needs.',
                    item1: 'LLM model integration',
                    item2: 'AI-powered automation',
                    item3: 'AI / LLM Engineers (coming soon)'
                },
                qa: {
                    title: 'Quality Engineering',
                    desc: 'Comprehensive QA automation frameworks that reduce bugs and accelerate delivery cycles.',
                    item1: 'QA Automation (Cypress / Playwright)',
                    item2: 'CI/CD integration with Jenkins',
                    item3: 'End-to-end testing & strategy'
                }
            },
            cta: 'Visit enygmalab.com'
        },
        about: {
            title: 'About Me',
            mainText: 'Greetings! 👋 I\'m Anthony, a Systems Engineer and CTO of EnygmaLab — a staff augmentation and AI solutions company based in the Dominican Republic, specialized in connecting businesses with elite nearshore engineers from LatAm. With over 6 years of experience in test automation and software development, I combine technical leadership, product vision, and talent development.',
            enygmalabTitle: 'EnygmaLab — Staff Augmentation & AI Solutions',
            enygmalabText: 'As CTO and co-founder, I lead the technical architecture and engineer vetting processes at EnygmaLab. We offer 48-hour matching with top 3% engineers, aligned with EST/PST time zones. Current profiles: Full Stack (React/Node), Java/Backend and QA Engineers.',
            learningTitle: 'Continuous Learning and Contributions',
            learningText: 'I actively seek new technologies and methodologies to stay current in an ever-evolving field. I contribute to open source projects, consistently applying learned skills to practical real-world scenarios.',
            interestsTitle: 'Personal Interests',
            interestsText: 'Outside of professional life, I find joy in reading, exploring video games, and visual arts, which keep me balanced and creatively inspired.',
            highlights: {
                cto: {
                    title: 'CTO & Co-Founder — EnygmaLab',
                    content: 'Staff augmentation and AI solutions company. Elite LatAm nearshore engineers with top 3% vetting, 48h matching, and EST/PST alignment.'
                },
                qa: {
                    title: 'QA Automation Expertise',
                    content: 'Development of comprehensive automation frameworks using tools like Cypress and Selenium, reducing testing time by 30% across multiple projects.'
                },
                dev: {
                    title: 'Software Development',
                    content: 'Full-stack development experience with a focus on quality and best practices. Specialized in scalable architectures and microservices with modern technologies.'
                },
                security: {
                    title: 'Cybersecurity & DevSecOps',
                    content: 'Key role in enhancing client database security using SIEM and Firewalls, aligned with ISO27001 and NIST standards.'
                },
                edu: {
                    title: 'Education & Mentoring',
                    content: 'University professor and technical mentor specialized in Java and agile methodologies. Committed to shaping the next generation of developers.'
                }
            }
        },
        expertise: {
            title: 'Areas of Expertise',
            intro: 'Areas where I combine technical leadership, execution, and product vision.',
            cto: {
                title: 'CTO & Tech Leadership',
                desc: 'Technical and strategic leadership as CTO of EnygmaLab, defining architecture, processes and engineering culture.',
                item1: 'Top 3% engineer vetting across LatAm',
                item2: '48-hour talent matching',
                item3: 'AI/LLM and DevOps strategy'
            },
            qa: {
                title: 'QA Automation Leadership',
                desc: 'Test automation leader with proven experience in increasing coverage and testing efficiency.',
                item1: '60% increase in automated test coverage',
                item2: '30% reduction in bugs through strategic testing',
                item3: 'CI/CD implementation with Jenkins'
            },
            dev: {
                title: 'Software Development',
                desc: 'Full-stack developer focused on quality and development best practices.',
                item1: 'API and microservices development',
                item2: 'SQL database optimization',
                item3: 'Implementation of scalable architectures'
            },
            security: {
                title: 'Cybersecurity & DevSecOps',
                desc: 'Experience in computer security and DevSecOps best practices.',
                item1: 'NSE 1 & 2 Network Security Certifications',
                item2: 'SIEM security measures implementation',
                item3: '80% reduction in vulnerabilities'
            },
            education: {
                title: 'Education & Mentoring',
                desc: 'University professor and technical mentor specialized in Java and agile methodologies.',
                item1: "Master's in Artificial Intelligence",
                item2: 'Professional training facilitator',
                item3: 'C1 Advanced English certification'
            }
        },
        stats: {
            experience: 'Years of Experience',
            testCoverage: '↑ Test Coverage',
            bugReduction: '↓ Production Bugs',
            qaEfficiency: '↑ QA Efficiency'
        },
        projects: {
            title: 'Featured Projects',
            enygmalab: {
                title: 'EnygmaLab',
                subtitle: 'Staff Augmentation & AI Solutions',
                desc: 'A nearshore company connecting businesses with elite engineers from LatAm (top 3%). 48h matching, EST/PST alignment, profiles in Full Stack, Java/Backend and QA Engineering.'
            },
            agroSoftWeb: {
                title: 'AgroSoftWeb',
                subtitle: 'Agricultural Management System',
                desc: 'Web application for managing and controlling agricultural processes, including inventory, sales, and reporting.'
            },
            agroSoftDesktop: {
                title: 'AgroSoft-Desktop',
                subtitle: 'Desktop Version',
                desc: 'Desktop version of the agricultural management system with offline capabilities and synchronization.'
            }
        },
        contact: {
            title: "Let's Connect",
            text1: 'Interested in collaborating, hiring talent through EnygmaLab, or learning more about my work?',
            text2: 'Choose the channel that best fits what you need and let\'s talk.',
            eyebrow: 'Available for collaborations, technical leadership, and nearshore opportunities',
            ctaPrimary: 'Connect on LinkedIn',
            ctaSecondary: 'Visit EnygmaLab',
            point1: 'Staff augmentation and vetted technical profiles.',
            point2: 'Conversations about QA, software, and engineering leadership.',
            point3: 'Active presence in communities, content, and technical projects.',
            panelLabel: 'Available channels',
            panelTitle: 'Choose where to connect',
            panelBadge: 'Fast response'
        },
        footer: {
            rights: 'All rights reserved.'
        },
        toast: 'Language changed to: <strong>English</strong>'
    }
};

// Resolve a dot-notation key against a translations object
function getPath(obj, path) {
    return path.split('.').reduce((o, k) => o?.[k], obj);
}

function changeLanguage(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;

    // textContent updates
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = getPath(t, el.dataset.i18n);
        if (val !== undefined) el.textContent = val;
    });

    // innerHTML updates (for elements with embedded HTML like links)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const val = getPath(t, el.dataset.i18nHtml);
        if (val !== undefined) el.innerHTML = val;
    });

    // Footer year
    const footerYear = document.getElementById('footer-year');
    if (footerYear) footerYear.textContent = new Date().getFullYear();
}

function showToast(html) {
    const toast = document.getElementById('langToast');
    toast.querySelector('span').innerHTML = html;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    // Set footer year on load
    const footerYear = document.getElementById('footer-year');
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    // Language switcher
    const langSwitch = document.querySelector('.lang-switch');
    if (langSwitch) {
        const options = langSwitch.querySelectorAll('.lang-option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.dataset.lang;
                options.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                changeLanguage(lang);
                showToast(translations[lang].toast);
            });
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
