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

const TOOLS = [
  { icon: <SiMysql />, label: 'SQL' },
  { icon: <SiPython />, label: 'Python' },
  { icon: <SiR />, label: 'R' },
  { icon: <SiMicrosoftexcel />, label: 'Excel (VBA)' },
  { icon: <SiGooglesheets />, label: 'Google Sheets' },
  { icon: <SiGooglebigquery />, label: 'BigQuery' },
  { icon: <SiSnowflake />, label: 'Snowflake' },
  { icon: <SiSap />, label: 'SAP' },
  { icon: <SiVisualstudiocode />, label: 'VS Code' },
  { icon: <SiSalesforce />, label: 'Salesforce CRM' },
  { icon: <SiJira />, label: 'JIRA' },
  { icon: <SiTableau />, label: 'Tableau' },
  { icon: <SiPowerbi />, label: 'Power BI' },
  { icon: <SiLooker />, label: 'Looker Studio' },
  { icon: <FaRobot />, label: 'LLM Tools' },
  { icon: <FaComments />, label: 'Claude' },
];

const METHODS = [
  'Business Analysis',
  'EDA',
  'Segmentation / Clustering',
  'Cohort Analysis',
  'Linear Regression',
  'Logistic Regression',
  'A/B Testing',
  'ANOVA & Post-Hoc T-Test',
  'Statistical Analysis',
  'Root Cause Analysis',
  'Data Modeling',
  'ETL',
  'Data Validation',
  'Data Mining (SAS Enterprise Miner)',
];

const HEALTHCARE = [
  'EHR / EMR Systems',
  'HL7 & FHIR Interoperability',
  'Health Information Exchange (HIE)',
  'HIPAA & Patient Data Privacy',
  'Healthcare System Analysis & Design',
  'Telehealth / Digital Health Platforms',
  'Clinical Data Management',
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section px-6 lg:px-16 py-24">
      <Reveal>
        <SectionBadge label="Technical" highlight="Skills" />
      </Reveal>

      <div className="skills-groups mt-14">
        <Reveal className="skills-group">
          <h3>Tools &amp; <span className="accent">Technologies</span></h3>
          <div className="skills-chip-grid">
            {TOOLS.map((tool) => (
              <span className="skills-chip" key={tool.label}>
                <span className="skills-chip-icon">{tool.icon}</span>
                {tool.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="skills-group">
          <h3>Analysis &amp; <span className="accent">Methods</span></h3>
          <div className="skills-tag-cloud">
            {METHODS.map((item) => (
              <span className="skills-tag" key={item}>{item}</span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="skills-group">
          <h3>Healthcare &amp; <span className="accent">Health IT</span></h3>
          <div className="skills-tag-cloud">
            {HEALTHCARE.map((item) => (
              <span className="skills-tag" key={item}>{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
