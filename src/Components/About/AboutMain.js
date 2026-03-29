import AboutIntroduction from './AboutIntroduction';
import './AboutMain.css';
import EducationAndExperience from './EducationAndExperience';
import LatestWork from './LatestWork';
import portfolioAbout from '../../assets/portfolioAbout.jpg';

const AboutMain = () => {
  return (
    <div className="about-wrapper flex justify-center items-center flex-col">
      <div className="flex items-center mb-7">
        <div className="about-image hidden md:block self-start">
          <img alt="about-intro" src={portfolioAbout} />
        </div>
        <AboutIntroduction />
      </div>
      <EducationAndExperience />
      {/* <LatestWork /> */}
      <div className="certifications-section mt-8">
        <h2 className="font-bold text-3xl mb-4">Certifications</h2>
        <ul className="mb-6">
          <li>Analytics in Healthcare Management and Administration (with Honors) – Northeastern University via Coursera</li>
          <li>Business Analysis Fundamentals – Microsoft via Coursera</li>
          <li>Healthcare IT Support - Johns Hopkins University via Coursera</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMain;
