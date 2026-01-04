import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const frontendProjects = [
    {
      id: 1,
      title: 'Academia',
      description: 'An educational platform built with React, featuring course management, user authentication, and interactive learning modules. A responsive frontend application showcasing modern UI/UX design principles.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML5'],
      image: '/projectimg/academia.png',
      github: 'https://github.com/vishnupatel45',
      demo: '#',
    },
    {
      id: 2,
      title: 'Spotify Clone',
      description: 'A music streaming application clone with playlist management, audio playback controls, and a modern interface. Built with React to demonstrate frontend development skills and component architecture.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML5'],
      image: '/projectimg/spotify.png',
      github: 'https://github.com/vishnupatel45',
      demo: '#',
    },
  ]

  const backendProjects = [
    {
      id: 3,
      title: 'NTAR Bizz - Fintech Application',
      description: 'A comprehensive fintech application with financial management, transaction processing, user dashboard, and payment integration. Full-stack MERN application featuring expenses tracking, invoice management, utility bill payments, inventory management, and customer management systems.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST API'],
      image: '/projectimg/Ntar.png',
      github: 'https://github.com/vishnupatel45',
      demo: '#',
    },
    {
      id: 4,
      title: 'Admin Full Application for NTAR Bizz',
      description: 'Complete admin panel application for NTAR Bizz with comprehensive dashboard featuring APIs (Total Users, WalletTxn, BBPSTxn, CardTxn), analytics, user management, vendor management, payment processing, and detailed reporting systems. Full-stack implementation with both frontend and backend. with TanentID DBConnection',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Admin Panel'],
      image: '/projectimg/Ntaradmin.png',
      github: 'https://github.com/vishnupatel45',
      demo: '#',
    },
    {
      id: 5,
      title: 'FLOWPIPE - B2B Project',
      description: 'A B2B FLOWPIPE: Api Module service provider platform with comprehensive API management, documentation, integration features, and business-to-business service delivery. Currently working on this project to enable seamless API integration for enterprise clients.',
      technologies: ['React', 'Node.js', 'REST API', 'MongoDB', 'Express.js'],
      image: 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=API+Service+B2B',
      github: 'https://github.com/vishnupatel45',
      demo: '#',
      status: 'In Progress',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-category">
          <h3 className="category-heading">Frontend Projects</h3>
          <div className="projects-grid">
            {frontendProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-category">
          <h3 className="category-heading">Backend Projects</h3>
          <div className="projects-grid">
            {backendProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                  {project.status && (
                    <div className="project-status">{project.status}</div>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
