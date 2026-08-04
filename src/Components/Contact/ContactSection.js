import './ContactSection.css';
import SectionBadge from '../UI/SectionBadge';
import Reveal from '../UI/Reveal';
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';

const CONTACT_ROWS = [
  {
    icon: <FaPhoneAlt />,
    label: 'Phone',
    value: '778-955-1108',
    href: 'tel:+17789551108',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'mahekpatel.mdp@gmail.com',
    href: 'mailto:mahekpatel.mdp@gmail.com',
  },
  {
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mahek-patel-8ba264286',
    href: 'https://www.linkedin.com/in/mahek-patel-8ba264286',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section px-6 lg:px-16 py-24">
      <Reveal>
        <SectionBadge label="Contact" highlight="Info" />
      </Reveal>

      <div className="contact-grid mt-12">
        <Reveal className="contact-heading">
          <h2>
            Let&apos;s <span className="accent">connect</span> and<br />
            work <span className="accent">together</span>!
          </h2>
          <p className="contact-location">
            <FaMapMarkerAlt /> Vancouver, BC, Canada
          </p>
        </Reveal>

        <Reveal delay={150} className="contact-rows">
          {CONTACT_ROWS.map((row) => (
            <a key={row.label} href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-row">
              <span>
                <span className="contact-row-label">{row.label}</span>
                <span className="contact-row-value">{row.value}</span>
              </span>
              <span className="contact-row-icon">{row.icon}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
