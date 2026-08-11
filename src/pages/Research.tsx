import { useEffect, useRef } from 'react';
import './styles/research.css';

const stats = [
    { value: '15+', label: 'anos de clínica' },
    { value: 'UnB', label: 'mestrado em Psicologia Clínica e Cultura' },
    { value: '3', label: 'formações em psicanálise' }
];

const themes = [
    {
        id: 'masculinidades',
        num: 'I',
        title: 'Masculinidades e sofrimento psíquico',
        text: 'Como os modelos de masculinidade moldam a forma de adoecer, pedir ajuda e nomear a dor.'
    },
    {
        id: 'corpo',
        num: 'II',
        title: 'Corpo, saúde e subjetividade',
        text: 'As representações que construímos do próprio corpo e o que elas dizem da nossa história.'
    },
    {
        id: 'cultura',
        num: 'III',
        title: 'Gênero, cultura e saúde mental',
        text: 'O atravessamento entre cultura e psiquismo — o social que se inscreve no sujeito.'
    }
];

const publications = [
    {
        id: 'masculinidades-diss',
        year: '2016',
        type: 'Dissertação de mestrado',
        title: 'Construção das masculinidades em depressão',
        venue: 'Programa de Pós-Graduação em Psicologia Clínica e Cultura — Universidade de Brasília',
        link: 'https://repositorio.unb.br/handle/10482/21691'
    },
    {
        id: 'corpo-pesq',
        year: '2015',
        type: 'Pesquisa acadêmica',
        title: 'Representações subjetivas do corpo na saúde',
        venue: 'Universidade de Brasília — saúde mental, gênero e cultura',
        link: null
    }
];

const timeline = [
    { year: '2009', label: 'Graduação em Psicologia', place: 'UniCEUB' },
    { year: '2016', label: 'Mestrado em Psicologia Clínica e Cultura', place: 'Universidade de Brasília' },
    { year: '—', label: 'Especialização em Teoria Psicanalítica', place: 'UniCEUB / Sociedade de Psicanálise de Brasília' }
];

export function Research() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('is-visible');
                });
            },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="pesquisa" className="research-section" ref={sectionRef}>
            <span className="research-watermark" aria-hidden="true">Pesquisa</span>

            <div className="research-inner">

                <header className="research-hero">
                    <span className="research-kicker">Publicações e pesquisa</span>
                    <h2 className="research-display">
                        <span className="rd-line"><span>Uma clínica sustentada</span></span>
                        <span className="rd-line"><span>por <em>estudo</em> e escuta</span></span>
                    </h2>
                    <div className="research-hero-grid">
                        <p className="research-lead">
                            Antes de ser consultório, a minha prática foi pergunta. Anos de
                            investigação acadêmica sobre saúde mental, gênero e cultura
                            sustentam a forma como escuto cada pessoa hoje.
                        </p>
                        <ul className="research-stats">
                            {stats.map((s, i) => (
                                <li key={s.label} style={{ transitionDelay: `${0.4 + i * 0.1}s` }}>
                                    <span className="stat-value">{s.value}</span>
                                    <span className="stat-label">{s.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </header>

                <div className="research-block">
                    <h3 className="block-title">
                        <span className="block-num">01</span>
                        Linhas de pesquisa
                    </h3>
                    <div className="themes-grid">
                        {themes.map((t, i) => (
                            <article
                                key={t.id}
                                className="theme-card"
                                style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
                            >
                                <span className="theme-num">{t.num}</span>
                                <h4 className="theme-title">{t.title}</h4>
                                <p className="theme-text">{t.text}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="research-block">
                    <h3 className="block-title">
                        <span className="block-num">02</span>
                        Trabalhos publicados
                    </h3>
                    <div className="publications">
                        {publications.map((pub, i) => {
                            const Tag = pub.link ? 'a' : 'div';
                            return (
                                <Tag
                                    key={pub.id}
                                    {...(pub.link ? { href: pub.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className={`publication ${pub.link ? 'is-link' : ''}`}
                                    style={{ transitionDelay: `${0.1 + i * 0.14}s` }}
                                >
                                    <span className="publication-year">{pub.year}</span>
                                    <div className="publication-body">
                                        <span className="publication-type">{pub.type}</span>
                                        <h4 className="publication-title">{pub.title}</h4>
                                        <p className="publication-venue">{pub.venue}</p>
                                    </div>
                                    <span className="publication-arrow" aria-hidden="true">
                                        {pub.link ? (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M7 17L17 7M9 7h8v8" />
                                            </svg>
                                        ) : (
                                            <span className="publication-soon">Em breve</span>
                                        )}
                                    </span>
                                </Tag>
                            );
                        })}
                    </div>
                </div>

                <div className="research-block">
                    <h3 className="block-title">
                        <span className="block-num">03</span>
                        Formação
                    </h3>
                    <ol className="timeline">
                        {timeline.map((t, i) => (
                            <li key={t.label} style={{ transitionDelay: `${0.1 + i * 0.12}s` }}>
                                <span className="timeline-year">{t.year}</span>
                                <span className="timeline-dot" aria-hidden="true"></span>
                                <span className="timeline-body">
                                    <span className="timeline-label">{t.label}</span>
                                    <span className="timeline-place">{t.place}</span>
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="research-band">
                    <blockquote className="band-quote">
                        Pesquisar é uma forma de escutar mais longe —
                        <em> e escutar melhor de perto.</em>
                    </blockquote>
                    <a
                        href="https://repositorio.unb.br/handle/10482/21691"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="research-cta"
                    >
                        <span>Ver no repositório da UnB</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}
