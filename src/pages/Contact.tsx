import { useEffect, useRef, useState } from 'react';
import './styles/contact.css';

const WHATSAPP_NUMBER = '5561999999999';

const contactInfo = [
    {
        title: 'Endereço',
        lines: ['SHS Quadra 06, Bloco A, Sala 000', 'Asa Sul, Brasília - DF'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
            </svg>
        )
    },
    {
        title: 'Telefone / WhatsApp',
        lines: ['+55 (61) 99999-9999'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l-3 1 1-3a8 8 0 1 1 2 2z" />
                <path d="M9 10c0 2.5 2.5 5 5 5" />
            </svg>
        )
    },
    {
        title: 'E-mail',
        lines: ['contato@maisumasemente.com.br'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
            </svg>
        )
    },
    {
        title: 'Atendimento',
        lines: ['Presencial em Brasília e online', 'Segunda a sexta, com hora marcada'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
            </svg>
        )
    }
];

export function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('is-visible');
                });
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Olá, meu nome é ${name || '[nome]'}.\nTelefone: ${phone || '[telefone]'}\n\n${message || 'Gostaria de mais informações sobre atendimento.'}`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="contato" className="contact-section" ref={sectionRef}>
            <div className="contact-glow"></div>
            <div className="contact-container">

                <div className="contact-header reveal-element">
                    <span className="contact-tag">Vamos conversar</span>
                    <h2 className="contact-title">Entre em contato</h2>
                    <p className="contact-subtitle">
                        Envie sua mensagem e fale diretamente comigo pelo WhatsApp,
                        ou visite o consultório em Brasília.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info-col reveal-element delay-1">
                        {contactInfo.map((info) => (
                            <div key={info.title} className="info-card">
                                <span className="info-icon">{info.icon}</span>
                                <div>
                                    <h3 className="info-title">{info.title}</h3>
                                    {info.lines.map((line, i) => (
                                        <p key={i} className="info-line">{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="map-frame">
                            <iframe
                                title="Mapa da clínica"
                                src="https://maps.google.com/maps?q=Bras%C3%ADlia%20DF&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <form className="contact-form reveal-element delay-2" onSubmit={handleSubmit}>
                        <span className="form-tag">Fale comigo</span>
                        <h3 className="form-title">Solicitar atendimento</h3>

                        <label className="form-field">
                            <span>Nome</span>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Seu nome completo"
                                required
                            />
                        </label>

                        <label className="form-field">
                            <span>Telefone</span>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="(00) 00000-0000"
                                required
                            />
                        </label>

                        <label className="form-field">
                            <span>Mensagem</span>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Conte um pouco sobre o que você procura..."
                                rows={4}
                            />
                        </label>

                        <button type="submit" className="btn-whatsapp">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17l-3 1 1-3a8 8 0 1 1 2 2z" />
                                <path d="M9 10c0 2.5 2.5 5 5 5" />
                            </svg>
                            <span>Enviar pelo WhatsApp</span>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
