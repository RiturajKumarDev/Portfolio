import { useState, useRef, useEffect } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaGlobe, FaMobileAlt, FaBrain } from 'react-icons/fa';
import { webProjectsList, appProjectsList, aiMlProjectsList } from '../../data/projects';
import './Projects.css';

const filters = [
  { label: 'All',     icon: FaGlobe,     key: 'all' },
  { label: 'Web',     icon: FaGlobe,     key: 'web' },
  { label: 'Mobile',  icon: FaMobileAlt, key: 'mobile' },
  { label: 'AI / ML', icon: FaBrain,     key: 'ai' },
];

const allProjects = [
  ...webProjectsList.map((p) => ({ ...p, category: 'web' })),
  ...appProjectsList.map((p) => ({ ...p, category: 'mobile' })),
  ...aiMlProjectsList.map((p) => ({ ...p, category: 'ai' })),
];

/* ── Project Card ──────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="project-card glass-card project-card--animate"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* Image */}
      <div className="project-card__img-wrap">
        {!imgError ? (
          <img
            src={project.imageUrl}
            alt={project.name}
            className="project-card__img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="project-card__img-fallback">
            <span>{project.name.charAt(0)}</span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="project-card__overlay">
          <div className="project-card__overlay-btns">
            <a
              href={project.visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__overlay-btn"
            >
              <FiExternalLink size={16} /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__overlay-btn project-card__overlay-btn--ghost"
            >
              <FiGithub size={16} /> GitHub
            </a>
          </div>
        </div>

        {/* Category emoji badge */}
        <div className="project-card__cat-badge">
          {project.category === 'web'    && '🌐'}
          {project.category === 'mobile' && '📱'}
          {project.category === 'ai'     && '🤖'}
        </div>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <div className="project-card__app-name">{project.appName}</div>
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags?.map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Projects Section ──────────────────────────────── */
const Projects = () => {
  const [active, setActive] = useState('all');
  const [filterKey, setFilterKey] = useState(0); // forces re-mount of grid on filter change
  const sectionRef = useRef(null);

  // Section header reveal
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

  const handleFilter = (key) => {
    setActive(key);
    setFilterKey((k) => k + 1); // bump key → grid remounts → animations replay
  };

  const filtered =
    active === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === active);

  return (
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag scroll-reveal">My Work</div>
          <h2 className="section-title scroll-reveal">
            Featured <span>Projects</span>
          </h2>
          <p className="section-subtitle scroll-reveal">
            A showcase of real-world applications I've designed and developed.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects__filters scroll-reveal">
          {filters.map(({ label, icon: Icon, key }) => (
            <button
              key={key}
              className={`projects__filter ${active === key ? 'projects__filter--active' : ''}`}
              onClick={() => handleFilter(key)}
            >
              <Icon size={15} />
              {label}
              <span className="projects__filter-count">
                {key === 'all'
                  ? allProjects.length
                  : allProjects.filter((p) => p.category === key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid — key prop forces full remount so animations always fire */}
        <div className="projects__grid" key={filterKey}>
          {filtered.map((project, i) => (
            <ProjectCard
              key={`${project.category}-${project.name}`}
              project={project}
              index={i}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="projects__github-cta scroll-reveal">
          <a
            href="https://github.com/RiturajKumarDev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FiGithub size={18} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
