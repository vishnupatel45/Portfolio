import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiBootstrap } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 'Expert' },
        { name: 'CSS, Bootstrap, Tailwind', icon: <SiBootstrap />, level: 'Advanced' },
        { name: 'JavaScript', icon: <FaJs />, level: 'Expert' },
        { name: 'React.js', icon: <FaReact />, level: 'Expert' },
      ],
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 'Expert' },
        { name: 'Express.js', icon: <SiExpress />, level: 'Advanced' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 'Advanced' },
        { name: 'REST API', icon: <FaJs />, level: 'Expert' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 'Advanced' },
      ],
    },
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'expert'
      case 'Advanced':
        return 'advanced'
      case 'Intermediate':
        return 'intermediate'
      default:
        return 'beginner'
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon-wrapper">
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-glow"></div>
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-particles">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="particle"></span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
