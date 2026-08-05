import { useEffect, useRef } from 'react';
import './styles/service.css';

const IconTeen = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="7" />
        <path d="M10 40c0-9 6-15 14-15s14 6 14 15" />
    </svg>
);

const IconAdult = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="14" r="6" />
        <circle cx="32" cy="16" r="5" />
        <path d="M6 40c0-8 5-13 12-13s12 5 12 13" />
        <path d="M28 27c6 .5 10 5 10 13" />
    </svg>
);

const servicesData = [
    {
        id: 'adolescentes',
        icon: <IconTeen />,
        title: 'Adolescentes',
        subtitle: 'Sob consulta',
        features: [
            'Sessão individual (50 min)',
            'Espaço seguro de escuta',
            'Apoio no autoconhecimento',
            'Acompanhamento contínuo',
            'Atendimento online ou presencial'
        ],
        highlight: false
    },
    {
        id: 'adultos',
        icon: <IconAdult />,
        title: 'Adultos',
        subtitle: 'Sob consulta',
        features: [
            'Sessão individual (50 min)',
            'Escuta acolhedora e sigilosa',
            'Desenvolvimento emocional',
            'Acompanhamento contínuo',
            'Atendimento online ou presencial'
        ],
        highlight: false
    }
];

export function Services() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="terapias" className="services-section" ref={sectionRef}>
            <div className="services-glow"></div>
            <div className="services-container">

                <div className="services-header reveal-element">
                    <span className="services-tag">Psicoterapia</span>
                    <h2 className="services-title">Investimento</h2>
                    <p className="services-subtitle">
                        Atendimento psicoterapêutico individual, adaptado ao momento de
                        vida de adolescentes e adultos.
                    </p>
                </div>

                <svg className="vital-line reveal-element delay-1" viewBox="0 0 720 40" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 20 C 60 4, 120 36, 180 20 S 300 4, 360 20 S 480 36, 540 20 S 660 4, 720 20" />
                </svg>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            className={`service-card reveal-element delay-${index + 2}`}
                        >
                            <div className="card-top">
                                <span className="card-icon" aria-hidden="true">{service.icon}</span>
                                <div>
                                    <h3 className="card-title">{service.title}</h3>
                                    <span className="card-subtitle">{service.subtitle}</span>
                                </div>
                            </div>

                            <div className="card-divider"></div>

                            <ul className="card-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}>
                                        <span className="check-badge" aria-hidden="true">
                                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="btn-service btn-outline">
                                Solicitar Atendimento
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}