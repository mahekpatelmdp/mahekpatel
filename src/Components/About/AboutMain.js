import AboutIntroduction from './AboutIntroduction';
import './AboutMain.css';
import Education from './Education';
import portfolioAbout from '../../assets/portfolioAbout.jpg';

const AboutMain = () => {
  return (
    <div className="about-wrapper flex justify-center items-center flex-col">
      <div className="flex items-stretch gap-8 mb-12">
        <div className="about-image hidden md:block">
          <img alt="about-intro" src={portfolioAbout} />
        </div>
        <AboutIntroduction />
      </div>
      <Education />
    </div>
  );
};

export default AboutMain;
