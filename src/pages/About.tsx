import { useEffect, useRef } from 'react';
import './styles/about.css';

export function About() {
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
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="sobre" className="about-section" ref={sectionRef}>
            <div className="about-glow"></div>
            <div className="about-container">

                <div className="about-image-column reveal-element">
                    <div className="image-wrapper floating-animation">
                        <span className="image-frame-number">01</span>
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                            alt="Naiara Windmöller - Psicóloga e Psicanalista"
                            className="about-img"
                        />
                        <div className="image-decoration breathing-animation"></div>
                        <div className="image-caption">
                            <span className="logo-bold">Naiara Windmöller</span>
                            <span>Psicóloga e Psicanalista · CRP 00/00000</span>
                        </div>
                    </div>
                </div>

                <div className="about-content">
                    <span className="about-tag reveal-element delay-1">Quem sou eu</span>
                    <h2 className="about-title reveal-element delay-2">
                        Muito prazer, eu sou a <span className="highlight">Naiara Windmöller</span>
                    </h2>

                    <div className="about-text reveal-element delay-3">
                        <p>
                            A <strong>Mais Uma Semente</strong> surgiu a partir de reflexões profundas sobre os vários caminhos que a vida pode ter, as várias fases em que ela se divide e todas as condições necessárias para que tudo possa seguir de maneira fluida e virtuosa.
                        </p>
                        <p>
                            Sou bacharel em Psicologia pelo UniCEUB, mestre em Psicologia Clínica e Cultura pela Universidade de Brasília (UnB) e pós-graduada em Teoria Psicanalítica pela Sociedade de Psicanálise de Brasília. Minha prática clínica é embasada na psicanálise, com atendimento voltado para adolescentes e adultos.
                        </p>
                        <p>
                            Meu objetivo é ajudar você a refletir: <em>que tipo de semente eu quero ser?</em>
                        </p>
                    </div>

                    <div className="specialties-grid">
                        <div className="specialty-card reveal-element delay-4">
                            <div className="specialty-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2a4 4 0 0 0-3.86 5.17A5.5 5.5 0 0 0 4 12.5a5.5 5.5 0 0 0 4.78 5.44L9 22h6l.22-4.06A5.5 5.5 0 0 0 20 12.5a5.5 5.5 0 0 0-4.14-5.33A4 4 0 0 0 12 2z"></path>
                                </svg>
                            </div>
                            <h3 className="specialty-title">Abordagem</h3>
                            <p className="specialty-desc">Psicanálise, com formação em mestrado e pós-graduação na área.</p>
                        </div>

                        <div className="specialty-card reveal-element delay-5">
                            <div className="specialty-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 12h4l2-8 4 16 2-8h6"></path>
                                </svg>
                            </div>
                            <h3 className="specialty-title">Atendimento</h3>
                            <p className="specialty-desc">Presencial em Brasília (DF) e online para todo o Brasil e exterior.</p>
                        </div>

                        <a
                            href="https://repositorio.unb.br/handle/10482/21691"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="specialty-card study-card reveal-element delay-6"
                        >
                            <div className="specialty-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                </svg>
                            </div>
                            <h3 className="specialty-title">Pesquisa acadêmica</h3>
                            <p className="specialty-desc">Dissertação de mestrado pela UnB, no repositório institucional.</p>
                            <span className="study-link-cta">
                                Ler no repositório UnB
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
