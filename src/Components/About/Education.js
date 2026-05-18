import './Education.css';

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: 'Master of Science',
      field: 'Healthcare Informatics',
      institution: 'University of Illinois',
      location: 'Springfield, Illinois, USA',
      duration: 'Jan 2025 - May 2026',
      courses: [
        'Healthcare System Analysis and Design',
        'Business Analysis',
        'Healthcare Information Systems Security & Privacy',
        'Information Management',
        'Database & Data Mining'
      ],
      status: 'Current'
    },
    {
      id: 2,
      degree: 'Bachelor of Dental Surgery',
      field: 'B.D.S',
      institution: 'Dharmsinh Desai University',
      location: 'Nadiad, India',
      duration: 'July 2018 - Sep 2023',
      courses: [
        'Pathology',
        'Radiology',
        'Pharmacology',
        'Orthodontics',
        'Periodontics',
        'Public Health'
      ],
      status: 'Completed'
    }
  ];

  return (
    <div className="education-wrapper">
      <div className="section-header">
        <h1>Education</h1>
      </div>

      <div className="education-timeline">
        {educations.map((edu, index) => (
          <div key={edu.id} className="education-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              {index !== educations.length - 1 && <div className="marker-line"></div>}
            </div>

            <div className="education-card">
              <div className="card-header">
                <div className="degree-info">
                  <h2 className="degree-title">{edu.degree}</h2>
                  <p className="field-name">{edu.field}</p>
                </div>
              </div>

              <div className="institution-details">
                <p className="institution-name">{edu.institution}</p>
                <p className="institution-location">{edu.location}</p>
              </div>

              <div className="duration-info">
                <span className="duration-label">📅</span>
                <span className="duration-text">{edu.duration}</span>
              </div>

              <div className="courses-section">
                <p className="courses-label">Key Coursework:</p>
                <div className="courses-list">
                  {edu.courses.map((course, idx) => (
                    <span key={idx} className="course-item">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
