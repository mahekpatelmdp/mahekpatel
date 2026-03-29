import { Helmet } from 'react-helmet';
import ContactForm from '../Components/Contact/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Mahek Portfolio</title>
      </Helmet>
      <ContactForm />
    </>
  );
};

export default Contact;
