import {
    FaReact, FaNodeJs, FaPython, FaJava,
    FaHtml5, FaCss3, FaJs, FaGitAlt, FaComments,
    FaUsers, FaBrain, FaUserTie, FaClock, FaSyncAlt, FaLightbulb, FaPalette
} from 'react-icons/fa';
import {
    SiMongodb, SiDjango, SiSqlite, SiCplusplus, SiExpress,
    SiXml, SiMysql, SiFirebase, SiC, SiCodeforces,
} from 'react-icons/si';
import Skill from "./Skill";
import "./skills.css";

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', icon: FaReact, level: 90, color: '#61DAFB' },
                { name: 'JavaScript', icon: FaJs, level: 85, color: '#F7DF1E' },
                { name: 'XML', icon: SiXml, level: 75, color: '#E44D26' },
                { name: 'HTML5', icon: FaHtml5, level: 95, color: '#E34F26' },
                { name: 'CSS3', icon: FaCss3, level: 90, color: '#1572B6' },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: FaNodeJs, level: 85, color: '#339933' },
                { name: 'Express.js', icon: SiExpress, level: 80, color: '#000000' },
                { name: 'Python', icon: FaPython, level: 80, color: '#3776AB' },
                { name: 'Django', icon: SiDjango, level: 75, color: '#092E20' },
                { name: 'Java', icon: FaJava, level: 70, color: '#007396' },
            ],
        },
        {
            title: 'Database & Tools',
            skills: [
                { name: 'Git', icon: FaGitAlt, level: 90, color: '#F05032' },
                { name: 'DSA', icon: SiCodeforces, level: 80, color: '#FF6F00' },
                { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
                { name: 'SQL', icon: SiMysql, level: 75, color: '#4479A1' },
                { name: 'Firebase', icon: SiFirebase, level: 85, color: '#FFCA28' },
                { name: 'SQLite', icon: SiSqlite, level: 75, color: '#003B57' },
                { name: 'C', icon: SiC, level: 75, color: '#A8B9CC' },
                { name: 'C++', icon: SiCplusplus, level: 75, color: '#00599C' },
            ],
        },
        {
            title: 'Soft Skills',
            skills: [
                { name: 'Communication', icon: FaComments, level: 85, color: '#38BDF8' },
                { name: 'Teamwork', icon: FaUsers, level: 90, color: '#22C55E' },
                { name: 'Problem Solving', icon: FaBrain, level: 85, color: '#A855F7' },
                { name: 'Leadership', icon: FaUserTie, level: 80, color: '#F59E0B' },
                { name: 'Time Management', icon: FaClock, level: 85, color: '#EF4444' },
                { name: 'Adaptability', icon: FaSyncAlt, level: 80, color: '#06B6D4' },
                { name: 'Critical Thinking', icon: FaLightbulb, level: 85, color: '#EAB308' },
                { name: 'Creativity', icon: FaPalette, level: 80, color: '#EC4899' },
            ],
        }
    ];

    return (
        <div>
            {skillCategories.map((skillCategorie) => {
                return <div key={skillCategorie.title}>
                    <h2 className="skillTitle" >{skillCategorie.title}</h2>
                    <div className="skills">
                        {skillCategorie.skills.map((skill) => {
                            return <Skill key={skill.name} skill={skill} ></Skill>
                        })}
                    </div>
                </div>
            })}
        </div>
    )
}

export default Skills;
