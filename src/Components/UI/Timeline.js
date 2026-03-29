import './Timeline.css';
import { BsCalendar } from 'react-icons/bs';

const Timeline = ({ position, institute, duration, duties }) => {
  const words = duties?.split(' ');

  // Group words into lines with a maximum of 5 words each
  const lines = [];
  for (let i = 0; i < words?.length; i += 5) {
    lines.push(words.slice(i, i + 6).join(' '));
  }

  return (
    <div className="timeline flex flex-col px-6 relative">
      <span className="position">{position}</span>
      <span className="institution">{institute}</span>
      <span className="duration">
        <BsCalendar /> {duration}
      </span>
      
    <span>
    
      <strong>
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        </strong>
      </span>
        </div>
  );
};

export default Timeline;
