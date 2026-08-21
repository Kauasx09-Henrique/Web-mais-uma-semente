import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './styles/header.css';

import logo from '../../public/logo-preta.png';

type NavItem = { label: string; to: string; hash?: string };

const navItems: NavItem[] = [
    { label: 'Início', to: '/', hash: '#inicio' },
    { label: 'Sobre mim', to: '/', hash: '#sobre' },
    { label: 'Terapias', to: '/', hash: '#terapias' },
    { label: 'Pesquisa', to: '/pesquisa' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeHash, setActiveHash] = useState('#inicio');
    const [progress, setProgress] = useState(0);
    const [hideOnScroll, setHideOnScroll] = useState(false);
    const lastY = useRef(0);

    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setIsScrolled(y > 40);
            setHideOnScroll(y > lastY.current && y > 140);
            lastY.current = y;
            const h = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(h > 0 ? (y / h) * 100 : 0);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!isHome) return;
        const ids = ['inicio', 'sobre', 'quando-buscar', 'terapias', 'contato'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveHash(`#${entry.target.id}`);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [isHome, location.pathname]);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 980) setIsMenuOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    const scrollToHash = (hash: string) => {
        const el = document.querySelector(hash);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 92;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const goTo = (item: NavItem) => (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMenuOpen(false);
        if (item.hash) {
            if (isHome) {
                scrollToHash(item.hash);
                setActiveHash(item.hash);
            } else {
                navigate(`/${item.hash}`);
            }
            return;
        }
        navigate(item.to);
    };

    const goToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMenuOpen(false);
        if (isHome) scrollToHash('#contato');
        else navigate('/#contato');
    };

    const isActive = (item: NavItem) =>
        item.hash ? isHome && activeHash === item.hash : location.pathname === item.to;

    return (
        <header className={`header-main ${isScrolled ? 'scrolled' : ''} ${hideOnScroll ? 'hide-on-scroll' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="header-container">
                <Link to="/" className="header-logo" onClick={() => setIsMenuOpen(false)}>
                    <img src={logo} alt="Mais Uma Semente" className="logo-image" />
                    <span className="logo-divider" aria-hidden="true"></span>
                    <span className="logo-caption">

                    </span>
                </Link>

                <nav className="desktop-nav">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.hash ? `${item.to}${item.hash}` : item.to}
                            className={`nav-link ${isActive(item) ? 'is-active' : ''}`}
                            onClick={goTo(item)}
                        >
                            <span className="nav-link-text">
                                <span>{item.label}</span>
                                <span aria-hidden="true">{item.label}</span>
                            </span>
                        </a>
                    ))}
                </nav>

                <div className="header-action">


                    <button
                        className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-label="Alternar menu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>

            <span className="header-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true"></span>

            <div
                className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div className={`mobile-panel ${isMenuOpen ? 'is-open' : ''}`}>
                <span className="mobile-panel-label">Navegação</span>

                <nav className="mobile-nav">
                    {navItems.map((item, i) => (
                        <a
                            key={item.label}
                            href={item.hash ? `${item.to}${item.hash}` : item.to}
                            className={`mobile-nav-link ${isActive(item) ? 'is-active' : ''}`}
                            style={{ transitionDelay: `${0.07 * i + 0.14}s` }}
                            onClick={goTo(item)}
                        >
                            <span className="mobile-nav-index">0{i + 1}</span>
                            <span className="mobile-nav-label">{item.label}</span>
                            <svg className="mobile-nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                    ))}
                </nav>

                <div className="mobile-panel-footer">
                    <a href="/#contato" className="btn-agendar mobile-btn" onClick={goToContact}>
                        <span>Agendar uma conversa</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </a>
                    <p className="mobile-panel-note">
                        Asa Norte, Brasília — DF · Presencial e online
                    </p>
                </div>
            </div>
        </header>
    );
}
