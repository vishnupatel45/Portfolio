import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import resume from '../assets/Vishnupatel_Resume.pdf'
import './Hero.css'

const Hero = () => {
  const roles = [
    'MERN Stack Developer',
    'Full Stack Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const deletingSpeed = 50

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      const timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayText(currentRole.substring(0, displayText.length - 1))
        } else {
          setDisplayText(currentRole.substring(0, displayText.length + 1))
        }
      }, isDeleting ? deletingSpeed : typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [displayText, isDeleting, currentRoleIndex, roles])

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, my name is <span className="highlight">Vishnu Patel</span>
          </h1>
          <h2 className="hero-subtitle">
            I'm a <span className="typing-text">{displayText}</span>
            <span className="cursor-blink">|</span>
          </h2>
          <p className="hero-description">
            As a passionate Fullstack Web Developer specializing in the MERN stack, 
            I thrive on transforming visionary ideas into functional and aesthetically 
            pleasing digital experiences. Currently working on B2B API service provider 
            platforms and fintech applications, I bring expertise in building scalable 
            solutions that drive business growth.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href={resume} className="btn btn-secondary" download="Vishnupatel_Resume.pdf">
              <FaDownload /> Download Resume
            </a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/vishnupatel45" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/vishnupatel45" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:vishnudotdev@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img src="/profile.png" alt="Vishnu Patel" className="profile-img" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
