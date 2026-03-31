import Project from "./Project";
import "./projects.css";

const Projects = () => {
    const webProjectsList = [
        {
            name: "Click Cart",
            appName: "E-commerce Web Application",
            imageUrl: "img/click-cart.jpg",
            description: "A fully functional e-commerce web application that allows users to browse products, add items to cart, and place orders. Designed with a clean UI and smooth user experience.",
            visitUrl: "https://riturajkumarty.pythonanywhere.com/",
            githugUrl: "https://github.com/RiturajKumarDev/CLICKCART-Ecommerce-WebApp"
        },
        {
            name: "Quick Hire",
            appName: "Applicant Selection & Hiring System",
            imageUrl: "img/Quick Hire.jpg",
            description: "A smart hiring platform that connects recruiters and applicants. It helps streamline the recruitment process by managing applications and simplifying candidate selection.",
            visitUrl: "https://quickhire.pythonanywhere.com/home",
            githugUrl: "https://github.com/RiturajKumarDev/QuickHire-Selector-Applicant-Simutware-Hiring"
        },
        {
            name: "Student Result Management",
            appName: "Student Result Management System",
            imageUrl: "img/result.jpeg",
            description: "A web-based system for managing student results efficiently. It allows admins to add, update, and view student performance data in an organized way.",
            visitUrl: "https://github.com/RITURAJKUKMAR/StudentResultManagement",
            githugUrl: "https://github.com/RiturajKumarDev/StudentResultManagement"
        },
        {
            name: "Rituraj's Portfolio",
            appName: "Personal Portfolio Website",
            imageUrl: "img/Portfolio.png",
            description: "A personal portfolio website showcasing projects, skills, and achievements. Designed to present work in a clean and professional manner.",
            visitUrl: "https://github.com/RiturajKumarDev",
            githugUrl: "https://github.com/RiturajKumarDev"
        }
    ];

    const appProjectsList = [
        {
            name: "Focus Test Series",
            appName: "Create and manage test papers easily using PDF, images, or manual question entry.",
            imageUrl: "img/Focus_Test_Series.png",
            description: "A powerful app for teachers and students to create, organize, and attempt test series. Supports PDF-based questions, image uploads, and manual input for flexible test creation.",
            visitUrl: "https://play.google.com/store/apps/details?id=com.rituraj.focustestseries",
            githugUrl: "https://github.com/RiturajKumarDev"
        },
        {
            name: "Kirana Store (Grocery App)",
            appName: "Simple and smart grocery shopping experience.",
            imageUrl: "img/shivam_kirana_store.png",
            description: "A user-friendly grocery shopping app designed for local stores. Easily browse products, manage orders, and provide a smooth shopping experience for customers.",
            visitUrl: "https://play.google.com/store/apps/details?id=com.rituraj.shivamkiranastore",
            githugUrl: "https://github.com/RiturajKumarDev"
        },
        {
            name: "Fresh Sense AI",
            appName: "AI-powered app to detect fruit freshness and predict spoilage.",
            imageUrl: "img/FreshSenseAi_Logo.png",
            description: "An intelligent app that analyzes fruit freshness using sensor data and AI. It predicts whether fruits are fresh, need to be used soon, or are spoiled, along with remaining shelf life.",
            visitUrl: "https://play.google.com/store/apps/details?id=com.rituraj.freshsenseai",
            githugUrl: "https://github.com/RiturajKumarDev"
        },
        {
            name: "Card Matcher Game",
            appName: "Enjoy card matching gameplay in online and offline modes with friends.",
            imageUrl: "img/card_matcher_game_logo.png",
            description: "A memory-based card matching game that supports both online and offline play. Users can enjoy the game with friends, challenge their memory skills, and experience smooth and entertaining gameplay across different modes.",
            visitUrl: "https://play.google.com/store/apps/details?id=com.rituraj.cardmatcher_brainmaster",
            githugUrl: "https://github.com/RiturajKumarDev"
        }
    ];

    const aiMlProjectsList = [
        {
            name: "Fresh Sense AI",
            appName: "AI-powered app to detect fruit freshness and predict spoilage.",
            imageUrl: "img/FreshSenseAi_Logo.png",
            description: "An intelligent app that analyzes fruit freshness using sensor data and AI. It predicts whether fruits are fresh, need to be used soon, or are spoiled, along with remaining shelf life.",
            visitUrl: "https://play.google.com/store/apps/details?id=com.rituraj.freshsenseai",
            githugUrl: "https://github.com/RiturajKumarDev"
        },
    ]

    return (
        <div className="projects" id="project">
            <div className="project">
                <h2>Web App</h2>
                <div className="web">
                    {webProjectsList.map((project) => {
                        return <Project key={project.name} project={project}></Project>
                    })}
                </div>

                <h2>Mobile App</h2>
                <div className="app">
                    {appProjectsList.map((project) => {
                        return <Project key={project.name} project={project}></Project>
                    })}
                </div>
                <h2>AI ML</h2>
                <div className="app">
                    {aiMlProjectsList.map((project) => {
                        return <Project key={project.name} project={project}></Project>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects;
