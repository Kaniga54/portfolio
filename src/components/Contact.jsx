import React, { useState } from 'react';
import { Mail, Send, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const Github = ({ size = 24, ...props }) => (
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

const Linkedin = ({ size = 24, ...props }) => (
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
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error' or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear validation error when user types
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
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API submission
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setSubmitStatus('error');
    }
  };

  const contactDetails = [
    {
      icon: <Mail className="contact-detail-icon" size={20} />,
      label: 'Email Me',
      value: 'kanigeshwaritm@gmail.com',
      href: 'mailto:kanigeshwaritm@gmail.com'
    },
    {
      icon: <Phone className="contact-detail-icon" size={20} />,
      label: 'Call Me',
      value: '+91 6381915595',
      href: 'tel:+916381915595'
    },
    {
      icon: <MapPin className="contact-detail-icon" size={20} />,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={22} />,
      href: 'https://github.com/Kaniga54',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={22} />,
      href: 'https://www.linkedin.com/in/kanigeshwari-tm/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={22} />,
      href: 'mailto:kanigeshwaritm@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Reach Out</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Column 1: Info and Socials */}
          <div className="contact-info">
            <h3 className="contact-heading">Let's build something amazing together</h3>
            <p className="contact-text">
              Have an exciting project idea, a job opportunity, or just want to say hello? 
              Feel free to drop a message. I am always open to discussing new web development opportunities, frontend roles, or responsive UI designs.
            </p>

            <div className="contact-details">
              {contactDetails.map((detail, index) => (
                <a key={index} href={detail.href} className="contact-detail-card glass-card">
                  <div className="contact-icon-wrapper">
                    {detail.icon}
                  </div>
                  <div className="contact-detail-content">
                    <span className="contact-detail-label">{detail.label}</span>
                    <span className="contact-detail-value">{detail.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-socials-wrapper">
              <span className="socials-label">FIND ME ON</span>
              <div className="contact-socials">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="contact-social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="contact-form-container glass-card">
            <h3 className="contact-heading">Send a Message</h3>
            
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
                  <span>Please correct the errors in the form below.</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${errors.name ? 'invalid' : ''}`}
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${errors.email ? 'invalid' : ''}`}
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`form-control ${errors.subject ? 'invalid' : ''}`}
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`form-control ${errors.message ? 'invalid' : ''}`}
                  placeholder="Your Message..."
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
        </div>
      </div>
    </section>
  );
}
