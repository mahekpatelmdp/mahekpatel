import './Skills.css';
import {
  SiMysql,
  SiPython,
  SiR,
  SiMicrosoftexcel,
  SiGooglesheets,
  SiGooglebigquery,
  SiSnowflake,
  SiSap,
  SiVisualstudiocode,
  SiSalesforce,
  SiJira,
  SiPowerbi,
  SiTableau,
  SiLooker,
} from 'react-icons/si';
import { FaRobot, FaComments } from 'react-icons/fa';
import SectionBadge from '../UI/SectionBadge';
import Reveal from '../UI/Reveal';

const SKILL_COLUMNS = [
  {
    title: 'Programming',
    titleAccent: 'Languages',
    type: 'icons',
    items: [
      { icon: <SiMysql />, label: 'SQL' },
      { icon: <SiPython />, label: 'Python' },
      { icon: <SiR />, label: 'R' },
    ],
  },
  {
    title: 'Data Analytic',
    titleAccent: 'Tools',
    type: 'icons',
    items: [
      { icon: <SiMicrosoftexcel />, label: 'Microsoft Excel (VBA)' },
      { icon: <SiGooglesheets />, label: 'Google Sheets' },
      { icon: <SiGooglebigquery />, label: 'Google BigQuery' },
      { icon: <SiSnowflake />, label: 'Snowflake' },
      { icon: <SiSap />, label: 'SAP' },
      { icon: <SiVisualstudiocode />, label: 'Visual Studio Code' },
      { icon: <SiSalesforce />, label: 'Salesforce CRM' },
      { icon: <SiJira />, label: 'JIRA' },
      { icon: <FaRobot />, label: 'LLM Tools' },
      { icon: <FaComments />, label: 'Claude' },
    ],
  },
  {
    title: 'Data',
    titleAccent: 'Visualization',
    type: 'icons',
    items: [
      { icon: <SiTableau />, label: 'Tableau' },
      { icon: <SiPowerbi />, label: 'Power BI' },
      { icon: <SiLooker />, label: 'Looker Studio' },
    ],
  },
  {
    title: 'Data Analytic',
    titleAccent: 'Methods',
    type: 'list',
    items: [
      'Business Analysis',
      'EDA',
      'Segmentation / Clustering',
      'Cohort Analysis',
      'Linear Regression',
      'Logistic Regression',
      'A/B Testing',
      'ANOVA & (Post-Hoc) T-Test',
      'Statistical Analysis',
      'Root Cause Analysis',
      'Data Modeling',
      'ETL',
      'Data Validation',
      'Data Mining (SAS Enterprise Miner)',
    ],
  },
  {
    title: 'Health',
    titleAccent: 'Informatics',
    type: 'list',
    items: [
      'EHR / EMR Systems',
      'HL7 & FHIR Interoperability',
      'Health Information Exchange (HIE)',
      'HIPAA & Patient Data Privacy',
      'Healthcare System Analysis & Design',
      'Telehealth / Digital Health Platforms',
      'Clinical Data Management',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section px-6 lg:px-16 py-24">
      <Reveal>
        <SectionBadge label="Technical" highlight="Skills" />
      </Reveal>

      <div className="skills-columns mt-14">
        {SKILL_COLUMNS.map((col, idx) => (
          <Reveal
            as="div"
            delay={idx * 100}
            key={col.title + col.titleAccent}
            className="skills-column"
          >
            <h3>
              {col.title} <span className="accent">{col.titleAccent}</span>
            </h3>

            {col.type === 'icons' ? (
              <ul className="skills-icon-list">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <span className="skill-icon-badge">{item.icon}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="skills-bullet-list">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
