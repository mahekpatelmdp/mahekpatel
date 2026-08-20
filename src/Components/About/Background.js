import './Background.css';
import SectionBadge from '../UI/SectionBadge';
import Reveal from '../UI/Reveal';
import EducationAndExperience from './EducationAndExperience';

const Background = () => {
  return (
    <section id="background" className="background-section px-6 lg:px-16 py-24">
      <Reveal>
        <SectionBadge label="Education &" highlight="Experience" />
      </Reveal>

      <div className="mt-14">
        <EducationAndExperience />
      </div>
    </section>
  );
};

export default Background;
