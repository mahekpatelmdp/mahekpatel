import { Helmet } from 'react-helmet';
import HeroBanner from '../Components/HeroBanner/HeroBanner';
import AboutMain from '../Components/About/AboutMain';
import Skills from '../Components/Projects/Skills';
import Background from '../Components/About/Background';
import Projects from '../Components/Projects/Projects';
import ContactSection from '../Components/Contact/ContactSection';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Mahek Patel — Data & Business Analyst</title>
      </Helmet>
      <HeroBanner />
      <AboutMain />
      <Skills />
      <Background />
      <Projects />
      <ContactSection />
    </>
  );
};

export default Homepage;
