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
      description: 'Developed a personal portfolio website showcasing key technical skills, projects, and contact information. Built with a fully responsive layout, smooth navigation, and optimized loading speeds.',
      category: 'HTML/CSS',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
      demoUrl: '#home',
      githubUrl: 'https://github.com/Kaniga54',
      imageAlt: 'Portfolio Screenshot'
    },
    {
      title: 'E-Commerce Website',
      description: 'Created a responsive e-commerce website UI showcasing storefront features. Utilized reusable component structures, modern web design aesthetics, and user-friendly interactions.',
      category: 'React',
      tags: ['React.js', 'CSS3 Grid', 'UI Development', 'JavaScript'],
      demoUrl: 'https://github.com/Kaniga54',
      githubUrl: 'https://github.com/Kaniga54',
      imageAlt: 'E-Commerce Screenshot'
    },
    {
      title: 'Placement Cell Web Application',
      description: 'Developed an information system designed to manage academic placement activities. Helps students and coordinators log details, search databases, and organize placement-related information efficiently.',
      category: 'React',
      tags: ['React.js', 'JavaScript', 'State Management', 'UI Design', 'Problem Solving'],
      demoUrl: 'https://github.com/Kaniga54',
      githubUrl: 'https://github.com/Kaniga54',
      imageAlt: 'Placement Cell Screenshot'
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
