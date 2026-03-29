import './SkillsUI.css';

const SkillsUI = ({ logo, title }) => {
  return (
    <div className="skill">
      <div className="logo-wrapper">
        <img className="mb-3" src={logo} alt={title} width="200px" />
      </div>
      <h1 className="text-4xl">{title}</h1>
    </div>
  );
};

export default SkillsUI;
