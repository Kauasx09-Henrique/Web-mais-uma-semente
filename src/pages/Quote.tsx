import { useEffect, useRef } from 'react';
import './styles/quote.css';

const LINES = [
    'O que não é trazido',
    'à consciência retorna',
    'como destino.'
];

export function Quote() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('is-visible');
                });
            },
            { threshold: 0.25 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className="quote-section" ref={sectionRef}>
            <div className="quote-bg"></div>
            <div className="quote-overlay"></div>
            <div className="quote-grain"></div>

            <span className="quote-side-label" aria-hidden="true">Psicanálise</span>

            <div className="quote-container">
                <span className="quote-kicker">Sobre o inconsciente</span>

                <blockquote className="quote-text">
                    <span className="quote-mark" aria-hidden="true">“</span>
                    {LINES.map((line, i) => (
                        <span key={i} className="quote-line" style={{ transitionDelay: `${0.18 + i * 0.14}s` }}>
                            <span className="quote-line-inner">
                                {i === LINES.length - 1 ? <em>{line}</em> : line}
                            </span>
                        </span>
                    ))}
                </blockquote>

                <div className="quote-footer">
                    <div className="quote-author">
                        <span className="quote-author-line"></span>
                    </div>
                    <p className="quote-note">
                        A psicanálise é o caminho para dar palavra ao que ainda não pôde ser dito.
                    </p>
                </div>
            </div>
        </section>
    );
}
