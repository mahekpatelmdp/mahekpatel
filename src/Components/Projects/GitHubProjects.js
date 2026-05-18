import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import './GitHubProjects.css';

const GitHubProjects = () => {
  const projects = [
    {
      id: 1,
      name: 'ehr-adoption-snowflake',
      description: 'Electronic Health Records adoption analysis using Snowflake cloud data warehouse.',
      language: 'Python',
      stars: 0,
      url: 'https://github.com/mahekpatelmdp/ehr-adoption-snowflake',
      topics: ['EHR', 'Snowflake', 'Healthcare']
    },
    {
      id: 2,
      name: 'patient-readmission-predictor',
      description: 'Predictive model to identify patients at high risk of hospital readmission using machine learning.',
      language: 'Jupyter Notebook',
      stars: 0,
      url: 'https://github.com/mahekpatelmdp/patient-readmission-predictor',
      topics: ['ML', 'Healthcare', 'Prediction']
    },
    {
      id: 3,
      name: 'hospital-payments-bigquery',
      description: 'Real-world data engineering workflow for healthcare analytics. Raw hospital claims data is generated, cleaned with Python, and transformed into a dimensional model.',
      language: 'Python',
      stars: 0,
      url: 'https://github.com/mahekpatelmdp/hospital-payments-bigquery',
      topics: ['BigQuery', 'Data Engineering', 'Healthcare']
    },
    {
      id: 4,
      name: 'hospital-payments-viz',
      description: 'Analyzes hospital payment patterns using Tableau to uncover trends in how hospitals charge and receive payments for medical services.',
      language: 'Tableau',
      stars: 0,
      url: 'https://github.com/mahekpatelmdp/hospital-payments-viz',
      topics: ['Tableau', 'Analytics', 'Visualization']
    },
    {
      id: 5,
      name: 'Predictive-Modeling-Healthcare-Data-Analysis',
      description: 'Academic project focused on predictive modeling and data analysis in the healthcare domain using advanced statistical techniques.',
      language: 'Python',
      stars: 0,
      url: 'https://github.com/mahekpatelmdp/Predictive-Modeling-Healthcare-Data-Analysis',
      topics: ['ML', 'Healthcare', 'Academic']
    }
  ];

  const getLanguageColor = (language) => {
    const colors = {
      'Python': '#3776ab',
      'JavaScript': '#f1e05a',
      'Jupyter Notebook': '#da5b0b',
      'Tableau': '#e8a914',
      'TypeScript': '#2b7489',
      'Java': '#b07219'
    };
    return colors[language] || '#858585';
  };

  return (
    <div className="github-projects-wrapper">
      <div className="github-header flex items-center justify-center gap-3 mb-12">
        <FaGithub className="github-icon" />
        <h1 className="text-5xl font-bold">Projects</h1>
      </div>
      
      <div className="github-projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="github-project-card">
            <div className="project-card-header">
              <h2 className="project-title">{project.name}</h2>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-icon"
                title="View on GitHub"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-meta">
              <div className="language-badge" style={{ backgroundColor: getLanguageColor(project.language) }}>
                <span className="language-dot"></span>
                {project.language}
              </div>
              {project.stars > 0 && (
                <div className="stars-badge">
                  <FaStar /> {project.stars}
                </div>
              )}
            </div>

            <div className="project-topics">
              {project.topics.map((topic, index) => (
                <span key={index} className="topic-tag">{topic}</span>
              ))}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="view-repo-btn"
            >
              View Repository
              <FaExternalLinkAlt className="btn-icon" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubProjects;
