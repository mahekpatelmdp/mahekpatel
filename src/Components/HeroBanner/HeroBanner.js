import heroImage from '../../assets/portfolioBanner.JPG';
import './HeroBanner.css';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="hero-banner-wrapper flex flex-col-reverse py-6">
      <div className="hero-text px-7 text-4xl">
        <div className="">
          <span>Hi! I am</span>
          <span className="block text-7xl hero-name">Mahek Patel</span>
          <span className="text-4xl block hero-position">
            Health Informatics Specialist & Former General Dentist
          </span>
          <span className="text-xl hero-intro">
            Proficient in digital system management, workflow coordination, process optimization, and data-driven analysis to improve operational efficiency and accuracy. Experienced in EHR/EMR, clinical data validation, and healthcare IT support. My journey spans roles as a Medical Data Analyst, Patient Care Coordinator, and Dental Administrator, with a strong foundation in healthcare informatics and clinical practice.
          </span>
          <br></br>

          <span className="text-xl hero-intro">
            Welcome to my portfolio website. Feel free to explore my work or learn more about my background.
          </span>
        </div>
        <div className="hero-links-wrapper mt-4 flex justify-center gap-6">
          <Link to="/projects" className="hero-link underline text-base text-blue-700 hover:text-blue-900 transition-colors">My Work</Link>
          <Link to="/about" className="hero-link underline text-base text-blue-700 hover:text-blue-900 transition-colors">About Me</Link>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img alt="Hero" src={heroImage} />
      </div>
    </div>
  );
};

export default HeroBanner;
