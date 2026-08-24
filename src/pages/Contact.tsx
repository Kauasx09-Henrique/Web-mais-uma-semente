import { useEffect, useRef, useState } from 'react';
import './styles/contact.css';

const WHATSAPP_NUMBER = '5561981126542';

const contactInfo = [
    {
        num: '01',
        title: 'Consultório',
        lines: ['Setor Hospitalar Local Norte Bloco K Condomínio Centro Clinico Norte I sala 02 subsolo - Asa Norte, Brasília - DF, 70770-560'],
        action: { label: 'Ver no mapa', href: 'https://maps.app.goo.gl/GQMyvfko5YohrtRY6' }
    },
    {
        num: '02',
        title: 'WhatsApp',
        lines: ['+55 (61) 98112-6542'],
        action: { label: 'Conversar', href: `https://wa.me/${WHATSAPP_NUMBER}` }
    },
    {
        num: '03',
        title: 'Atendimento',
        lines: ['Presencial em Brasília e online', 'Segunda a sexta, com hora marcada'],
        action: null
    }
];

const subjects = ['Primeira sessão', 'Dúvidas', 'Outro assunto'];

export function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState(subjects[0]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('is-visible');
                });
            },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text =
            `Olá, Naiara. Meu nome é ${name || '[nome]'}.\n` +
            `Assunto: ${subject}\n` +
            `Telefone: ${phone || '[telefone]'}\n\n` +
            `${message || 'Gostaria de mais informações sobre atendimento.'}`;
        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    return (
        <section id="contato" className="contact-section" ref={sectionRef}>
            <span className="contact-watermark" aria-hidden="true">Contato</span>

            <div className="contact-inner">

                <header className="contact-hero">
                    <span className="contact-kicker">Vamos conversar</span>
                    <h2 className="contact-display">
                        <span className="cd-line"><span>O primeiro passo</span></span>
                        <span className="cd-line"><span>é <em>uma mensagem</em></span></span>
                    </h2>
                    <p className="contact-lead">
                        Escreva com suas palavras. Respondo pessoalmente, com sigilo, e combinamos o melhor horário.
                    </p>
                </header>

                <div className="contact-grid">

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-head">
                            <span className="form-step">Formulário</span>
                            <span className="form-hint">Leva menos de um minuto</span>
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <input
                                    id="c-name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="c-name">Nome</label>
                                <span className="field-line"></span>
                            </div>

                            <div className="field">
                                <input
                                    id="c-phone"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="c-phone">Telefone</label>
                                <span className="field-line"></span>
                            </div>
                        </div>

                        <fieldset className="subject-set">
                            <legend>Sobre o que quer falar?</legend>
                            <div className="chips">
                                {subjects.map((s) => (
                                    <button
                                        type="button"
                                        key={s}
                                        className={`chip ${subject === s ? 'is-selected' : ''}`}
                                        onClick={() => setSubject(s)}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </fieldset>

                        <div className="field field-area">
                            <textarea
                                id="c-msg"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder=" "
                                rows={4}
                            />
                            <label htmlFor="c-msg">Mensagem</label>
                            <span className="field-line"></span>
                        </div>

                        <div className="form-footer">
                            <button type="submit" className="btn-whatsapp">
                                <span>Enviar pelo WhatsApp</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </button>
                            <p className="form-note">
                                Você será levada ao WhatsApp com a mensagem já escrita.
                            </p>
                        </div>
                    </form>

                    <aside className="contact-aside">
                        <ul className="info-list">
                            {contactInfo.map((info, i) => (
                                <li
                                    key={info.title}
                                    className="info-row"
                                    style={{ transitionDelay: `${0.12 + i * 0.09}s` }}
                                >
                                    <span className="info-num">{info.num}</span>
                                    <div className="info-body">
                                        <h3 className="info-title">{info.title}</h3>
                                        {info.lines.map((line, k) => (
                                            <p key={k} className="info-line">{line}</p>
                                        ))}
                                        {info.action && (
                                            <a
                                                href={info.action.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="info-action"
                                            >
                                                {info.action.label}
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M7 17L17 7M9 7h8v8" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="map-frame">
                            <iframe
                                title="Mapa da clínica"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7680.5427488246405!2d-47.898209889795666!3d-15.736776884832562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a39fa07850701%3A0x1ff33a81c4e014d7!2sNaiara%20Windm%C3%B6ller%20-%20Psic%C3%B3loga%20e%20Psicanalista-%20Bras%C3%ADlia%2FAsa%20Norte.%20Presencial%20e%20Online%20%7C%20Adolescentes%2C%20Adultos%20e%20Casais!5e0!3m2!1spt-BR!2sbr!4v1786461445256!5m2!1spt-BR!2sbr"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </aside>

                </div>
            </div>
        </section>
    );
}
