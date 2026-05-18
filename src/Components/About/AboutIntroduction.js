import ContactInformation from '../Contact/ContactInformation';
import './AboutIntroduction.css';

const AboutIntroduction = () => {
  return (
    <div className="about-introduction md:max-w-lg p-5 md:w-6/12">
      <h1 className="about-heading">About Me</h1>
      <div className="text-container">
        <div className="introuction-text-wrapper">
          <p>
            Hi, I am <span className="name font-bold">Mahek Patel</span>.<br/>
            Health Informatics Specialist and former General Dentist with a Master's in Healthcare Informatics.<br/>
            Proficient in digital system management, workflow coordination, process optimization, and data-driven analysis to improve operational efficiency and accuracy.
          </p>
        </div>
      </div>
      <div className="contact-container">
        <ContactInformation />
      </div>
    </div>
  );
};

export default AboutIntroduction;
