import { Helmet } from 'react-helmet';
import resumePath from '../assets/Resume_MahekPatel.pdf';

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Resume - Mahek Patel Portfolio</title>
      </Helmet>
      <iframe
        style={{ width: '100%', height: '100vh' }}
        src={resumePath}
        className="m-auto"
        title="resume"
      />
    </>
  );
};

export default Resume;
