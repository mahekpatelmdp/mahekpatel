import { Link } from 'react-router-dom';

const LatestWork = () => {
  return (
    <div className="latest-work mb-5">
      <h1 className="text-3xl mb-5">Check out my skills and projects </h1>
      <Link className="block button m-auto" to="/projects">
        Click Here
      </Link>
    </div>
  );
};

export default LatestWork;
