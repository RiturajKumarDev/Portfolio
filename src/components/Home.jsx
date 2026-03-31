import "./home.css";
import Typing from "./Typing";

const Home = () => {

  return (
    <div className="home">
      <div className="name-info">
        <h2>Hello, I'm </h2>
        <h1 className="home-name">
          <span className="R">R</span>ituraj kumar
        </h1>
        <h2 className="webAndMobileDev">
          <Typing></Typing>
          <span className="cursor"> |</span>
        </h2>
        <p>
          AI & Full-Stack Developer <br />
          crafting high-performance
          web and mobile applications.
        </p>
        <div className="gitHub-resume">
          <a
            href="/img/Rituraj Kumar Resume.pdf"
            className="resume"
            download=""
            target="_main"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/RiturajKumarDev"
            className="gitHub"
            target="_main"
          >
            Visit Github
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/rituraj-kumar-dev/"
            target="_main"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/RiturajKumarDev" target="_main">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://x.com/RITURAJKUMARDEV" target="_main">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?hl=en"
            target="_main"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="my-pic">
        <img src="/img/rituraj-kumar-img.jpg" alt="Rituraj's pic" />
      </div>
    </div>
  );
};

export default Home;
