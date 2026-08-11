import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './styles/header.css';

import logo from '../../public/logo-preta.png';

type NavItem = { label: string; to: string; hash?: string };

const navItems: NavItem[] = [
    { label: 'Início', to: '/', hash: '#inicio' },
    { label: 'Sobre mim', to: '/', hash: '#sobre' },
    { label: 'Terapias', to: '/', hash: '#terapias' },
    { label: 'Pesquisa', to: '/pesquisa' },
    { label: 'Contato', to: '/', hash: '#contato' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeHash, setActiveHash] = useState('#inicio');

    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* marca o item ativo conforme a seção visível (só na home) */
    useEffect(() => {
        if (!isHome) return;
        const ids = ['inicio', 'sobre', 'terapias', 'contato'];
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
            if (window.innerWidth > 900) setIsMenuOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    const goTo = (item: NavItem) => (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMenuOpen(false);

        if (item.hash) {
            if (isHome) {
                const el = document.querySelector(item.hash);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 96;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
                setActiveHash(item.hash);
            } else {
                navigate(`/${item.hash}`);
            }
            return;
        }
        navigate(item.to);
    };

    const isActive = (item: NavItem) =>
        item.hash ? isHome && activeHash === item.hash : location.pathname === item.to;

    return (
        <header className={`header-main ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="header-container">
                <Link to="/" className="header-logo" onClick={() => setIsMenuOpen(false)}>
                    <img src={logo} alt="Mais Uma Semente" className="logo-image" />
                </Link>

                <nav className="desktop-nav">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.hash ? `${item.to}${item.hash}` : item.to}
                            className={`nav-link ${isActive(item) ? 'is-active' : ''}`}
                            onClick={goTo(item)}
                        >
                            {item.label}
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
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>

            <div
                className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div className={`mobile-panel ${isMenuOpen ? 'is-open' : ''}`}>
                <nav className="mobile-nav">
                    {navItems.map((item, i) => (
                        <a
                            key={item.label}
                            href={item.hash ? `${item.to}${item.hash}` : item.to}
                            className={`mobile-nav-link ${isActive(item) ? 'is-active' : ''}`}
                            style={{ transitionDelay: `${0.06 * i + 0.1}s` }}
                            onClick={goTo(item)}
                        >
                            <span className="mobile-nav-index">0{i + 1}</span>
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
