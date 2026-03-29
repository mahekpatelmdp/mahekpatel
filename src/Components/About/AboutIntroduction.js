import ContactInformation from '../Contact/ContactInformation';
import './AboutIntroduction.css';

const AboutIntroduction = () => {
  return (
    <div className="about-introduction md:max-w-lg p-5 md:w-6/12">
      <h1 className="font-semibold text-6xl mb-5">About Me</h1>
      <div className="introuction-text-wrapper mb-5 text-lg">
        <p>
          Hi! I am <span className="name font-bold">Mahek Patel</span>.<br/>
          Health Informatics Specialist and former General Dentist with a Master’s in Healthcare Informatics.<br/>
          Proficient in digital system management, workflow coordination, process optimization, and data-driven analysis to improve operational efficiency and accuracy.
        </p>
        <br/>
        <p>
        <strong>Skills:</strong><br/>
        Clinical & Administrative Workflow Analysis, EHR/EMR (Epic, Tracker, Dentrix), System Configuration & User Adoption Support, ETL Concepts & Data Integration, Requirements Gathering & Stakeholder Collaboration, Data Validation & Quality Monitoring, Clinical Documentation & Data Standards, SQL & Healthcare Database Management, Sales Support & Service Coordination, AI Model Evaluation & Clinical Data Validation
        </p>
      </div>
      <ContactInformation />
    </div>
  );
};

export default AboutIntroduction;
