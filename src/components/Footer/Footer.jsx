import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const socials = [
  { icon: FaGithub,    href: 'https://github.com/RiturajKumarDev',             label: 'GitHub' },
  { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/rituraj-kumar-dev/', label: 'LinkedIn' },
  { icon: FaXTwitter,  href: 'https://x.com/RITURAJKUMARDEV',                 label: 'Twitter' },
  { icon: FaInstagram, href: 'https://www.instagram.com/rituraj.kumar.dev',   label: 'Instagram' },
  { icon: FiMail,      href: 'mailto:riturajkumar.dev@gmail.com',             label: 'Email' },
];

const quickLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Projects',href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__top-line" />
      <div className="container">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-text gradient-text">RK</span>
              <span className="footer__logo-dot" />
            </div>
            <p className="footer__tagline">
              Building elegant digital experiences, one line of code at a time.
            </p>
            <div className="footer__socials">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="footer__social"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    className="footer__link"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__links">
              <li><a href="mailto:riturajkumar.dev@gmail.com" className="footer__link">riturajkumar.dev@gmail.com</a></li>
              <li><span className="footer__link">India 🇮🇳</span></li>
              <li>
                <span className="footer__available">
                  <span className="footer__available-dot" /> Open for Opportunities
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} <span className="gradient-text">Rituraj Kumar</span>. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <FiHeart className="footer__heart" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
