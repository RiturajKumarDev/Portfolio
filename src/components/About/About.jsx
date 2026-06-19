import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaMobileAlt, FaServer, FaBrain } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiDownload, FiMail, FiPhone } from 'react-icons/fi';
import './About.css';

const stats = [
  { value: '15+', label: 'Projects Built', icon: FaCode },
  { value: '6+', label: 'Apps Published', icon: FaMobileAlt },
  { value: '2+', label: 'Years of Experience', icon: FaServer },
  { value: '10+', label: 'Technologies', icon: FaGithub },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag scroll-reveal">About Me</div>
          <h2 className="section-title scroll-reveal">
            Who I <span>Am</span>
          </h2>
        </div>

        <div className="about__grid">
          {/* Left — Avatar */}
          <div className="about__avatar-wrap scroll-reveal">
            <div className="about__avatar-glow" />
            <div className="about__avatar">
              <div className="about__avatar-initials">RK</div>
              <div className="about__avatar-ring about__avatar-ring--1" />
              <div className="about__avatar-ring about__avatar-ring--2" />
            </div>
            {/* Floating badges */}
            <div className="about__float-badge about__float-badge--tl">
              <FaCode size={16} />
              <span>Full Stack</span>
            </div>
            <div className="about__float-badge about__float-badge--tr">
              <FaBrain size={16} />
              <span>AI / ML</span>
            </div>
            <div className="about__float-badge about__float-badge--br">
              <FaMobileAlt size={16} />
              <span>Mobile Dev</span>
            </div>
          </div>

          {/* Right — Info */}
          <div className="about__info">
            <p className="about__greeting scroll-reveal">Hello World! 👋</p>
            <h3 className="about__name scroll-reveal">I'm Rituraj Kumar</h3>
            <p className="about__bio scroll-reveal">
              A passionate <strong>Full-Stack Developer (MERN)</strong>, <strong>Android App Developer</strong>, and <strong>AI/ML enthusiast</strong> from India.
              I love transforming ideas into real, impactful digital products — whether it's an elegant web
              application, a native Android app, or an intelligent AI-powered system.
            </p>
            <p className="about__bio scroll-reveal" style={{ marginTop: 12 }}>
              With expertise spanning the <strong>MERN Stack, Java/XML Android development, Python, and TensorFlow</strong>, I bring a holistic
              approach to every project — clean code, intuitive UI, and optimal performance.
              I'm always eager to learn new technologies and tackle challenging problems.
            </p>

            {/* Info grid */}
            <div className="about__details scroll-reveal">
              <div className="about__detail">
                <span className="about__detail-label">Email</span>
                <a href="mailto:riturajkumar.dev@gmail.com" className="about__detail-value about__detail-link">
                  <FiMail size={14} /> riturajkumar.dev@gmail.com
                </a>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Phone</span>
                <a href="tel:+919507091174" className="about__detail-value about__detail-link">
                  <FiPhone size={14} /> +91 9507091174
                </a>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Location</span>
                <span className="about__detail-value">India 🇮🇳</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Availability</span>
                <span className="about__detail-value about__detail-available">Open to Opportunities</span>
              </div>
            </div>

            {/* Socials + CTA */}
            <div className="about__actions scroll-reveal">
              <a href="/Resume_Rituraj_Kumar.pdf" download className="btn-primary">
                <FiDownload /> Download Resume
              </a>
              <div className="about__socials">
                {[
                  { icon: FaGithub, href: 'https://github.com/RiturajKumarDev' },
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rituraj-kumar-dev/' },
                  { icon: FaXTwitter, href: 'https://x.com/RITURAJKUMARDEV' },
                  { icon: FaInstagram, href: 'https://www.instagram.com/rituraj.kumar.dev' },
                ].map(({ icon: Icon, href }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="about__social">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about__stats scroll-reveal">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="about__stat glass-card">
              <div className="about__stat-icon">
                <Icon size={24} />
              </div>
              <div className="about__stat-value">{value}</div>
              <div className="about__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
