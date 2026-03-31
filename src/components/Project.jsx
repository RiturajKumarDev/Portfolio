import "./Project.css";

const Project = ({ project }) => {
    return (
        <div className="work">
            <img src={project.imageUrl} alt={project.name} />
            <div className="app-info">
                <h3>{project.name}</h3>
                <p>{project.appName}</p>
                <hr />
                <p>{project.description}</p>
                <a href={project.visitUrl} target='_main'><i
                    className="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href={project.githugUrl} target='_main'><i
                    className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    );
}

export default Project;
