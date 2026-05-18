import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Analytics in Healthcare Management and Administration (with Honors)',
      issuer: 'Northeastern University via Coursera',
      description: 'Specialized in healthcare analytics, management strategies, and administrative practices.'
    },
    {
      id: 2,
      title: 'Business Analysis Fundamentals',
      issuer: 'Microsoft via Coursera',
      description: 'Comprehensive training in business analysis methodologies and Microsoft tools.'
    },
    {
      id: 3,
      title: 'Healthcare IT Support',
      issuer: 'Johns Hopkins University via Coursera',
      description: 'Technical support and IT infrastructure knowledge in healthcare environments.'
    }
  ];

  return (
    <div className="certifications-wrapper">
      <div className="section-header">
        <h1>Certifications</h1>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="certification-card">
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
