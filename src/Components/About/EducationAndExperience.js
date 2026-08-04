import './EducationAndExperience.css';
import Timeline from '../UI/Timeline';
import Reveal from '../UI/Reveal';
import { FaGraduationCap, FaTooth, FaRobot, FaFlask, FaBriefcase } from 'react-icons/fa';

const EDUCATION = [
  {
    icon: <FaGraduationCap />,
    title: "Master's, Healthcare Informatics",
    subtitle: 'University of Illinois Springfield, USA',
    courses: [
      'Survey of U.S. Healthcare System',
      'Managing Healthcare Operations',
      'Introduction to Healthcare Informatics',
      'Database Concepts for Healthcare Management',
      'Healthcare System Analysis and Design',
      'Health Information Exchange and Interoperability',
      'Project Management in Healthcare',
      'Fundamentals of Data Communications',
      'Data Mining in Healthcare',
      'Healthcare Information Systems Security and Privacy',
    ],
  },
  {
    icon: <FaTooth />,
    title: 'Bachelor of Dental Surgery (B.D.S)',
    subtitle: 'Dharmsinh Desai University, Nadiad, India',
    courses: [
      'General Human Anatomy',
      'General Human Physiology & Biochemistry',
      'Dental Anatomy & Oral Histology',
      'General Pathology & Microbiology',
      'Dental Materials',
      'Pharmacology & Therapeutics',
      'General Medicine',
      'General Surgery',
      'Oral Pathology & Oral Microbiology',
      'Periodontics',
      'Conservative Dentistry & Endodontics',
      'Prosthodontics',
      'Oral Medicine & Radiology',
      'Oral & Maxillofacial Surgery',
      'Orthodontics & Dentofacial Orthopedics',
      'Pedodontics & Preventive Dentistry',
      'Public Health Dentistry',
      'Forensic Odontology & Jurisprudence',
    ],
  },
];

const EXPERIENCE = [
  {
    icon: <FaRobot />,
    title: 'AI Training Specialist & Data Analyst',
    subtitle: 'Outlier AI, Vancouver, BC',
    summary: 'Validated AI-generated outputs and developed validation rules that improved data accuracy and output quality by 20% through root cause analysis.',
  },
  {
    icon: <FaFlask />,
    title: 'Research Coordinator',
    subtitle: 'University of Illinois Springfield',
    summary: 'Conducted predictive modeling and exploratory data analysis on adoption datasets, applying statistical techniques to identify trends and generate actionable insights.',
  },
  {
    icon: <FaBriefcase />,
    title: 'Business Analyst',
    subtitle: 'Santram Pharma Pvt. Ltd., India',
    summary: 'Wrote SQL queries and built Tableau/Power BI dashboards tracking sales, pipeline, and revenue — connecting Salesforce CRM data into centralized reporting and leading the monthly KPI reporting cycle for leadership.',
  },
];

const EducationAndExperience = () => {
  return (
    <div className="edu-exp-wrapper">
      <div className="edu-exp-column">
        <Reveal as="h3" className="edu-exp-heading">Education</Reveal>
        <div className="timeline-wrapper">
          {EDUCATION.map((item, idx) => (
            <Timeline key={item.title} {...item} delay={idx * 100} isLast={idx === EDUCATION.length - 1} />
          ))}
        </div>
      </div>

      <div className="edu-exp-column">
        <Reveal as="h3" className="edu-exp-heading">Experience</Reveal>
        <div className="timeline-wrapper">
          {EXPERIENCE.map((item, idx) => (
            <Timeline key={item.title} {...item} delay={idx * 80} isLast={idx === EXPERIENCE.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationAndExperience;
