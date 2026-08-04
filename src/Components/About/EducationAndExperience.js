import './EducationAndExperience.css';
import Timeline from '../UI/Timeline';
import Reveal from '../UI/Reveal';
import { FaGraduationCap, FaTooth, FaRobot, FaFlask, FaBriefcase } from 'react-icons/fa';

const EDUCATION = [
  {
    icon: <FaGraduationCap />,
    title: "Master's, Healthcare Informatics",
    subtitle: 'University of Illinois Springfield, USA',
    bullets: [
      'Healthcare System Analysis and Design',
      'Business Analysis',
      'Healthcare Information Systems Security & Privacy',
      'Database & Data Mining',
    ],
  },
  {
    icon: <FaTooth />,
    title: 'Bachelor of Dental Surgery (B.D.S)',
    subtitle: 'Dharmsinh Desai University, Nadiad, India',
    bullets: ['Public Health', 'Pathology & Radiology'],
  },
];

const EXPERIENCE = [
  {
    icon: <FaRobot />,
    title: 'AI Training Specialist & Data Analyst',
    subtitle: 'Outlier AI, Vancouver, BC',
    bullets: [
      'Validated AI-generated outputs and ensured data accuracy across multiple datasets, improving output quality by 20% through root cause analysis.',
      'Developed validation rules and standardized documentation for quality assurance and continuous improvement reporting.',
    ],
  },
  {
    icon: <FaFlask />,
    title: 'Research Coordinator',
    subtitle: 'University of Illinois Springfield',
    bullets: [
      'Conducted predictive modeling and exploratory data analysis on adoption datasets.',
      'Applied statistical techniques to identify trends and generate actionable insights.',
    ],
  },
  {
    icon: <FaBriefcase />,
    title: 'Business Analyst',
    subtitle: 'Santram Pharma Pvt. Ltd., India',
    bullets: [
      'Wrote complex SQL queries to extract, transform, and validate data across multiple source systems.',
      'Identified data inconsistencies and implemented validation rules through root cause analysis, improving report accuracy by 25%.',
      'Built and maintained Tableau and Power BI dashboards tracking sales performance, product pipeline, and revenue forecasts.',
      'Connected Salesforce CRM data to a centralized reporting environment, improving pipeline visibility for leadership.',
      'Led the monthly reporting cycle end-to-end — KPI scorecards and executive reports for business reviews and forecasting.',
    ],
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
