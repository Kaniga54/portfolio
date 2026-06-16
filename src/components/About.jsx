import React from 'react';
import { GraduationCap, Award, BookOpen, Layers } from 'lucide-react';

export default function About() {
  const educationHistory = [
    {
      degree: 'Bachelor of Technology (B.Tech) – Information Technology',
      institution: 'Erode Sengunthar Engineering College',
      duration: '2022 - 2026',
      grade: 'CGPA: 7.5',
      description: 'Acquired core competencies in Information Technology, Software Engineering, Database Management Systems, and Web Application Development. Focused on modern web interfaces and OOPs concepts in Java.',
    }
  ];

  const coreFocus = [
    {
      icon: <Layers className="focus-icon" size={24} />,
      title: 'Frontend Development',
      description: 'Designing interactive user interfaces using React JS, JavaScript, and modern HTML/CSS. Prioritizing modular architectures and mobile-first responsive screens.',
    },
    {
      icon: <BookOpen className="focus-icon" size={24} />,
      title: 'Information Technology',
      description: 'Understanding network standards, security methodologies, database models, and algorithm design to build efficient, robust software architectures.',
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Discover</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Column 1: Info and Core Areas */}
          <div className="about-info">
            <h3 className="about-heading">
              Passionate about creating user-friendly web solutions
            </h3>
            <p className="about-text">
              I am a dedicated Frontend Developer with strong foundational knowledge in HTML, CSS, JavaScript, and React. 
              Holding a B.Tech in Information Technology, I love exploring how backend data can be presented beautifully and intuitively to users. 
              My goal is to continuously refine my technical skills, build performant web layouts, and deliver value to collaborative development teams.
            </p>
            
            <div className="focus-grid">
              {coreFocus.map((focus, index) => (
                <div key={index} className="focus-card glass-card">
                  <div className="focus-icon-wrapper">
                    {focus.icon}
                  </div>
                  <h4 className="focus-card-title">{focus.title}</h4>
                  <p className="focus-card-text">{focus.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education Timeline */}
          <div className="about-education">
            <h3 className="about-heading edu-heading">
              <GraduationCap className="heading-icon" size={24} /> Education History
            </h3>
            
            <div className="timeline">
              {educationHistory.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-card">
                    <span className="timeline-date">{item.duration}</span>
                    <h4 className="timeline-degree">{item.degree}</h4>
                    <span className="timeline-institution">{item.institution}</span>
                    <span className="timeline-grade">{item.grade}</span>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
