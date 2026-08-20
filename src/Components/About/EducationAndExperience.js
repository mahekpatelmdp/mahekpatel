import './EducationAndExperience.css';
import Timeline from '../UI/Timeline';
import Reveal from '../UI/Reveal';
import { FaGraduationCap, FaTooth, FaRobot, FaFlask, FaBriefcase, FaChartLine } from 'react-icons/fa';

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
    icon: <FaChartLine />,
    title: 'Data Analyst',
    subtitle: 'Freelancer · Self-employed',
    duration: 'Jan 2026 - Present',
    bullets: [
      'Delivered data-driven analysis to inform strategic decision-making for small business clients across multiple industries.',
      'Built interactive dashboards and financial reporting tools, surfacing actionable insights on pricing strategy, process optimization, and report automation to drive operational efficiency.',
    ],
  },
  {
    icon: <FaRobot />,
    title: 'AI Training Specialist',
    subtitle: 'Outlier',
    duration: '2026 – Present',
    bullets: [
      'Led data quality workflows for complex multimodal datasets, identifying and resolving defects through human-in-the-loop annotation frameworks.',
      'Designed and implemented QA protocols and standardized documentation practices, improving data accuracy, consistency, and reporting integrity across projects.',
    ],
  },
  {
    icon: <FaFlask />,
    title: 'Research Coordinator',
    subtitle: 'University of Illinois Springfield',
    duration: 'Jan 2025 - Oct 2025',
    bullets: [
      'Oversaw end-to-end data collection, analysis, and database management, ensuring accuracy and integrity of research documentation.',
      'Partnered with faculty and cross-functional teams to advance ongoing studies, delivering reports and presentations that communicated key research findings.',
    ],
  },
  {
    icon: <FaBriefcase />,
    title: 'Business Analyst',
    subtitle: 'Santram Pharma Pvt Ltd, India',
    duration: 'Sep 2023 - Jan 2025',
    bullets: [
      'Analyzed business data and developed reports and dashboards to track key metrics and support decision-making.',
      'Identified process improvements and collaborated with cross-functional teams to gather requirements and improve operational efficiency.',
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
