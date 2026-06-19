import { useRef, useEffect } from 'react';
import { FaReact, FaNodeJs, FaJava, FaPython, FaDatabase, FaAndroid } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiAndroid, SiKotlin, SiTensorflow, SiScikitlearn, SiNumpy } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
import './Expertise.css';

const expertiseData = [
  {
    id: 'mern',
    emoji: '🌐',
    title: 'MERN Stack',
    subtitle: 'Full Stack Web Development',
    gradient: 'linear-gradient(135deg, #00d4ff22 0%, #7c3aed22 100%)',
    borderColor: 'rgba(0, 212, 255, 0.25)',
    glowColor: 'rgba(0, 212, 255, 0.12)',
    accentColor: '#00d4ff',
    description:
      'End-to-end web applications using MongoDB, Express.js, React, and Node.js. From responsive frontends to scalable RESTful APIs and database design.',
    techStack: [
      { icon: SiMongodb,  name: 'MongoDB',    color: '#47A248' },
      { icon: SiExpress,  name: 'Express.js', color: '#ffffff' },
      { icon: FaReact,    name: 'React',      color: '#61DAFB' },
      { icon: FaNodeJs,   name: 'Node.js',    color: '#339933' },
    ],
    highlights: [
      'REST API Design',
      'JWT Authentication',
      'Real-time with Socket.io',
      'Vercel / Render Deploy',
      'MongoDB Atlas',
      'React Hooks & Context',
    ],
    projects: '6+ Web Projects',
  },
  {
    id: 'android',
    emoji: '📱',
    title: 'Android App Dev',
    subtitle: 'Native Android — Java & XML',
    gradient: 'linear-gradient(135deg, #3ddc8422 0%, #00c85322 100%)',
    borderColor: 'rgba(61, 220, 132, 0.25)',
    glowColor: 'rgba(61, 220, 132, 0.1)',
    accentColor: '#3DDC84',
    description:
      'Native Android applications using Java and XML layouts. Published apps on Google Play Store with features like real-time sync, offline support, and clean UI design.',
    techStack: [
      { icon: FaJava,     name: 'Java',     color: '#007396' },
      { icon: SiAndroid,  name: 'Android',  color: '#3DDC84' },
      { icon: SiKotlin,   name: 'Kotlin',   color: '#7F52FF' },
      { icon: FaDatabase, name: 'SQLite',   color: '#003B57' },
    ],
    highlights: [
      'Google Play Published',
      'Firebase Integration',
      'Room Database / SQLite',
      'Material Design 3',
      'Retrofit & OkHttp',
      'Online / Offline Modes',
    ],
    projects: '4+ Play Store Apps',
  },
  {
    id: 'aiml',
    emoji: '🤖',
    title: 'AI / ML',
    subtitle: 'Machine Learning & Computer Vision',
    gradient: 'linear-gradient(135deg, #a855f722 0%, #ec489922 100%)',
    borderColor: 'rgba(168, 85, 247, 0.25)',
    glowColor: 'rgba(168, 85, 247, 0.1)',
    accentColor: '#a855f7',
    description:
      'Building intelligent systems using Python, TensorFlow, and Scikit-learn. Specializing in computer vision, predictive modeling, and deploying ML APIs with Django/Flask.',
    techStack: [
      { icon: FaPython,       name: 'Python',      color: '#3776AB' },
      { icon: SiTensorflow,   name: 'TensorFlow',  color: '#FF6F00' },
      { icon: SiScikitlearn,  name: 'Scikit-learn',color: '#F7931E' },
      { icon: SiNumpy,        name: 'NumPy',       color: '#4dabf7' },
    ],
    highlights: [
      'Computer Vision (OpenCV)',
      'Predictive Modeling',
      'Model Deployment (API)',
      'Data Analysis & Pandas',
      'Neural Networks',
      'Kaggle & Research Projects',
    ],
    projects: '2+ AI Projects',
  },
];

const Expertise = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
            entry.target.querySelectorAll('.exp-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('exp-card--visible'), i * 150);
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
    <section id="expertise" className="expertise section" ref={sectionRef}>
      <div className="expertise__bg-orb expertise__bg-orb--1" />
      <div className="expertise__bg-orb expertise__bg-orb--2" />

      <div className="container">
        <div className="section-header">
          <div className="section-tag scroll-reveal">What I Do</div>
          <h2 className="section-title scroll-reveal">
            My <span>Expertise</span>
          </h2>
          <p className="section-subtitle scroll-reveal">
            Three core domains where I build real, production-ready solutions.
          </p>
        </div>

        <div className="expertise__grid">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="exp-card glass-card"
              style={{
                '--card-gradient': item.gradient,
                '--card-border': item.borderColor,
                '--card-glow': item.glowColor,
                '--card-accent': item.accentColor,
              }}
            >
              {/* Top section */}
              <div className="exp-card__header">
                <div className="exp-card__emoji-wrap">
                  <span className="exp-card__emoji">{item.emoji}</span>
                  <div className="exp-card__emoji-glow" />
                </div>
                <div className="exp-card__header-info">
                  <h3 className="exp-card__title">{item.title}</h3>
                  <p className="exp-card__subtitle">{item.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="exp-card__desc">{item.description}</p>

              {/* Tech stack icons */}
              <div className="exp-card__tech">
                <span className="exp-card__tech-label">Tech Stack</span>
                <div className="exp-card__tech-icons">
                  {item.techStack.map(({ icon: Icon, name, color }) => (
                    <div key={name} className="exp-card__tech-icon" title={name}>
                      <Icon size={22} style={{ color }} />
                      <span className="exp-card__tech-name">{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="exp-card__highlights">
                {item.highlights.map((h) => (
                  <span key={h} className="exp-card__highlight">
                    <FiArrowRight size={11} /> {h}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="exp-card__footer">
                <span className="exp-card__projects">{item.projects}</span>
                <div className="exp-card__divider" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
