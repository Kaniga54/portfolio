import React, { useState } from 'react';
import { Mail, Send, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const Github = ({ size = 22, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 22, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setSubmitStatus('error');
    }
  };

  const connectButtons = [
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/kanigeshwari-tm/',
      label: 'LinkedIn'
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/Kaniga54',
      label: 'GitHub'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:kanigeshwaritm@gmail.com',
      label: 'Email'
    },
    {
      icon: <Phone size={20} />,
      href: 'tel:+916381915595',
      label: 'Call'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title contact-title-custom">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Form */}
          <div className="contact-form-container glass-card">
            <form onSubmit={handleSubmit} noValidate>
              {submitStatus === 'success' && (
                <div className="form-status success">
                  <CheckCircle size={20} />
                  <span>Your message has been sent successfully! I will get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-status error">
                  <AlertCircle size={20} />
                  <span>Please fill in all fields correctly.</span>
                </div>
              )}

              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${errors.name ? 'invalid' : ''}`}
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${errors.email ? 'invalid' : ''}`}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`form-control ${errors.message ? 'invalid' : ''}`}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

          {/* Right Column: Connect Info & Circular Action Buttons */}
          <div className="contact-connect-info">
            <h3 className="connect-heading">Let's Connect</h3>
            <p className="connect-text">
              Feel free to contact me for internships, jobs or freelance work.
            </p>

            <div className="connect-buttons-row">
              {connectButtons.map((btn, index) => (
                <a
                  key={index}
                  href={btn.href}
                  className="connect-circle-btn"
                  target={btn.href.startsWith('tel:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={btn.label}
                  title={btn.label}
                >
                  {btn.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
