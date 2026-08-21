import { useEffect, useRef } from 'react';
import './styles/research.css';

const stats = [
    { value: '15+', label: 'anos de clínica' },
    { value: '7', label: 'trabalhos publicados' },
    { value: 'UnB', label: 'mestrado em Psicologia Clínica e Cultura' }
];

const themes = [
    {
        id: 'genero',
        num: 'I',
        title: 'Gênero, cultura e saúde mental',
        text: 'Escutar o sofrimento pela perspectiva dos estudos de gênero e da saúde mental muda toda uma análise. Vivemos em uma cultura que nos adoece de formas diferentes conforme os dispositivos que nos capturam.'
    },
    {
        id: 'feminilidade',
        num: 'II',
        title: 'Feminilidade',
        text: 'Estudar a feminilidade hoje exige coragem para desconstruir os dispositivos que tentam silenciar o desejo das mulheres. A psicanálise oferece o silêncio necessário para que a mulher possa se ouvir e passe a ser a autora da sua própria narrativa.'
    },
    {
        id: 'corporeidade',
        num: 'III',
        title: 'Corporeidade',
        text: 'O sofrimento humano não é apenas uma narrativa da mente; é uma geografia inscrita no corpo. A clínica pós-reichiana e os estudos antropológicos sobre corporeidade me permitiram escutar a totalidade de quem sofre.'
    }
];

const publications = [
    {
        id: 'feminilidade-monografia',
        year: '2025',
        type: 'Monografia de especialização',
        title: 'A construção da feminilidade e da maternidade: desenrolando antigas teias e tecendo novas',
        venue: 'Especialização em Teoria Psicanalítica — Centro Universitário de Brasília em parceria com a Sociedade Brasileira de Psicanálise. Orientadora: Lívia Milhomem Januário',
        link: null
    },
    {
        id: 'depressao-homens',
        year: '2019',
        type: 'Capítulo de livro',
        title: 'Depressão em homens: uma leitura a partir das masculinidades',
        venue: 'Publicação em capítulo de livro — Pluralidade masculina: contribuições para pesquisa em saúde do homem',
        link: 'https://drive.google.com/file/d/1N6z3Gq7ZWjizzEKYQ612NTvjRK1id89e/view'
    },
    {
        id: 'analise-reichiana',
        year: '2018–2022',
        type: 'Formação e estudos',
        title: 'Estudos em Análise Reichiana',
        venue: 'Instituto Brasileiro de Análise Reichiana em parceria com a Scuola Italiana Analisi Reichiana',
        link: null
    },
    {
        id: 'revisao-sistematica',
        year: '2016',
        type: 'Artigo científico',
        title: 'Depressão e masculinidades: uma revisão sistemática da literatura em periódicos brasileiros',
        venue: 'Psicologia em Estudo — Universidade Estadual de Maringá',
        link: 'https://periodicos.uem.br/ojs/index.php/PsicolEstud/article/view/31896'
    },
    {
        id: 'masculinidades-diss',
        year: '2016',
        type: 'Dissertação de mestrado',
        title: 'Construção das masculinidades em depressão: revisão de literatura e análise de casos',
        venue: 'Mestrado em Psicologia Clínica e Cultura — Universidade de Brasília / CNPq. Orientadora: Valeska Maria Zanello de Loyola',
        link: 'https://repositorio.unb.br/handle/10482/21691'
    },
    {
        id: 'psicanalise-corpo',
        year: '2009',
        type: 'Trabalho de conclusão de curso',
        title: 'Psicanálise, corpo e clínica',
        venue: 'Graduação em Psicologia — Centro Universitário de Brasília. Orientadora: Marcella Marjory Massolini Laureano Prottis',
        link: null
    },
    {
        id: 'representacoes-corpo',
        year: '2008',
        type: 'Iniciação científica',
        title: 'As representações sociais do corpo como produção subjetiva: um estudo de caso',
        venue: 'Graduação em Psicologia — Centro Universitário de Brasília. Orientadora: Valéria Deusdará Mori',
        link: 'https://repositorio.uniceub.br/items/965017a8-1213-4d09-9a96-4f331ad87cf2'
    }
];

const timeline = [
    { year: '2009', label: 'Graduação em Psicologia', place: 'Centro Universitário de Brasília — UniCEUB' },
    { year: '2016', label: 'Mestrado em Psicologia Clínica e Cultura', place: 'Universidade de Brasília — UnB' },
    { year: '2025', label: 'Especialização em Teoria Psicanalítica', place: 'UniCEUB / Sociedade Brasileira de Psicanálise' }
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
                                        <p className="publication-venue">
                                            {pub.venue.includes('Orientadora:') ? (
                                                <>
                                                    {pub.venue.split('Orientadora:')[0].trim()}
                                                    <br />
                                                    <span className="publication-advisor">Orientadora: {pub.venue.split('Orientadora:')[1].trim()}</span>
                                                </>
                                            ) : pub.venue}
                                        </p>
                                    </div>
                                    <span className="publication-arrow" aria-hidden="true">
                                        {pub.link ? (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M7 17L17 7M9 7h8v8" />
                                            </svg>
                                        ) : null}
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

                <div className="research-lattes">
                    <span className="lattes-label">Currículo completo</span>
                    <p className="lattes-text">
                        Para mais informações, acesse o CV Lattes:{' '}
                        <a
                            href="http://lattes.cnpq.br/5923760493881636"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lattes-link"
                        >
                            lattes.cnpq.br/5923760493881636
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M7 17L17 7M9 7h8v8" />
                            </svg>
                        </a>
                    </p>
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
