import { SquareArrowOutUpRight } from 'lucide-react';
import Bestbrighness from './assets/Bestbrighness.jpg';
import WIXweb from './assets/WIXweb.jpg';
import LeelaFashion from  './assets/LeelaFashion.jpg';
import Portfolio from './assets/Portfolio.jpg';

function LatestProject() {
  return (
    <div className="latest-project-container">
          <hr />
      <h2 className="section-title">Latest Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3 className="card-title">
            Best Brightness Java based e-Commerce
            <a href="https://github.com/NNGuma/Best-Brightness.git" target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRight className="card-icon" />
            </a>
          </h3>
          <img src={Bestbrighness} alt="e-Commerce" className="card-img" />
          <p className="project-description">A powerful Java-based platform with product management and payment integration.</p>
        </div>

        <div className="project-card">
          <h3 className="card-title">
            Smartphone & Accessories Online Shop
            <a href="https://gumanondumiso.wixsite.com/guma-smartphones" target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRight className="card-icon" />
            </a>
          </h3>
          <img src={WIXweb} alt="Student Management" className="card-img" />
          <p className="project-description">WIX based e-commerce website for selling  Smart phone and accesories online</p>
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
          <img src={Portfolio} alt="NextJS Dashboard" className="card-img" />
          <p className="project-description">Portfolio Website made with React</p>
        </div>

    
        <div className="project-card">
          <h3 className="card-title">
            Fashion By Leela 
            <a href="https://github.com/NNGuma/Fashion-By-Leela.git" target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRight className="card-icon" />
            </a>
          </h3>
          <img src={LeelaFashion} alt="NextJS Dashboard" className="card-img" />
          <p className="project-description">Static Fashion Website made with HTML , CSS And JavaScript</p>
        </div>

      </div>
    </div>
  );
}

export default LatestProject;