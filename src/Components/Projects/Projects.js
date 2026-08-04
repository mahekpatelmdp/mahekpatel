import './Projects.css';
import SectionBadge from '../UI/SectionBadge';
import Reveal from '../UI/Reveal';
import bannerPharma from '../../assets/01-pharma-life-sciences.svg';
import bannerHealthcare from '../../assets/02-healthcare.svg';
import bannerRetail from '../../assets/03-retail.svg';
import bannerBanking from '../../assets/04-banking-finance.svg';
import bannerHR from '../../assets/05-hr-people-analytics.svg';
import bannerMarketing from '../../assets/06-marketing.svg';

const PROJECTS = [
  {
    image: bannerPharma,
    tag: 'Pharma & Life Sciences',
    title: 'Pharma Inventory & Sales Analytics',
    problem: 'At Santram Pharma, a raw pharmaceutical database dump had no structured way to track inventory, sales, or outstanding balances.',
    approach: 'Built a custom SQL parser to transform the raw dump into structured inventory, sales, and outstanding-balance datasets, then modeled it into dashboards for stock and sales tracking.',
    result: 'Turned an unusable raw export into a repeatable pipeline for inventory control and sales-performance reporting.',
    tools: ['SQL', 'TypeScript', 'Data Modeling'],
  },
  {
    image: bannerHealthcare,
    tag: 'Healthcare',
    title: 'Healthcare Predictive Modeling & EDA',
    problem: 'Healthcare datasets needed deeper analysis to surface predictive signals beyond basic reporting.',
    approach: 'Conducted end-to-end predictive modeling and exploratory data analysis on healthcare datasets in Python.',
    result: 'Identified key patterns and predictors that informed further research direction as part of ongoing graduate research.',
    tools: ['Python', 'EDA', 'Predictive Modeling'],
  },
  {
    image: bannerRetail,
    tag: 'Retail',
    title: 'Retail Sales & Customer Segmentation',
    problem: 'A retail transaction dataset needed to be turned into a clear view of which products and regions drove profit vs. loss.',
    approach: 'Cleaned transactional data in SQL/Excel and segmented customers by purchase frequency and value (RFM-style analysis).',
    result: 'Surfaced underperforming product categories and high-value customer segments to guide inventory and marketing focus.',
    tools: ['SQL', 'Excel', 'Power BI', 'Segmentation'],
  },
  {
    image: bannerBanking,
    tag: 'Banking & Finance',
    title: 'Bank Marketing Campaign Performance',
    problem: 'A bank wanted to know which customer segments responded best to a term-deposit marketing campaign.',
    approach: 'Analyzed campaign contact data and compared response rates across demographics and contact channels.',
    result: 'Identified the customer segments and contact timing with the strongest response rates to focus future spend.',
    tools: ['SQL', 'Tableau', 'A/B Testing', 'Statistics'],
  },
  {
    image: bannerHR,
    tag: 'HR & People Analytics',
    title: 'Employee Attrition & Workforce Analytics',
    problem: 'Leadership needed to understand which factors were most linked to employee turnover.',
    approach: 'Explored workforce data — tenure, overtime, income — in Python, then visualized breakdowns by department and tenure band.',
    result: 'Flagged the departments and tenure bands with elevated attrition risk in a leadership-ready report.',
    tools: ['Python', 'Power BI', 'Logistic Regression'],
  },
  {
    image: bannerMarketing,
    tag: 'Marketing',
    title: 'Campaign ROI & A/B Testing',
    problem: 'Marketing needed evidence on whether a new promotional campaign actually outperformed the standard one.',
    approach: 'Structured an A/B comparison across campaign variants and tested for statistical significance (ANOVA / post-hoc tests).',
    result: 'Provided a clear, significance-backed recommendation on which campaign variant to scale.',
    tools: ['Excel', 'SQL', 'A/B Testing', 'ANOVA'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section px-6 lg:px-16 py-24">
      <Reveal>
        <SectionBadge label="Notable" highlight="Projects" />
      </Reveal>

      <div className="projects-grid mt-14">
        {PROJECTS.map((project, idx) => (
          <Reveal
            key={project.title}
            delay={(idx % 2) * 100}
            className="project-card"
          >
            <div className="project-banner">
              <img src={project.image} alt={`${project.title} — sample dashboard`} loading="lazy" />
            </div>

            <span className="project-index">{String(idx + 1).padStart(2, '0')}</span>
            <span className="project-tag">{project.tag}</span>
            <h3 className="project-title">{project.title}</h3>

            <p className="project-line"><strong>Problem —</strong> {project.problem}</p>
            <p className="project-line"><strong>Approach —</strong> {project.approach}</p>
            <p className="project-line"><strong>Result —</strong> {project.result}</p>

            <div className="project-tools">
              {project.tools.map((tool) => (
                <span key={tool} className="tool-chip">{tool}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
