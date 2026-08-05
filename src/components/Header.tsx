import { useEffect, useState } from 'react';
import './styles/header.css';

import logo from '../../public/logo-preta.png';

const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#terapias', label: 'Terapias' },
    { href: '#sobre', label: 'Sobre mim' },
    { href: '#contato', label: 'Contato' },
];



export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

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

    return (
        <header className={`header-main ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="header-container">
                <a href="/" className="header-logo">
                    <img src={logo} alt="Mais Uma Semente" className="logo-image" />
                    <span className="logo-text">
                        <span className="logo-thin">mais uma</span>
                        <span className="logo-bold">SEMENTE</span>
                    </span>
                </a>

                <nav className="desktop-nav">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} className="nav-link">
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

            <div className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
            <div className={`mobile-panel ${isMenuOpen ? 'is-open' : ''}`}>
                <nav className="mobile-nav">
                    {navItems.map((item, i) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="mobile-nav-link"
                            style={{ transitionDelay: `${0.06 * i + 0.1}s` }}
                            onClick={() => setIsMenuOpen(false)}
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
