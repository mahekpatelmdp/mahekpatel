import { Helmet } from 'react-helmet';
import Projects from '../Components/Projects/Projects';

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Mahek Portfolio</title>
      </Helmet>
      <Projects />
    </>
  );
};

export default ProjectsPage;
