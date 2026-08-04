import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-inner">
        <span>© {currentYear} Mahek Patel</span>
      </div>
    </footer>
  );
};

export default Footer;
