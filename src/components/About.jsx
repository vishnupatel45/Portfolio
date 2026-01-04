import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Vishnu Patel, a passionate MERN Stack Developer dedicated to creating 
              innovative web solutions. With expertise in both frontend and backend 
              technologies, I specialize in building scalable applications that deliver 
              exceptional user experiences.
            </p>
            <p>
              My experience includes developing full-stack fintech applications like NTAR Bizz, 
              comprehensive admin panels, and B2B API service provider platforms. I've worked 
              on projects ranging from educational platforms (Academia) to music streaming 
              applications (Spotify Clone), showcasing my versatility across different domains.
            </p>
            <p>
              Currently, I'm focused on developing a B2B API service provider platform, 
              integrating complex business logic with intuitive interfaces. I approach each 
              project with attention to detail, clean code practices, and a commitment to 
              delivering solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
