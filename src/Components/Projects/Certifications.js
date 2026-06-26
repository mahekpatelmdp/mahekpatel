import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Analytics in Healthcare Management & Administration',
      issuer: 'Northeastern University · Coursera',
      description: 'Healthcare analytics, management strategy, and administrative decision-making. Completed with Honours.',
      accent: '#0066cc',
    },
    {
      id: 2,
      title: 'Business Analysis Fundamentals',
      issuer: 'Microsoft · Coursera',
      description: 'Requirements gathering, stakeholder management, process mapping, and gap analysis using Microsoft tooling.',
      accent: '#00a4ef',
    },
    {
      id: 3,
      title: 'Healthcare IT Support',
      issuer: 'Johns Hopkins University · Coursera',
      description: 'EHR/EMR technical support, IT infrastructure, and operations in high-volume healthcare environments.',
      accent: '#002d72',
    },
    {
      id: 4,
      title: 'Google Project Management',
      issuer: 'Google · Coursera',
      description: 'Project lifecycle, Agile and Scrum methodologies, stakeholder communication, and risk management.',
      accent: '#4285f4',
    },
    {
      id: 5,
      title: 'Salesforce',
      issuer: 'Salesforce · Trailhead',
      description: 'CRM administration, data management, reporting, and workflow automation on the Salesforce platform.',
      accent: '#00a1e0',
    },
    {
      id: 6,
      title: 'Business Intelligence',
      issuer: 'Coursera',
      description: 'BI concepts, data warehousing, dashboard design, and reporting pipelines for business decision-making.',
      accent: '#f4b400',
    },
    {
      id: 7,
      title: 'UI / UX Design',
      issuer: 'Coursera',
      description: 'User research, wireframing, prototyping, accessibility principles, and designing intuitive digital products.',
      accent: '#e91e8c',
    },
    {
      id: 8,
      title: 'Data Analyst',
      issuer: 'Coursera',
      description: 'Data cleaning, exploratory analysis, visualisation, and communicating insights from structured datasets.',
      accent: '#34a853',
    },
  ];

  return (
    <div className="certifications-wrapper">
      <div className="section-header">
        <h1>Certifications</h1>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="certification-card"
            style={{ borderTopColor: cert.accent }}
          >
            <div className="cert-accent-dot" style={{ background: cert.accent }} />
            <h2 className="cert-title">{cert.title}</h2>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-description">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
