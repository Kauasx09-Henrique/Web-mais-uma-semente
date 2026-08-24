import { useEffect, useRef, useState } from 'react';
import './styles/service.css';

const servicesData = [
    {
        id: 'adolescentes',
        index: '01',
        title: 'Adolescentes',
        lead: 'Um espaço próprio, sigiloso, para atravessar as mudanças dessa fase com apoio.',
        duration: '50 min',
        format: 'Online ou presencial',
        features: [
            'Espaço seguro de escuta',
            'Apoio no tempo do sujeito',
            'Orientação familiar quando necessário',
            'Acompanhamento contínuo'
        ]
    },
    {
        id: 'adultos',
        index: '02',
        title: 'Adultos',
        lead: 'Escuta psicanalítica para dar palavra ao que ainda não pôde ser dito.',
        duration: '50 min',
        format: 'Online ou presencial',
        features: [
            'Escuta acolhedora e sigilosa',
            'Elaboração de questões psíquicas ',
            'Dinâmicas dos afetos',
            'Acompanhamento contínuo'
        ]
    }
];

export function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const [open, setOpen] = useState<string | null>('adolescentes');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('is-visible');
                });
            },
            { threshold: 0.12 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="terapias" className="services-section" ref={sectionRef}>
            <span className="services-watermark" aria-hidden="true">Psicoterapia</span>

            <div className="services-container">
                <header className="services-header">
                    <span className="services-kicker">Atendimento</span>
                    <h2 className="services-title">
                        Psicoterapia individual de orientação psicanalítica
                        <br />
                        <em>apoiada no tempo do sujeito.</em>
                    </h2>
                    <p className="services-subtitle">
                        Psicoterapia individual de orientação psicanalítica, apoiada no tempo do sujeito.
                    </p>
                </header>

                <div className="services-list">
                    {servicesData.map((service, i) => {
                        const isOpen = open === service.id;
                        return (
                            <article
                                key={service.id}
                                className={`service-row ${isOpen ? 'is-open' : ''}`}
                                style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
                            >
                                <button
                                    className="service-head"
                                    onClick={() => setOpen(isOpen ? null : service.id)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="service-index">{service.index}</span>
                                    <span className="service-heading">
                                        <span className="service-name">{service.title}</span>
                                        <span className="service-lead">{service.lead}</span>
                                    </span>
                                    <span className="service-toggle" aria-hidden="true">
                                        <span></span>
                                        <span></span>
                                    </span>
                                </button>

                                <div className="service-body">
                                    <div className="service-body-inner">
                                        <ul className="service-features">
                                            {service.features.map((f, k) => (
                                                <li key={k}>{f}</li>
                                            ))}
                                        </ul>

                                        <div className="service-meta">
                                            <div className="meta-row">
                                                <span className="meta-label">Duração</span>
                                                <span className="meta-value">{service.duration}</span>
                                            </div>
                                            <div className="meta-row">
                                                <span className="meta-label">Formato</span>
                                                <span className="meta-value">{service.format}</span>
                                            </div>
                                            <div className="meta-row">
                                                <span className="meta-label">Valor</span>
                                                <span className="meta-value">Sob consulta</span>
                                            </div>
                                            <a href="#contato" className="btn-service">
                                                <span>Solicitar atendimento</span>
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
