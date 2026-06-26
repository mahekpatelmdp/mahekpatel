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
      title: 'Clinical Data Management — CDISC / SDTM Standards',
      issuer: 'CDISC · Industry Certification',
      description: 'Clinical data standards (CDISC/SDTM), GCP/ICH E6(R2) compliance, data governance, and regulatory audit readiness.',
      accent: '#107c10',
    },
    {
      id: 4,
      title: 'Healthcare IT Support',
      issuer: 'Johns Hopkins University · Coursera',
      description: 'EHR/EMR technical support, IT infrastructure, and operations in high-volume healthcare environments.',
      accent: '#002d72',
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
