import React from 'react';
import { Layout, GitBranch, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="skill-cat-icon" size={24} />,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML & CSS', level: 90 },
        { name: 'Responsive Web Design', level: 88 }
      ]
    },
    {
      title: 'Languages & Core',
      icon: <Cpu className="skill-cat-icon" size={24} />,
      skills: [
        { name: 'Java', level: 78 },
        { name: 'OOPs Concepts', level: 80 }
      ]
    },
    {
      title: 'Tools & Version Control',
      icon: <GitBranch className="skill-cat-icon" size={24} />,
      skills: [
        { name: 'Git & GitHub', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Abilities</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skills-card glass-card">
              <div className="skills-card-header">
                <div className="skill-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="skills-card-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
