import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import NavItems from './NavItems';
import { Modal } from '../UI/Modal';
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import navicon from '../../assets/navicon.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const NavBar = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const showNavigationModalHandler = () => {
    setIsNavigationOpen(true);
  };

  const hideNavigationModalHandler = () => {
    setIsNavigationOpen(false);
  };

  return (
    <header
      className="py-5 px-10 sticky top-0 bg-white z-50"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      {/* LEFT: LOGO */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={navicon}
            alt="logo"
            title="Home"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px #e0e0e0',
              objectFit: 'contain'
            }}
          />
        </Link>
      </div>

      {/* CENTER: NAV ITEMS + ICONS */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <NavItems modalNavigation={false} />

        <a
          href="https://www.linkedin.com/in/mahek-patel-8ba264286"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '22px',
            color: '#0077b5',
            textDecoration: 'none'
          }}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/mahekpatelmdp"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '22px',
            color: '#333',
            textDecoration: 'none'
          }}
        >
          <FaGithub />
        </a>
      </div>

      {/* RIGHT: HAMBURGER */}
      <button className="hamburger-menu" onClick={showNavigationModalHandler}>
        <GiHamburgerMenu />
      </button>

      {/* MOBILE MODAL */}
      {isNavigationOpen && (
        <Modal onClose={hideNavigationModalHandler}>
          <div className="nav-modal flex h-full">
            <NavItems
              hideNavigation={hideNavigationModalHandler}
              modalNavigation={true}
            />
            <button className="self-start" onClick={hideNavigationModalHandler}>
              <CgClose />
            </button>
          </div>
        </Modal>
      )}
    </header>
  );
};

export default NavBar;