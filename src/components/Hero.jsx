import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const words = ['Frontend Developer', 'React.js Developer', 'IT Graduate', 'Problem Solver'];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[wordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  return (
    <section id="home" className="section hero-section">
      {/* Dynamic Animated Blobs in the Background */}
      <div className="bg-decorations">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
      </div>

      <div className="container hero-container animate-slide-up">
        <div className="hero-content">
          <span className="hero-greeting">WELCOME TO MY PORTFOLIO</span>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Kanigeshwari TM</span>
            <br />
            <span className="typewriter-container">
              a <span className="typewriter-text">{currentText}</span>
              <span className="cursor">|</span>
            </span>
          </h1>
          <p className="hero-description">
            I am a passionate Frontend Developer with knowledge of HTML, CSS, JavaScript, and React. 
            I am looking for an opportunity to improve my technical skills and contribute to building user-friendly web applications.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" download className="btn btn-secondary">
              Resume <Download size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>
        
        {/* Abstract Graphic Illustration in pure CSS */}
        <div className="hero-graphic">
          <div className="graphic-wrapper">
            <div className="graphic-ring ring-1"></div>
            <div className="graphic-ring ring-2"></div>
            <div className="graphic-card glass-card hero-glass-card-1">
              <div className="card-dot red"></div>
              <div className="card-dot yellow"></div>
              <div className="card-dot green"></div>
              <pre className="graphic-code">
                <code>
                  <span className="code-keyword">const</span> developer = &#123;<br />
                  &nbsp;&nbsp;name: <span className="code-string">'Kanigeshwari TM'</span>,<br />
                  &nbsp;&nbsp;role: <span className="code-string">'Frontend Developer'</span>,<br />
                  &nbsp;&nbsp;skills: [<span className="code-string">'React'</span>, <span className="code-string">'JS'</span>, <span className="code-string">'HTML/CSS'</span>],<br />
                  &nbsp;&nbsp;passion: <span className="code-string">'User-friendly UIs'</span><br />
                  &#125;;
                </code>
              </pre>
            </div>
            <div className="graphic-card glass-card hero-glass-card-2">
              <div className="speed-gauge">
                <div className="speed-track"></div>
                <div className="speed-bar"></div>
                <span className="speed-value">99%</span>
              </div>
              <div className="speed-label">PageSpeed Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
