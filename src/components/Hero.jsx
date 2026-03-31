import About from "./About"
import Home from "./Home"
import Skills from "./Skillsss";
import Projects from './Projects';
import Contact from './Contact'

const Hero = ({ seletedMenu }) => {
    if (seletedMenu == "Home")
        return <Home></Home>
    else if (seletedMenu == "About")
        return <About></About>
    else if (seletedMenu == "Projects")
        return <Projects></Projects>
    else if (seletedMenu == "Skills")
        return <Skills ></Skills>
    else if (seletedMenu == "Contact")
        return <Contact ></Contact>
}

export default Hero;
