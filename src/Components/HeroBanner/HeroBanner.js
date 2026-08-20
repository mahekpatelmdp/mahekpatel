import heroImage from '../../assets/1781826321052.png';
import './HeroBanner.css';
import { FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Reveal from '../UI/Reveal';
import SectionBadge from '../UI/SectionBadge';

const HeroBanner = () => {
  return (
    <section id="home" className="hero-wrapper px-6 lg:px-16 pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div className="hero-top flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
        <div className="hero-text max-w-2xl text-center lg:text-left">
          <Reveal as="h1" delay={0} className="hero-name">
            <span className="line">MAHEK</span>
            <span className="line accent">PATEL</span>
          </Reveal>

          <Reveal as="p" delay={120} className="hero-tagline">
            I find the <span className="accent">patterns</span> hiding in data
            <br className="hidden lg:block" /> and turn them into <span className="accent">decisions</span>.
          </Reveal>

          <Reveal delay={240} className="hero-socials">
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
      </div>

      <div id="about" className="hero-about">
        <Reveal>
          <SectionBadge label="About" highlight="Me" />
        </Reveal>

        <Reveal delay={100} className="hero-about-copy text-center lg:text-left">
          <p>
            <span className="accent">Data Analyst &amp; Business Analyst</span> with a Master&apos;s
            in Healthcare Informatics and hands-on experience across AI data validation, healthcare
            research, and pharma business analysis. I turn messy, real-world data into clear
            reporting using{' '}
            <span className="accent">SQL, Python, Excel, Power BI, Tableau, and Looker Studio</span>,{' '}
            from data validation and ETL to dashboard design and stakeholder-ready reporting.
          </p>
          <p>
            Comfortable bridging technical and business teams, with a track record in{' '}
            <span className="accent">root cause analysis, predictive modeling, and KPI
            reporting</span>, including building Tableau/Power BI dashboards and connecting
            Salesforce CRM data to centralized reporting for leadership.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroBanner;
