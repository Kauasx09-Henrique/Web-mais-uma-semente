import { useEffect, useRef } from 'react';
import './styles/service.css';

const IconBreath = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="24" cy="24" r="18" opacity="0.25" />
        <path d="M8 24c3-6 6-9 8-9s3 9 6 9 4-9 6-9 5 3 8 9" strokeLinejoin="round" />
    </svg>
);

const IconSeed = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 40V22" />
        <path d="M24 22c0-8-6-13-13-13 0 8 5 13 13 13Z" />
        <path d="M24 26c0-7 6-11 11-11 0 7-4 11-11 11Z" />
    </svg>
);

const IconHands = () => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 28c2 8 8 12 16 12s14-4 16-12" />
        <path d="M8 28c0-6 3-9 6-9" />
        <path d="M40 28c0-6-3-9-6-9" />
        <circle cx="24" cy="20" r="4" opacity="0.5" />
    </svg>
);

const servicesData = [
    {
        id: 'psicoterapia',
        icon: <IconBreath />,
        title: 'Psicoterapia',
        subtitle: 'Sob consulta',
        features: [
            'Sessão individual (50 min)',
            'Abordagem Reichiana',
            'Desbloqueio emocional',
            'Acompanhamento contínuo',
            'Suporte online ou presencial'
        ],
        highlight: false
    },
    {
        id: 'pacote-semente',
        icon: <IconSeed />,
        title: 'Pacote Semente',
        subtitle: 'Sob consulta',
        badge: 'Mente + Corpo',
        features: [
            'Integração Mente e Corpo',
            '2 sessões de Psicoterapia/mês',
            '2 sessões de Yoga Massagem/mês',
            'Plano de acompanhamento',
            'Prioridade de agendamento'
        ],
        highlight: true
    },
    {
        id: 'yoga-massagem',
        icon: <IconHands />,
        title: 'Yoga Massagem',
        subtitle: 'Sob consulta',
        features: [
            'Sessão individual (1h30)',
            'Técnica Ayurvédica',
            'Alinhamento postural',
            'Estimulação da energia vital',
            'Uso de óleos essenciais'
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
                    <span className="services-tag">Cuidado e energia vital</span>
                    <h2 className="services-title">Investimento</h2>
                    <p className="services-subtitle">
                        Escolha o caminho que melhor acompanha o seu momento — sessões avulsas
                        ou um plano contínuo de integração entre mente e corpo.
                    </p>
                </div>

                <svg className="vital-line reveal-element delay-1" viewBox="0 0 720 40" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 20 C 60 4, 120 36, 180 20 S 300 4, 360 20 S 480 36, 540 20 S 660 4, 720 20" />
                </svg>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            className={`service-card reveal-element delay-${index + 2} ${service.highlight ? 'highlight-card' : ''}`}
                        >
                            {service.highlight && service.badge && (
                                <span className="highlight-badge">{service.badge}</span>
                            )}

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
                                        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn-service ${service.highlight ? 'btn-filled' : 'btn-outline'}`}>
                                Solicitar orçamento
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
