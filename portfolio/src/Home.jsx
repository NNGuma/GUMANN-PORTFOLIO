import homeImage from './assets/HomePicture.jpg';
import CV from './assets/CV.pdf';
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

function Home() {
  return (
    <div className="home-container" id="home">
      {/* Left side content */}
      <div className="home-text">
        <p>
          I am a passionate software developer with a National Diploma in Information Technology from Mangosuthu University of Technology. I have hands-on experience in Angular, Firebase, Java, and other technologies, and have built impactful applications including clinic management and e-commerce systems. I bring strong problem-solving skills, adaptability, and a drive to create innovative digital solutions.
        </p>

        <h3>Email:</h3>
        <h4>gumanondumiso@gmail.com</h4>
        <h3>Phone Number:</h3>
        <h4>+27 63 184 3887</h4>

        {/* Button group with spacing */}
        <div className="button-group">
          <a href={CV} download>
            <button type="button" className="custom-button">Download My CV</button>
          </a>
          <button type="button" className="custom-button">Learn More</button>
        </div>

        {/* Social Media */}
        <ul className="social-media">
          <li>
            <a href="https://www.facebook.com/share/154o55hjbuM/" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ndumisoguma?igsh=bWFwYmJ5cjJ5MzM5" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
          </li>
          <li><Linkedin /></li>
          <li>
            <a href="http://github.com/NNGuma" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </li>
        </ul>
      </div>

      {/* Right side image */}
      <img src={homeImage} alt="Home Picture" className="home-img" />
    </div>
  );
}

export default Home;
