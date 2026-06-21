import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiArrowDown, FiMail, FiPhone, FiDownload } from 'react-icons/fi';
import useTypewriter from '../../hooks/useTypewriter';
import './Hero.css';

const roles = [
  'MERN Stack Developer',
  'Android App Developer',
  'AI / ML Engineer',
  'Full Stack Developer',
  'Java Programmer',
  'Mobile App Designer',
  'Web Designer',
];

const socials = [
  { icon: FaGithub,    href: 'https://github.com/RiturajKumarDev',             label: 'GitHub' },
  { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/rituraj-kumar-dev/', label: 'LinkedIn' },
  { icon: FaXTwitter,  href: 'https://x.com/RITURAJKUMARDEV',                 label: 'Twitter' },
  { icon: FaInstagram, href: 'https://www.instagram.com/rituraj.kumar.dev',   label: 'Instagram' },
];

const stats = [
  { value: '15+', label: 'Projects' },
  { value: '6+',  label: 'Apps' },
  { value: '2+',  label: 'Years' },
];

const Hero = () => {
  const typedText = useTypewriter(roles, 80, 1800);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      {/* ── Background ─────────────────────── */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container">
        {/* ── LEFT — Text Content ──────────────────── */}
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for Opportunities
          </div>

          <p className="hero__greeting">Hello, I'm</p>

          {/* Name */}
          <h1 className="hero__title">
            <span className="hero__name">Rituraj Kumar</span>
          </h1>

          {/* Typewriter */}
          <div className="hero__typewriter">
            <span className="hero__role-prefix">I am </span>
            <span className="hero__role">{typedText}</span>
            <span className="hero__cursor" />
          </div>

          {/* Bio */}
          <p className="hero__bio">
            Passionate developer crafting elegant web & mobile experiences.
            I build products that are <strong>fast</strong>, <strong>accessible</strong>, and <strong>beautiful</strong> — from concept to deployment.
          </p>

          {/* CTAs */}
          <div className="hero__ctas">
            <button className="btn-primary hero__cta-main" onClick={() => scrollTo('projects')}>
              View Projects <FiArrowDown />
            </button>
            <a href="/Resume_Rituraj_Kumar.pdf" download className="btn-secondary hero__cta-secondary">
              <FiDownload /> Resume
            </a>
          </div>

          {/* Stats & Socials Row */}
          <div className="hero__footer-row">
            <div className="hero__stats-inline">
              {stats.map(({ value, label }) => (
                <div key={label} className="hero__stat-item">
                  <span className="hero__stat-number gradient-text">{value}</span>
                  <span className="hero__stat-desc">{label}</span>
                </div>
              ))}
            </div>

            <div className="hero__divider-v" />

            <div className="hero__socials-clean">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-icon-btn"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT — Photo Card ───────────────────── */}
        <div className="hero__right">
          {/* Photo frame */}
          <div className="hero__photo-frame">
            <div className="hero__photo-glow" />
            <img
              src="/img/rituraj.jpeg"
              alt="Rituraj Kumar"
              className="hero__photo"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
            <div className="hero__photo-fallback">
              <span>RK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero__scroll-indicator"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about"
      >
        <span className="hero__scroll-text">Scroll Down</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
