import './Skills.css';
import LOGOS from '../Helpers/Logos';
import SkillsUI from './SkillsUI';

const Skills = () => {
  return (
    <div id="skills-section" className="mb-11 skills-section w-full p-4">
      <h1 className="text-5xl font-bold mb-11">Skills</h1>
      <div className="skills-wrapper">
        {LOGOS.map((logo) => (
          <SkillsUI logo={logo.src} title={logo.title} />
        ))}
      </div>
      <div className="skills-wrapper">
        {LOGOS.map((logo) => (
          <SkillsUI logo={logo.src} title={logo.title} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
