import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
  FiMail, FiSend, FiMapPin, FiPhone, FiUser, FiMessageSquare,
  FiCheckCircle, FiAlertCircle,
} from 'react-icons/fi';
import './Contact.css';

/* ── EmailJS config ─────────────────────────────── */
const EMAILJS_PUBLIC_KEY = 'wrzGPvG8Dq_aUT-zh';
const EMAILJS_SERVICE_ID = 'service_o243fyw';
const EMAILJS_TEMPLATE_ID = 'template_06srgch';

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

/* ── Social links ───────────────────────────────── */
const socials = [
  { icon: FaGithub,    href: 'https://github.com/RiturajKumarDev',             label: 'GitHub',    color: '#e0e0e0' },
  { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/rituraj-kumar-dev/', label: 'LinkedIn',  color: '#0A66C2' },
  { icon: FaXTwitter,  href: 'https://x.com/RITURAJKUMARDEV',                 label: 'Twitter',   color: '#1DA1F2' },
  { icon: FaInstagram, href: 'https://www.instagram.com/rituraj.kumar.dev',   label: 'Instagram', color: '#E1306C' },
];

/* ── Contact Component ──────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', sms: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const sectionRef = useRef(null);

  /* Scroll-reveal for section header */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const sendEmail = () => {
    const { name, email, mobile, sms } = formData;

    /* Validation */
    if (!name || !email || !mobile || !sms) {
      setErrorMsg('Please fill in all fields.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { name, email, mobile, sms })
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', mobile: '', sms: '' });
        /* Auto-reset after 5s */
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setErrorMsg('Failed to send message. Please try again.');
        setStatus('error');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="contact__bg-orb" />
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag scroll-reveal">Get In Touch</div>
          <h2 className="section-title scroll-reveal">
            Let's <span>Connect</span>
          </h2>
          <p className="section-subtitle scroll-reveal">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="contact__grid">
          {/* ── Left Info Card ── */}
          <div className="contact__info scroll-reveal">
            <div className="contact__info-card glass-card">
              <h3 className="contact__info-title">Contact Information</h3>
              <p className="contact__info-desc">
                Fill out the form and I'll get back to you as soon as possible. I typically respond within 24 hours.
              </p>

              <div className="contact__info-items">
                <div className="contact__info-item">
                  <div className="contact__info-icon"><FiMail size={18} /></div>
                  <div>
                    <div className="contact__info-label">Email</div>
                    <a href="mailto:riturajkumar.dev@gmail.com" className="contact__info-value contact__info-link">
                      riturajkumar.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon"><FiPhone size={18} /></div>
                  <div>
                    <div className="contact__info-label">Phone / WhatsApp</div>
                    <a href="tel:+919507091174" className="contact__info-value contact__info-link">
                      +91 9507091174
                    </a>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon"><FiMapPin size={18} /></div>
                  <div>
                    <div className="contact__info-label">Location</div>
                    <div className="contact__info-value">India 🇮🇳</div>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon contact__info-icon--green"><FiCheckCircle size={18} /></div>
                  <div>
                    <div className="contact__info-label">Availability</div>
                    <div className="contact__info-value contact__info-available">Open for Projects</div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="contact__socials">
                <div className="contact__socials-title">Find me on</div>
                <div className="contact__socials-row">
                  {socials.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social"
                      aria-label={label}
                      title={label}
                      style={{ '--social-color': color }}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Form ── */}
          <form
            className="contact__form glass-card scroll-reveal"
            onSubmit={handleSubmit}
            noValidate
          >
            <h3 className="contact__form-title">Send a Message</h3>

            {/* Name + Email row */}
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">Your Name</label>
                <div className="contact__input-wrap">
                  <FiUser size={15} className="contact__input-icon" />
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Rituraj Kumar"
                    className="contact__input"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">Email Address</label>
                <div className="contact__input-wrap">
                  <FiMail size={15} className="contact__input-icon" />
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="contact__input"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="contact__field">
              <label htmlFor="contact-mobile" className="contact__label">Mobile / WhatsApp</label>
              <div className="contact__input-wrap">
                <FiPhone size={15} className="contact__input-icon" />
                <input
                  id="contact-mobile"
                  name="mobile"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="contact__input"
                  value={formData.mobile}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="contact__field">
              <label htmlFor="contact-sms" className="contact__label">Message</label>
              <div className="contact__textarea-wrap">
                <FiMessageSquare size={15} className="contact__textarea-icon" />
                <textarea
                  id="contact-sms"
                  name="sms"
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                  className="contact__textarea"
                  value={formData.sms}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  required
                />
              </div>
            </div>

            {/* Status messages */}
            {status === 'error' && errorMsg && (
              <div className="contact__status contact__status--error">
                <FiAlertCircle size={16} /> {errorMsg}
              </div>
            )}
            {status === 'success' && (
              <div className="contact__status contact__status--success">
                <FiCheckCircle size={16} /> Message sent successfully! I'll reply soon. 🎉
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className={`btn-primary contact__submit ${status === 'sending' ? 'contact__submit--loading' : ''}`}
              disabled={status === 'sending' || status === 'success'}
            >
              {status === 'sending' ? (
                <><span className="contact__spinner" /> Sending…</>
              ) : status === 'success' ? (
                <><FiCheckCircle size={16} /> Message Sent!</>
              ) : (
                <><FiSend size={16} /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
