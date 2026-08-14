import { Link } from 'react-router-dom';
import './styles/footer.css';

const SeedIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 22c0-4.5-3.5-8-8-8 4.5 0 8-3.5 8-8 0 4.5 3.5 8 8 8-4.5 0-8 3.5-8 8z" />
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
);

const WhatsappIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M7 17l-3 1 1-3a8 8 0 1 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 10c0 2.5 2.5 5 5 5" strokeLinecap="round" />
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <line x1="7.5" y1="10" x2="7.5" y2="16.5" strokeLinecap="round" />
        <circle cx="7.5" cy="7" r="0.6" fill="currentColor" stroke="none" />
        <path d="M11.5 16.5V10M11.5 12.5c0-1.4 1-2.5 2.3-2.5s2.2 1 2.2 2.5v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const navLinks = [
    { href: '/#inicio', label: 'Início' },
    { href: '/#sobre', label: 'Sobre mim' },
    { href: '/#terapias', label: 'Terapias' },
    { href: '/pesquisa', label: 'Pesquisa', internal: true },
    { href: '/#contato', label: 'Contato' },
];

const socialLinks = [
    { href: '#', label: 'Instagram', icon: <InstagramIcon /> },
    { href: 'https://wa.me/5561999999999', label: 'WhatsApp', icon: <WhatsappIcon /> },
    { href: '#', label: 'LinkedIn', icon: <LinkedinIcon /> },
];

export function Footer() {
    return (
        <footer className="footer-master">
            <span className="footer-watermark" aria-hidden="true">Semente</span>

            <div className="footer-inner">

                <div className="footer-top">
                    <p className="footer-statement">
                        Que tipo de semente
                        <em> eu quero ser?</em>
                    </p>
                    <a href="/#contato" className="footer-cta">
                        <span>Agendar uma conversa</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </a>
                </div>

                <div className="footer-grid">
                    <div className="footer-brand-col">
                        <Link to="/" className="footer-logo">
                            <SeedIcon className="logo-icon" />
                            <span className="logo-text">
                                <span className="logo-thin">mais uma</span>
                                <span className="logo-bold">SEMENTE</span>
                            </span>
                        </Link>
                        <p className="footer-bio">
                            Psicoterapia de orientação psicanalítica para adolescentes e
                            adultos. Um espaço de escuta para refletir, elaborar e crescer.
                        </p>
                        <div className="footer-social-wrapper">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon-link"
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links-col">
                        <h4 className="footer-col-title">Navegação</h4>
                        <nav className="footer-nav">
                            {navLinks.map((link, i) =>
                                link.internal ? (
                                    <Link key={link.label} to={link.href} className="footer-link">
                                        <span className="footer-link-num">0{i + 1}</span>
                                        {link.label}
                                    </Link>
                                ) : (
                                    <a key={link.label} href={link.href} className="footer-link">
                                        <span className="footer-link-num">0{i + 1}</span>
                                        {link.label}
                                    </a>
                                )
                            )}
                        </nav>
                    </div>

                    <div className="footer-contact-col">
                        <h4 className="footer-col-title">Contato</h4>
                        <div className="footer-contacts">
                            <a href="mailto:contato@maisumasemente.com.br" className="footer-contact-item">
                                <span className="contact-label">E-mail</span>
                                <span className="contact-value">contato@maisumasemente.com.br</span>
                            </a>
                            <a href="tel:+5561999999999" className="footer-contact-item">
                                <span className="contact-label">Telefone</span>
                                <span className="contact-value">+55 (61) 99999-9999</span>
                            </a>
                            <div className="footer-contact-item is-static">
                                <span className="contact-label">Consultório</span>
                                <span className="contact-value">Asa Norte, Brasília — DF</span>
                                <span className="contact-extra">Presencial e online</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <span className="copyright">
                        © {new Date().getFullYear()} Mais Uma Semente · Naiara Windmöller
                    </span>
                    <span className="crp-badge">CRP 15.411/DF</span>
                </div>

            </div>
        </footer>
    );
}
