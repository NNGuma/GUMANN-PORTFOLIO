function About() {
  return (
    <div className="about-container">
      <hr />
      <div className="about-text">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          I am a passionate software developer with a National Diploma in Information Technology from Mangosuthu University of Technology. I have hands-on experience in Angular, Firebase, Java, and other technologies, and have built impactful applications including clinic management and e-commerce systems. I bring strong problem-solving skills, adaptability, and a drive to create innovative digital solutions.
        </p>
      </div>

      <div className="skills-section">
        <div className="skills">
          <div className="skill">
            <span>HTML & CSS</span>
            <div className="bar"><div className="fill html"></div></div>
          </div>
          <div className="skill">
            <span>React JS</span>
            <div className="bar"><div className="fill react"></div></div>
          </div>
          <div className="skill">
            <span>JavaScript</span>
            <div className="bar"><div className="fill js"></div></div>
          </div>
          <div className="skill">
            <span>Next JS</span>
            <div className="bar"><div className="fill next"></div></div>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <h2><span className="highlight">10+</span></h2>
            <p>Years of Experience</p>
          </div>
          <div className="stat">
            <h2><span className="highlight">90+</span></h2>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h2><span className="highlight">15+</span></h2>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
