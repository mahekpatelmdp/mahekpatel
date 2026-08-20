import './Certifications.css';
import { SiGoogle, SiMicrosoft, SiIbm, SiSalesforce } from 'react-icons/si';
import { FaUniversity, FaFlask, FaClinicMedical, FaAward } from 'react-icons/fa';
import SectionBadge from '../UI/SectionBadge';
import Reveal from '../UI/Reveal';

const ISSUER_ICON = {
  'Illinois Tech': <FaUniversity />,
  Google: <SiGoogle />,
  Microsoft: <SiMicrosoft />,
  IBM: <SiIbm />,
  Salesforce: <SiSalesforce />,
  Novartis: <FaFlask />,
  'Johns Hopkins University': <FaUniversity />,
  'CVS Health': <FaClinicMedical />,
  'Northeastern University': <FaUniversity />,
};

const CERTIFICATIONS = [
  { issuer: 'Illinois Tech', title: 'AI Integration in Healthcare Patient Data', type: 'Course' },
  { issuer: 'Illinois Tech', title: 'Healthcare Data Management and Interfaces', type: 'Course' },
  { issuer: 'Google', title: 'Foundations of Business Intelligence', type: 'Course' },
  { issuer: 'Microsoft', title: 'Fundamentals of UI/UX Design', type: 'Course' },
  { issuer: 'Google', title: 'Agile Project Management', type: 'Course' },
  { issuer: 'Google', title: 'Foundations of Project Management', type: 'Course' },
  { issuer: 'IBM', title: 'Cybersecurity Architecture', type: 'Course' },
  { issuer: 'Salesforce', title: 'Sales and CRM Overview', type: 'Course' },
  { issuer: 'Novartis', title: 'Clinical Trials: Good Clinical Practice', type: 'Specialization', courses: 3 },
  { issuer: 'Johns Hopkins University', title: 'Healthcare IT Support', type: 'Specialization', courses: 4 },
  { issuer: 'Microsoft', title: 'Business Analysis Fundamentals', type: 'Course' },
  { issuer: 'CVS Health', title: 'Introduction to Customer Service', type: 'Course' },
  { issuer: 'Northeastern University', title: 'Analytics in Healthcare Management and Administration', type: 'Course' },
  { issuer: 'Johns Hopkins University', title: 'The Social and Technical Context of Health Informatics', type: 'Course' },
];

const CertCard = ({ cert }) => (
  <div className="cert-card">
    <span className="cert-icon">{ISSUER_ICON[cert.issuer] || <FaAward />}</span>
    <div className="cert-body">
      <p className="cert-title">{cert.title}</p>
      <p className="cert-issuer">{cert.issuer}</p>
    </div>
  </div>
);

const Certifications = () => {
  return (
    <div className="certifications-wrapper">
      <Reveal>
        <SectionBadge label="Certifications" />
      </Reveal>

      <div className="certs-grid">
        {CERTIFICATIONS.map((cert) => (
          <CertCard cert={cert} key={cert.title} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
