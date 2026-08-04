import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-inner">
        <span>© {currentYear} Mahek Patel</span>
        <span className="footer-tagline">Data &amp; Business Analyst</span>
      </div>
    </footer>
  );
};

export default Footer;
