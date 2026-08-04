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
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'A Clínica' },
    { href: '#terapias', label: 'Investimento' },
];

const socialLinks = [
    { href: '#', label: 'Instagram', icon: <InstagramIcon /> },
    { href: '#', label: 'WhatsApp', icon: <WhatsappIcon /> },
    { href: '#', label: 'LinkedIn', icon: <LinkedinIcon /> },
];

export function Footer() {
    return (
        <footer className="footer-master">
            <div className="footer-grid">

                <div className="footer-brand-col">
                    <a href="/" className="footer-logo">
                        <SeedIcon className="logo-icon" />
                        <div className="logo-text">
                            <span className="logo-thin">mais uma</span>
                            <span className="logo-bold">SEMENTE</span>
                        </div>
                    </a>
                    <p className="footer-bio">
                        Facilitadora de bem-estar físico e psicológico. Um espaço seguro para você refletir, curar e crescer com harmonia.
                    </p>
                    <div className="footer-social-wrapper">
                        {socialLinks.map((social) => (
                            <a key={social.label} href={social.href} className="social-icon-link" aria-label={social.label} title={social.label}>
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-links-col">
                    <h4 className="footer-col-title">Navegação</h4>
                    <nav className="footer-nav">
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} className="footer-link">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="footer-contact-col">
                    <h4 className="footer-col-title">Contato</h4>
                    <div className="footer-contacts">
                        <a href="mailto:contato@maisumasemente.com.br" className="footer-link">contato@maisumasemente.com.br</a>
                        <a href="tel:+5511999999999" className="footer-link">+55 11 99999-9999</a>
                        <span className="footer-static-text">Atendimento Online e Presencial (SP)</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-bar">
                <span className="copyright">© {new Date().getFullYear()} Mais Uma Semente. Todos os direitos reservados.</span>
                <span className="crp-badge">CRP 00/00000</span>
            </div>
        </footer>
    );
}
