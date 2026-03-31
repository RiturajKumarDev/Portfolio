import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

emailjs.init({
    publicKey: "wrzGPvG8Dq_aUT-zh",
});

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        sms: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const sendEmail = () => {
        const { name, email, mobile, sms } = formData;

        if (!name || !email || !mobile || !sms) {
            alert("Please fill all fields!!!");
            return;
        }

        const serviceID = "service_o243fyw";
        const templateID = "template_06srgch";

        const params = {
            name,
            email,
            mobile,
            sms,
        };

        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                console.log(res);
                alert("Your message was sent successfully.");

                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    sms: "",
                });
            })
            .catch((err) => {
                console.log(err);
                alert("Failed to send message.");
            });
    };

    return (
        <div className="contact" id="contact">
            <div className="content">
                <div className="social">
                    <div className="social-container">
                        <p>
                            <i className="fa-solid fa-paper-plane"></i>{" "}
                            riturajkumar.dev@gmail.com
                        </p>
                        <p>
                            <i className="fa-solid fa-phone"></i> +91 9507091174
                        </p>

                        <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/rituraj-kumar-dev/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>

                            <a
                                href="https://github.com/RiturajKumarDev"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>

                            <a
                                href="https://x.com/RITURAJKUMARDEV"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-twitter-square"></i>
                            </a>

                            <a
                                href="https://www.instagram.com/accounts/login/?hl=en"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="form">
                    <div>
                        <input
                            type="text"
                            name="name"
                            className="name"
                            minLength="4"
                            required
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            className="email"
                            required
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="mobile"
                            className="mobile"
                            required
                            placeholder="Enter Your Mobile No."
                            value={formData.mobile}
                            onChange={handleChange}
                        />

                        <textarea
                            name="sms"
                            className="sms"
                            id="sms"
                            required
                            placeholder="Enter Your Message...."
                            value={formData.sms}
                            onChange={handleChange}
                        ></textarea>

                        <button type="button" onClick={sendEmail}>
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
