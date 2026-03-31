import "./skill.css";

const Skill = ({ skill }) => {
    return (
        <div className='skill' style={{ boxShadow: `0 10px 20px ${skill.color}33` }}>
            <div className="skill-icon" style={{ color: skill.color }}>
                <skill.icon />
            </div>
            <h3>{skill.name}</h3>
            <div className="skill-level">
                <div
                    className="skill-progress" style={{ backgroundColor: skill.color, width: `${skill.level}%` }}
                ></div>
                <span>{skill.level}%</span>
            </div>
        </div>
    )
}

export default Skill;
