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
                            alt="Najara Windmöller - Psicóloga e Terapeuta"
                            className="about-img"
                        />
                        <div className="image-decoration breathing-animation"></div>
                        <div className="image-caption">
                            <span className="logo-bold">Najara Windmöller</span>
                            <span>Psicóloga · CRP 00/00000</span>
                        </div>
                    </div>
                </div>

                <div className="about-content">
                    <span className="about-tag reveal-element delay-1">Quem sou eu</span>
                    <h2 className="about-title reveal-element delay-2">
                        Muito prazer, eu sou a <span className="highlight">Najara Windmöller</span>
                    </h2>

                    <div className="about-text reveal-element delay-3">
                        <p>
                            A <strong>Mais Uma Semente</strong> surgiu a partir de reflexões profundas sobre os vários caminhos que a vida pode ter, as várias fases em que ela se divide e todas as condições necessárias para que tudo possa seguir de maneira fluida e virtuosa.
                        </p>
                        <p>
                            Atuo como uma facilitadora do seu bem-estar, buscando fornecer energia vital, nutrientes e cuidados para que você consiga alcançar um crescimento saudável em busca da plenitude.
                        </p>
                        <p>
                            Seja por meio de terapias cognitivas ou corporais, meu objetivo é ajudar você a refletir: <em>que tipo de semente eu quero ser?</em>
                        </p>
                    </div>

                    <div className="specialties-grid">
                        <div className="specialty-card reveal-element delay-4">
                            <div className="specialty-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2a4 4 0 0 0-3.86 5.17A5.5 5.5 0 0 0 4 12.5a5.5 5.5 0 0 0 4.78 5.44L9 22h6l.22-4.06A5.5 5.5 0 0 0 20 12.5a5.5 5.5 0 0 0-4.14-5.33A4 4 0 0 0 12 2z"></path>
                                </svg>
                            </div>
                            <h3 className="specialty-title">Mente</h3>
                            <p className="specialty-desc">Psicoterapia Reichiana para desbloqueio emocional e autoconhecimento.</p>
                        </div>

                        <div className="specialty-card reveal-element delay-5">
                            <div className="specialty-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22c0-4.5-3.5-8-8-8 4.5 0 8-3.5 8-8 0 4.5 3.5 8 8 8-4.5 0-8 3.5-8 8z"></path>
                                </svg>
                            </div>
                            <h3 className="specialty-title">Corpo</h3>
                            <p className="specialty-desc">Yoga Massagem Ayurvédica para alinhamento físico e energia vital.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
