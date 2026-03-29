import './ContactInformation.css';
import { IoIosContact } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';
// import { BsLinkedin } from 'react-icons/bs';


const ContactInformation = () => {
  return (
    <div className="contact-information-wrapper text-left">
      <div className="mb-6">
        <span className="contact-info">
          <IoIosContact /> Name: Mahek Patel
        </span>
        <span className="contact-info">
          <a href="tel:+17789551108">
            <AiOutlinePhone /> Phone: 778-955-1108
          </a>
        </span>
        <span className="contact-info">
          <a href="mailto:mahekpatel.mdp@gmail.com">
            <HiOutlineMail /> Email: mahekpatel.mdp@gmail.com
          </a>
        </span>
        <span className="contact-info">
          <span>Address: 1018 Cambie St, Vancouver, Canada</span>
        </span>
      </div>
      <div className="socials">
        {/* Add Mahek Patel's LinkedIn and GitHub links here if available */}
        {/* Social links removed to fix errors */}
      </div>
    </div>
  );
};

export default ContactInformation;
