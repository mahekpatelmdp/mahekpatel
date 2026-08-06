import heroImage from '../../assets/heroPhoto.png';
import './HeroBanner.css';
import { FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Reveal from '../UI/Reveal';

const HeroBanner = () => {
  return (
    <section id="home" className="hero-wrapper flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 lg:px-16 pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div className="hero-text max-w-2xl text-center lg:text-left">
        <Reveal as="h1" delay={0} className="hero-name">
          <span className="line">MAHEK</span>
          <span className="line accent">PATEL</span>
        </Reveal>

        <Reveal as="p" delay={120} className="hero-tagline">
          I find the <span className="accent">patterns</span> hiding in data
          <br className="hidden lg:block" /> and turn them into <span className="accent">decisions</span>.
        </Reveal>

        <Reveal delay={240} className="hero-actions">
          <a href="#projects" className="btn btn-solid">View Projects</a>
        </Reveal>

        <Reveal delay={340} className="hero-socials">
          <a href="https://www.linkedin.com/in/mahek-patel-8ba264286" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-circle">
            <FaLinkedinIn />
          </a>
          <a href="tel:+17789551108" aria-label="Phone" className="social-circle">
            <FaPhoneAlt />
          </a>
          <a href="mailto:mahekpatel.mdp@gmail.com" aria-label="Email" className="social-circle">
            <FaEnvelope />
          </a>
        </Reveal>
      </div>

      <Reveal delay={200} className="hero-image-wrapper">
        <div className="hero-photo-frame">
          <img alt="Mahek Patel" src={heroImage} />
        </div>
      </Reveal>
    </section>
  );
};

export default HeroBanner;
