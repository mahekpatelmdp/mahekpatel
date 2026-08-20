import { Helmet } from 'react-helmet';
import HeroBanner from '../Components/HeroBanner/HeroBanner';
import Skills from '../Components/Projects/Skills';
import Background from '../Components/About/Background';
import ContactSection from '../Components/Contact/ContactSection';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Mahek Patel — Data & Business Analyst</title>
      </Helmet>
      <HeroBanner />
      <Skills />
      <Background />
      <ContactSection />
    </>
  );
};

export default Homepage;
