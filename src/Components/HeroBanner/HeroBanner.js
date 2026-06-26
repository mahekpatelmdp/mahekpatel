import heroImage from '../../assets/portfolioBanner.JPG';
import './HeroBanner.css';
import { Link } from 'react-router-dom';

const STATS = [
  { value: '4+', label: 'Years experience' },
  { value: 'BDS + MS', label: 'Clinical & informatics' },
  { value: '6', label: 'Projects shipped' },
];

const TAGS = [
  'Health Informatics', 'EHR / EMR', 'Clinical Data',
  'SQL · Python', 'Power BI · Tableau', 'AI Products',
];

const HeroBanner = () => {
  return (
    <section className="hero-banner-wrapper flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 lg:px-16 py-12 min-h-screen bg-gradient-to-br from-white to-slate-100">

      {/* ── Left content ── */}
      <div className="hero-text max-w-2xl text-center lg:text-left">

        <p className="text-base text-gray-500 mb-2 tracking-wide uppercase text-sm font-semibold">
          Hi, I'm
        </p>

        <h1 className="hero-name text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Mahek Patel
        </h1>

        <h2 className="hero-position text-lg md:text-2xl font-semibold text-blue-600 mt-3">
          Health Informatics Specialist &amp; Clinical Data Analyst
        </h2>

        <p className="hero-intro text-sm md:text-base text-gray-600 leading-7 mt-5">
          MS in Healthcare Informatics · Bachelor of Dental Surgery · 4+ years turning
          complex clinical and operational data into decisions that improve patient outcomes.
          I bridge the gap between clinical knowledge and modern data infrastructure —
          from EHR workflow analysis to AI-powered health content tools.
        </p>

        {/* Tag chips */}
        <div className="hero-tags mt-5 flex flex-wrap gap-2 justify-center lg:justify-start">
          {TAGS.map((tag) => (
            <span key={tag} className="hero-tag">{tag}</span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hero-links-wrapper mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            View Projects
          </Link>
          <a
            href="https://frontend-alpha-seven-70.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition-all duration-300 shadow-md"
          >
            ✦ Live AI Project
          </a>
          <Link
            to="/about"
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            About Me
          </Link>
        </div>

        {/* Stats row */}
        <div className="hero-stats mt-10 flex gap-8 justify-center lg:justify-start">
          {STATS.map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right image ── */}
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
