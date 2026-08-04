import './Background.css';
import SectionBadge from '../UI/SectionBadge';
import Reveal from '../UI/Reveal';
import EducationAndExperience from './EducationAndExperience';
import Certifications from './Certifications';

const Background = () => {
  return (
    <section id="background" className="background-section px-6 lg:px-16 py-24">
      <Reveal>
        <SectionBadge label="Education & Experience" highlight="Background" />
      </Reveal>

      <div className="mt-14">
        <EducationAndExperience />
        <Certifications />
      </div>
    </section>
  );
};

export default Background;
