import './AboutMain.css';
import resumePath from '../../assets/Resume_MahekPatel.pdf';
import { FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import SectionBadge from '../UI/SectionBadge';
import Reveal from '../UI/Reveal';

const AboutMain = () => {
  return (
    <section id="about" className="about-wrapper px-6 lg:px-16 py-24">
      <Reveal>
        <SectionBadge label="About" highlight="Me" />
      </Reveal>

      <div className="about-grid mt-12">
        <Reveal className="about-greeting">
          <h2>
            Hello, <br />
            I&apos;m <span className="accent">Mahek</span>!
          </h2>
        </Reveal>

        <Reveal delay={150} className="about-copy">
          <p>
            <span className="accent">Data Analyst &amp; Business Analyst</span> with a Master&apos;s
            in Healthcare Informatics and hands-on experience across AI data validation, healthcare
            research, and pharma business analysis. I turn messy, real-world data into clear
            reporting using{' '}
            <span className="accent">SQL, Python, Excel, Power BI, Tableau, and Looker Studio</span>{' '}
            — from data validation and ETL to dashboard design and stakeholder-ready reporting.
          </p>
          <p>
            Comfortable bridging technical and business teams, with a track record in{' '}
            <span className="accent">root cause analysis, predictive modeling, and KPI
            reporting</span>{' '}
            — including building Tableau/Power BI dashboards and connecting Salesforce CRM data to
            centralized reporting for leadership.
          </p>

          <div className="about-actions">
            <a href="#projects" className="btn btn-solid">Projects</a>
            <a href={resumePath} download className="btn btn-outline">Download CV</a>
          </div>

          <div className="about-socials">
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
      </div>
    </section>
  );
};

export default AboutMain;
