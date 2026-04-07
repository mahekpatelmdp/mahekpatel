import heroImage from '../../assets/portfolioBanner.JPG';
import './HeroBanner.css';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="hero-banner-wrapper flex flex-col-reverse py-6">
      <div className="hero-text px-7 text-4xl">
        <div>
          <span>Hi! I am</span>
          <span className="block text-7xl hero-name">Mahek Patel</span>
          <span className="text-4xl block hero-position">
            Health Informatics Specialist & Former General Dentist
          </span>
          <span className="text-xl hero-intro">
            My journey has taken me from India to the USA and now to Canada, 
            where I have pursued my passion for healthcare and technology. 
            I love caring for people and improving patient experiences, 
            whether through direct clinical care or leveraging digital systems 
            and health informatics to make healthcare safer and more efficient. 
            From working as a General Dentist to roles as a Medical Data Analyst 
            and Patient Care Coordinator, I bring a blend of clinical expertise 
            and analytical skills to every project I undertake.
          </span>
          <br />
  
        </div>
        <div className="hero-links-wrapper mt-4 flex justify-center gap-6">
          {/* <Link to="/projects" className="hero-link underline text-base text-blue-700 hover:text-blue-900 transition-colors">My Work</Link>
          <Link to="/about" className="hero-link underline text-base text-blue-700 hover:text-blue-900 transition-colors">About Me</Link> */}
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img alt="Hero" src={heroImage} />
      </div>
    </div>
  );
};

export default HeroBanner;