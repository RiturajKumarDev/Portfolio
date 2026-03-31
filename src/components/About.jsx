import "./about.css";

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about-info">
                <div className="my-pic">
                    <img src="img/rituraj-kumar-img.jpg" alt="Rituraj's pic" />
                </div>
                <div className="details">
                    <h2>AI/ML, Full Stack & Mobile App Developer</h2>
                    <p>
                        I am a passionate AI/ML, Full Stack Web, and Mobile App Developer with over two years of hands-on experience in building scalable, high-performance digital products. I specialize in developing intelligent applications that combine modern web technologies, mobile platforms, and machine learning to solve real-world problems.

                        I have strong expertise in frontend technologies like React, JavaScript, HTML5, CSS3, and XML, along with backend development using Node.js, Express.js, Python, Django, and Java. I also work extensively with databases and tools such as MongoDB, MySQL, SQL, Firebase, SQLite, and Git. My foundation in Data Structures and Algorithms (DSA) using C and C++ enables me to write optimized and efficient code.

                        I have developed multiple real-world projects including e-commerce platforms like Click Cart, smart hiring systems like Quick Hire, student management systems, and AI-powered applications like Fresh Sense AI, which predicts fruit freshness using sensor data and machine learning.

                        My approach focuses on creating clean, modern, and user-friendly interfaces while ensuring strong backend performance. I deeply understand UI/UX principles and always design from the user's perspective to deliver intuitive and engaging experiences.

                        Along with technical expertise, I possess strong soft skills including communication, teamwork, leadership, problem-solving, adaptability, and critical thinking. I believe that great products are built not only with code but also with creativity and a deep understanding of user needs.

                        I continuously learn and adapt to new technologies to stay ahead in the rapidly evolving tech world, aiming to build impactful and intelligent solutions that make a difference.
                    </p>
                    <div className="about-more">
                        <a href="img/Rituraj Kumar Resume.pdf" className="about-more-btn" target="_main">About More</a>
                        <a href="#contact" className="hire-me" target="_main">Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;