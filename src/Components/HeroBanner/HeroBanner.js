import heroImage from '../../assets/portfolioBanner.JPG';
import './HeroBanner.css';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <section className="hero-banner-wrapper flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 lg:px-16 py-12 min-h-screen bg-gradient-to-br from-white to-slate-100">
      
      {/* Left Content */}
      <div className="hero-text max-w-2xl text-center lg:text-left">
        
        <p className="text-base md:text-lg text-gray-500 mb-2">
          Hi, I’m
        </p>

        <h1 className="hero-name text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Mahek Patel
        </h1>

        <h2 className="hero-position text-lg md:text-2xl font-medium text-blue-600 mt-3">
          Healthcare Informatics Specialist
        </h2>

        <p className="hero-intro text-sm md:text-base text-gray-600 leading-7 mt-6">
          Passionate about improving healthcare through technology, data, 
          and patient-centered solutions. With experience in dentistry, 
          healthcare informatics, and medical data analysis, I combine 
          clinical knowledge with analytical skills to create meaningful impact.
        </p>

        {/* Buttons */}
        <div className="hero-links-wrapper mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
          
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            View Projects
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition-all duration-300"
          >
            About Me
          </Link>

        </div>
      </div>

      {/* Right Image */}
      <div className="hero-image-wrapper flex justify-center">
        <img
          alt="Mahek Patel"
          src={heroImage}
          className="w-64 md:w-80 lg:w-[380px] h-auto object-cover rounded-3xl shadow-2xl border-4 border-white"
        />
      </div>
    </section>
  );
};

export default HeroBanner;