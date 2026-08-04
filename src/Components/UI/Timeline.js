import './Timeline.css';
import Reveal from './Reveal';

const Timeline = ({ icon, title, subtitle, duration, summary, bullets, courses, isLast, delay }) => {
  return (
    <Reveal delay={delay} className="timeline-item">
      <div className="timeline-marker">
        <span className="timeline-icon">{icon}</span>
        {!isLast && <span className="timeline-line" />}
      </div>

      <div className="timeline-content">
        <h4>{title}</h4>
        <p className="timeline-subtitle">{subtitle}</p>
        {duration && <p className="timeline-duration">{duration}</p>}
        {summary && <p className="timeline-summary">{summary}</p>}

        {bullets?.length > 0 && (
          <ul className="timeline-bullets">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}

        {courses?.length > 0 && (
          <div className="courses-marquee">
            <div className="courses-track">
              {[...courses, ...courses].map((course, idx) => (
                <span className="course-chip" key={`${course}-${idx}`}>{course}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
};

export default Timeline;
