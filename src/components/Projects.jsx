import React, { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';

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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'React', 'HTML/CSS'];

  const projectsData = [
    {
      title: 'Portfolio Website',
      description: 'Developed a responsive portfolio website using HTML, CSS, JavaScript, and React.js to showcase projects and technical skills. Optimized for high performance and clean UI UX.',
      category: 'HTML/CSS',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Web Design'],
      demoUrl: '#home',
      githubUrl: 'https://github.com/Kaniga54',
      imageAlt: 'Portfolio Screenshot'
    },
    {
      title: 'Student Placement Management System',
      description: 'Developed a web-based Student Placement Management System for campus recruitment. Enabled students to register and track applications, while administrators managed companies and interviews. Improved recruitment efficiency and reduced manual workload.',
      category: 'React',
      tags: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Problem Solving'],
      demoUrl: 'https://github.com/Kaniga54',
      githubUrl: 'https://github.com/Kaniga54',
      imageAlt: 'Student Placement Management System Screenshot'
    },
    {
      title: 'Vita CV – AI ATS Resume Analyzer & Resume Builder',
      description: 'Developed an AI-powered ATS Resume Analyzer and Interactive Resume Builder using Next.js, React, MongoDB, OpenAI API, and Tailwind CSS. Implemented ATS resume scoring, keyword matching, AI-based resume suggestions, live resume preview, customizable templates, and A4 PDF export for creating ATS-friendly resumes.',
      category: 'React',
      tags: ['Next.js', 'React', 'MongoDB', 'OpenAI API', 'Tailwind CSS'],
      demoUrl: 'https://github.com/Kaniga54',
      githubUrl: 'https://github.com/Kaniga54',
      imageAlt: 'Vita CV Screenshot'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Showcase</span>
          <h2 className="section-title">My Projects</h2>
        </div>

        {/* Filter Navigation Bar */}
        <div className="projects-filter-bar">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              
              {/* CSS Vector Mockup Header */}
              <div className="project-card-visual">
                <div className="visual-overlay"></div>
                <Layers className="visual-icon" size={48} />
                <span className="visual-category">{project.category}</span>
              </div>

              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                
                <div className="project-card-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="badge project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card-actions">
                  <a 
                    href={project.demoUrl} 
                    className="btn btn-secondary btn-sm"
                    target={project.demoUrl.startsWith('#') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="btn btn-secondary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
