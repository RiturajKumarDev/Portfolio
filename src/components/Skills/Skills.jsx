import { useState, useEffect, useRef } from 'react';
import { skillCategories } from '../../data/skills';
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaGitAlt,
  FaComments, FaUsers, FaBrain, FaUserTie, FaClock, FaLightbulb, FaGithub,
} from 'react-icons/fa';
import {
  SiExpress, SiDjango, SiMongodb, SiMysql, SiFirebase, SiSqlite,
  SiC, SiCplusplus, SiCodeforces, SiXml, SiPostman, SiAndroid,
  SiKotlin, SiGradle, SiGoogleplay, SiTensorflow, SiScikitlearn,
  SiNumpy, SiPandas, SiJupyter,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaSyncAlt, FaPalette } from 'react-icons/fa';
import './Skills.css';

const iconMap = {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaGitAlt,
  FaComments, FaUsers, FaBrain, FaUserTie, FaClock, FaLightbulb, FaSyncAlt,
  FaPalette, FaGithub,
  SiExpress, SiDjango, SiMongodb, SiMysql, SiFirebase, SiSqlite, SiC,
  SiCplusplus, SiCodeforces, SiXml, SiPostman, SiAndroid, SiKotlin,
  SiGradle, SiGoogleplay, SiTensorflow, SiScikitlearn, SiNumpy, SiPandas,
  SiJupyter, VscVscode,
};


const SkillBar = ({ name, level, color, icon: iconName, animate }) => {
  const IconComponent = iconMap[iconName] || FaReact;
  return (
    <div className="skill-card glass-card">
      <div className="skill-card__header">
        <div className="skill-card__icon" style={{ color }}>
          <IconComponent size={22} />
        </div>
        <span className="skill-card__name">{name}</span>
        <span className="skill-card__pct">{level}%</span>
      </div>
      <div className="skill-card__track">
        <div
          className="skill-card__fill"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 12px ${color}55`,
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Observe section entry — trigger animate once visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          // Also make all scroll-reveal children visible
          entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Re-trigger bar animation when tab changes
  const handleTabChange = (idx) => {
    setAnimate(false);
    setActiveTab(idx);
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
  };

  const category = skillCategories[activeTab];

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag scroll-reveal">My Expertise</div>
          <h2 className="section-title scroll-reveal">
            Skills & <span>Technologies</span>
          </h2>
          <p className="section-subtitle scroll-reveal">
            A curated set of tools and technologies I use to build robust solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="skills__tabs scroll-reveal">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              className={`skills__tab ${activeTab === i ? 'skills__tab--active' : ''}`}
              onClick={() => handleTabChange(i)}
            >
              <span className="skills__tab-icon">{cat.icon}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Grid — key forces remount when tab changes so cards re-appear */}
        <div className="skills__grid" key={activeTab}>
          {category.skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-item"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <SkillBar {...skill} animate={animate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
