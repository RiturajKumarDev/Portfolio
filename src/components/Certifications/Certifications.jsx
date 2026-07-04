import { useState, useRef, useEffect } from 'react';
import { FaCalendarAlt, FaAward } from 'react-icons/fa';
import { certificationsList } from '../../data/certifications';
import './Certifications.css';

const CertCard = ({ cert, index }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="cert-card glass-card cert-card--animate"
      style={{
        animationDelay: `${index * 0.1}s`,
        '--card-accent': cert.color
      }}
    >
      <div className="cert-card__img-wrap">
        {cert.image && !imgError ? (
          <img
            loading="lazy"
            src={cert.image}
            alt={cert.title}
            className="cert-card__img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="cert-card__img-fallback">
            <FaAward color={cert.color} size={48} />
          </div>
        )}
        <div className="cert-card__cat-badge">
          {cert.category}
        </div>
      </div>

      <div className="cert-card__body">
        <div className="cert-card__date">
          <FaCalendarAlt size={12} /> {cert.date}
        </div>
        <h3 className="cert-card__title">{cert.title}</h3>
        <div className="cert-card__issuer">{cert.issuer}</div>
        <p className="cert-card__desc">{cert.description}</p>
      </div>
    </div>
  );
};

const Certifications = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="certifications section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag scroll-reveal">Achievements</div>
          <h2 className="section-title scroll-reveal">
            My <span>Certifications</span>
          </h2>
          <p className="section-subtitle scroll-reveal">
            Hackathons, courses, and competitions that have shaped my journey.
          </p>
        </div>

        <div className="certifications__grid">
          {certificationsList.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
