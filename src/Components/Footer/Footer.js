import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="copyright-text">
        Copyright &copy; {currentYear} | Mahek Patel Portfolio
      </div>
    </footer>
  );
};

export default Footer;
