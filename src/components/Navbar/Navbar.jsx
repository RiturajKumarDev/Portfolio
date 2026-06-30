import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import useScrollSpy from '../../hooks/useScrollSpy';
import './Navbar.css';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Expertise',  href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(['home', 'about', 'expertise', 'experience', 'skills', 'projects', 'contact'], 100);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <a
          href="https://portfolio-rkd.vercel.app/"
          className="navbar__logo"
        >
          <div className="navbar__logo-mark">RK</div>
          <div className="navbar__logo-info">
            <span className="navbar__logo-name">Rituraj Kumar</span>
            <span className="navbar__logo-sub">Developer &amp; Designer</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${active === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="mailto:riturajkumar.dev@gmail.com" className="navbar__cta">
          Hire Me ✦
        </a>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-inner">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__mobile-link ${active === link.href.replace('#', '') ? 'navbar__mobile-link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:riturajkumar.dev@gmail.com"
            className="navbar__mobile-cta"
          >
            Hire Me ✦
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
