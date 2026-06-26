import { FaGithub, FaExternalLinkAlt, FaLock, FaRocket } from 'react-icons/fa';
import './GitHubProjects.css';

const GitHubProjects = () => {
  const featured = {
    id: 0,
    name: 'HealthLab AI — Daily Reel Generator',
    tagline: 'Full-Stack SaaS · Live Product',
    description:
      'AI-powered TikTok content engine for @overall_health_lab. Generates research-backed health reels with Groq LLM rewriting, auto-trending topic discovery from live health news feeds, performance analytics, AI video generation (ffmpeg), and a PWA installable on any device.',
    stack: ['FastAPI', 'React', 'Groq AI', 'SQLite', 'Pillow', 'FFmpeg', 'Vite', 'Railway', 'Vercel'],
    liveUrl: 'https://frontend-alpha-seven-70.vercel.app',
    isPrivate: true,
    isFeatured: true,
  };

  const projects = [
    {
      id: 1,
      name: 'EHR Adoption Analysis',
      description:
        'End-to-end cloud analytics pipeline analysing Electronic Health Records adoption trends across US healthcare systems. Ingested and transformed raw EHR data in Snowflake, built dashboards surfacing adoption barriers and regional disparities.',
      language: 'Python',
      stack: ['Python', 'Snowflake', 'SQL', 'Power BI'],
      isPrivate: true,
      topics: ['EHR', 'Snowflake', 'Cloud Analytics', 'Healthcare IT'],
    },
    {
      id: 2,
      name: 'Patient Readmission Predictor',
      description:
        'Machine learning model identifying patients at high risk of 30-day hospital readmission. Achieved 84% AUC using XGBoost with SHAP explainability — outputs actionable risk flags for clinical teams.',
      language: 'Python',
      stack: ['Python', 'XGBoost', 'SHAP', 'Scikit-learn', 'Pandas'],
      isPrivate: true,
      topics: ['ML', 'Predictive Modelling', 'Clinical Risk', 'Healthcare'],
    },
    {
      id: 3,
      name: 'Hospital Payments — BigQuery Pipeline',
      description:
        'Real-world data engineering workflow for a healthcare analytics team. Generates synthetic hospital claims data, cleans with Python, loads into BigQuery, and transforms into a dimensional model with dbt-style layering.',
      language: 'Python',
      stack: ['Python', 'BigQuery', 'SQL', 'Pandas', 'Data Modelling'],
      isPrivate: true,
      topics: ['BigQuery', 'Data Engineering', 'ETL', 'Healthcare'],
    },
    {
      id: 4,
      name: 'Hospital Payments — Tableau Dashboard',
      description:
        'Interactive Tableau workbook uncovering trends in how hospitals charge vs. receive payment for medical services — including charge-to-payment ratios, payer mix analysis, and geographic benchmarking.',
      language: 'Tableau',
      stack: ['Tableau', 'SQL', 'Data Visualisation'],
      isPrivate: true,
      topics: ['Tableau', 'Analytics', 'Healthcare Finance', 'Viz'],
    },
    {
      id: 5,
      name: 'Predictive Modelling — Healthcare Data',
      description:
        'Academic capstone applying logistic regression, decision trees, and ensemble methods to structured clinical datasets. Focused on feature engineering from EHR-style data and model interpretability for clinical decision support.',
      language: 'Python',
      stack: ['Python', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      isPrivate: true,
      topics: ['ML', 'Clinical Decision Support', 'Feature Engineering'],
    },
  ];

  const LANG_COLORS = {
    Python:           '#3776ab',
    'Jupyter Notebook': '#da5b0b',
    Tableau:          '#e8a914',
    JavaScript:       '#f1e05a',
    TypeScript:       '#2b7489',
  };

  return (
    <div className="github-projects-wrapper">
      <div className="github-header flex items-center justify-center gap-3 mb-12">
        <FaGithub className="github-icon" />
        <h1 className="text-5xl font-bold">Projects</h1>
      </div>

      {/* ── Featured live project ── */}
      <div className="featured-project-card mb-12">
        <div className="featured-badge">
          <FaRocket style={{ display: 'inline', marginRight: '6px' }} />
          Featured — Live Product
        </div>

        <h2 className="featured-title">{featured.name}</h2>
        <p className="featured-tagline">{featured.tagline}</p>
        <p className="featured-description">{featured.description}</p>

        <div className="featured-stack">
          {featured.stack.map((s) => (
            <span key={s} className="stack-chip">{s}</span>
          ))}
        </div>

        <div className="featured-actions">
          <a
            href={featured.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="live-demo-btn"
          >
            <FaRocket style={{ display: 'inline', marginRight: '8px' }} />
            Open Live App
          </a>
          <span className="private-note">
            <FaLock style={{ display: 'inline', marginRight: '6px', fontSize: '0.8rem' }} />
            Private repository
          </span>
        </div>
      </div>

      {/* ── Other projects grid ── */}
      <div className="github-projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="github-project-card">
            <div className="project-card-header">
              <h2 className="project-title">{project.name}</h2>
              <span className="private-badge" title="Private repository">
                <FaLock />
              </span>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-meta">
              <div
                className="language-badge"
                style={{ backgroundColor: LANG_COLORS[project.language] || '#858585' }}
              >
                <span className="language-dot" />
                {project.language}
              </div>
            </div>

            <div className="project-topics">
              {project.topics.map((topic) => (
                <span key={topic} className="topic-tag">{topic}</span>
              ))}
            </div>

            <div className="stack-row">
              {project.stack.map((s) => (
                <span key={s} className="stack-mini">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubProjects;
