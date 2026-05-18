import './Projects.css';
import GitHubProjects from './GitHubProjects';
import Certifications from './Certifications';

const Projects = () => {
  return (
    <div className="projects-page-wrapper flex justify-center items-center flex-col p-10">
      <GitHubProjects />
      <Certifications />
    </div>
  );
};

export default Projects;
