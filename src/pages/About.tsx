import { useEffect, useRef } from 'react';
import './styles/about.css';

// Foto da Naiara
import naiaraImage from '../../public/naiara/foto-naiara.jpeg';

const stats = [
    {
        value: '20',
        unit: 'anos',
        label: 'Dedicados à clínica',
        text: 'Quase duas décadas de prática e estudos em saúde mental, com atenção às questões de gênero.'
    },
    {
        value: '15.411',
        unit: '/DF',
        label: 'CRP',
        text: 'Psicóloga, mestre em Psicologia Clínica e membro da Escola Lacaniana de Psicanálise de Brasília.'
    }
];

export function About() {
    const sectionRef = useRef<HTMLElement>(null);

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
        <section id="sobre" className="about-section" ref={sectionRef}>
            <span className="about-watermark" aria-hidden="true">Semente</span>

            <div className="about-container">

                <div className="about-content">
                    <span className="about-hello">Olá, eu sou</span>

                    <h2 className="about-name">
                        <span className="an-line"><span>Naiara</span></span>
                        <span className="an-line"><span>Windmöller</span></span>
                    </h2>

                    <p className="about-role">
                        Psicóloga e psicanalista · Idealizadora da
                        <em> Mais Uma Semente</em>, na Asa Norte, Brasília
                    </p>

                    <div className="about-text">
                        <p>
                            A <strong>Mais Uma Semente</strong> surgiu a partir de reflexões
                            profundas sobre os vários caminhos que a vida pode ter, as várias
                            fases em que ela se divide e todas as condições necessárias para
                            que tudo possa seguir de maneira fluida e virtuosa.
                        </p>
                        <p>
                            Dedico-me integralmente à clínica e aos estudos em saúde mental há
                            quase duas décadas, com especial atenção às questões que
                            <em> atravessam mulheres e homens em suas especificidades de gênero</em>.
                        </p>
                    </div>

                    <a href="#contato" className="about-cta">
                        <span>Agendar uma conversa</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </a>

                    <div className="about-stats">
                        {stats.map((s, i) => (
                            <div
                                key={s.label}
                                className="stat"
                                style={{ transitionDelay: `${0.45 + i * 0.12}s` }}
                            >
                                <span className="stat-number">
                                    {s.value}<i>{s.unit}</i>
                                </span>
                                <span className="stat-label">{s.label}</span>
                                <p className="stat-text">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-figure">
                    <span className="figure-frame" aria-hidden="true"></span>
                    <img
                        src={naiaraImage}
                        alt="Naiara Windmöller — psicóloga e psicanalista"
                        className="about-img"
                    />
                    <a
                        href="https://repositorio.unb.br/handle/10482/21691"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="figure-badge"
                    >
                        <span className="badge-label">Pesquisa</span>
                        <span className="badge-title">Dissertação de mestrado — UnB</span>
                        <span className="badge-arrow" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M9 7h8v8" />
                            </svg>
                        </span>
                    </a>
                </div>

            </div>
        </section>
    );
}
