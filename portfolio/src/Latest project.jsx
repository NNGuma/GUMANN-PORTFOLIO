import { SquareArrowOutUpRight } from 'lucide-react';

function LatestProject() {
  return (
    <div className="latest-project-container">
          <hr />
      <h2 className="section-title">Latest Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3 className="card-title">
            Java e-Commerce Project
            <a href="https://github.com/NNGuma/Best-Brightness.git" target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRight className="card-icon" />
            </a>
          </h3>
          <img src="" alt="e-Commerce" className="card-img" />
          <p className="project-description">A powerful Java-based platform with product management and payment integration.</p>
        </div>

        <div className="project-card">
          <h3 className="card-title">
            Managing Student Records
            <a href="https://github.com/NNGuma/student-management" target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRight className="card-icon" />
            </a>
          </h3>
          <img src="" alt="Student Management" className="card-img" />
          <p className="project-description">Java app for Managing Student rcords.</p>
        </div>

        <div className="project-card">
          <h3 className="card-title">
           PhilaMfundi Clinic App
            <a href="https://github.com/your-repo-3" target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRight className="card-icon" />
            </a>
          </h3>
          <img src="" alt="Angular Firebase" className="card-img" />
          <p className="project-description">A web-based application using Angular + Firebase Realtime DB.</p>
        </div>

        <div className="project-card">
          <h3 className="card-title">
            Think Electric e-commerce website
            <a href="https://github.com/mthokozisinhleko/think-electric.git" target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRight className="card-icon" />
            </a>
          </h3>
          <img src="" alt="Portfolio" className="card-img" />
          <p className="project-description">HTML , CSS , JavaScript ,PHP and SQL website for Think Electric online shopping.</p>
        </div>

        <div className="project-card">
          <h3 className="card-title">
            Portfolio Website
            <a href="https://github.com/your-repo-5" target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRight className="card-icon" />
            </a>
          </h3>
          <img src="" alt="NextJS Dashboard" className="card-img" />
          <p className="project-description">Portfolio Website made with React</p>
        </div>

    
        <div className="project-card">
          <h3 className="card-title">
            Fashion By Lila 
            <a href="https://github.com/your-repo-5" target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRight className="card-icon" />
            </a>
          </h3>
          <img src="" alt="NextJS Dashboard" className="card-img" />
          <p className="project-description">Static Fashion Website made with HTML , CSS And JavaScript</p>
        </div>

      </div>
    </div>
  );
}

export default LatestProject;