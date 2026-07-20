import React from 'react';
import { Layout, GitBranch, Cpu, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Cpu className="skill-cat-icon" size={24} />,
      skills: [
        { name: 'Java', level: 82 },
        { name: 'JavaScript', level: 85 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Layout className="skill-cat-icon" size={24} />,
      skills: [
        { name: 'HTML & CSS', level: 92 },
        { name: 'React.js', level: 88 }
      ]
    },
    {
      title: 'Version Control & Tools',
      icon: <GitBranch className="skill-cat-icon" size={24} />,
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma & Canva', level: 80 }
      ]
    },
    {
      title: 'API & AI Tools',
      icon: <Sparkles className="skill-cat-icon" size={24} />,
      skills: [
        { name: 'OpenAI API Integration', level: 85 }
      ]
    },
    {
      title: 'Other Skills',
      icon: <CheckCircle2 className="skill-cat-icon" size={24} />,
      skills: [
        { name: 'Responsive Web Design', level: 90 },
        { name: 'Problem Solving & Debugging', level: 88 }
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
