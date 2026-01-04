import { FaGraduationCap, FaSchool, FaCode } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      id: 1,
      icon: <FaGraduationCap />,
      institution: 'BJR GOVT Degree College, Hyderabad',
      degree: "Bachelor in Computer's",
      grade: '7.9 CGPA',
      year: 'Graduated',
    },
    {
      id: 2,
      icon: <FaCode />,
      institution: 'Naresh IT Institute, Ammerpet',
      degree: 'Full Stack Web Development with React.js',
      grade: 'Completed',
      year: 'Course',
    },
    {
      id: 3,
      icon: <FaGraduationCap />,
      institution: 'Vignan Junior College, Shadnagar',
      degree: 'MPC (Maths, Physics, Chemistry)',
      grade: '848/1000',
      year: 'Intermediate',
    },
    {
      id: 4,
      icon: <FaSchool />,
      institution: 'Geethanjali High School',
      degree: 'SSC',
      grade: '7.8 CGPA',
      year: 'High School',
    },
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">My Education</h2>
        <div className="education-timeline">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-icon">{edu.icon}</div>
              <div className="education-content">
                <h3 className="education-institution">{edu.institution}</h3>
                <p className="education-degree">{edu.degree}</p>
                <div className="education-details">
                  <span className="education-grade">{edu.grade}</span>
                  <span className="education-year">{edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

