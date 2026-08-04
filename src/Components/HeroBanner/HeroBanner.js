import heroImage from '../../assets/heroPhoto.png';
import './HeroBanner.css';
import { FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Reveal from '../UI/Reveal';

const HeroBanner = () => {
  return (
    <section id="home" className="hero-wrapper flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 px-6 lg:px-16 pt-28 pb-16 lg:pt-32 lg:pb-20">
      <Reveal className="hero-text max-w-2xl text-center lg:text-left">
        <h1 className="hero-name">
          <span className="line">MAHEK</span>
          <span className="line accent">PATEL</span>
        </h1>

        <p className="hero-tagline">
          I help businesses uncover <span className="accent">insights</span>
          <br className="hidden lg:block" /> and turn data into <span className="accent">decisions</span>.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-solid">View Projects</a>
        </div>

        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/mahek-patel-8ba264286" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-circle">
            <FaLinkedinIn />
          </a>
          <a href="tel:+17789551108" aria-label="Phone" className="social-circle">
            <FaPhoneAlt />
          </a>
          <a href="mailto:mahekpatel.mdp@gmail.com" aria-label="Email" className="social-circle">
            <FaEnvelope />
          </a>
        </div>
      </Reveal>

      <Reveal delay={150} className="hero-image-wrapper">
        <div className="hero-photo-frame">
          <img alt="Mahek Patel presenting a data dashboard" src={heroImage} />
        </div>
      </Reveal>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span className="scroll-dot" />
      </a>
    </section>
  );
};

export default HeroBanner;
