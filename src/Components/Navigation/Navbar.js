import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import NavItems from './NavItems';
import { Modal } from '../UI/Modal';
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import navicon from '../../assets/navicon.png';

const NavBar = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const showNavigationModalHandler = () => {
    setIsNavigationOpen(true);
  };

  const hideNavigationModalHandler = () => {
    setIsNavigationOpen(false);
  };

  return (
    <header className="py-5 px-10 sticky top-0 bg-white	z-50">
      <button
        className="hamburger-menu invisible"
        onClick={showNavigationModalHandler}
      >
        <GiHamburgerMenu />
      </button>
      <h3 className="logo text-3xl font-bold flex items-center" style={{margin: 0, padding: 0, position: 'absolute', left: 20, top: 0, height: '100%'}}>
        <Link to="/" style={{display: 'flex', alignItems: 'center', height: '100%'}}>
          <img src={navicon} alt="logo" title="Home" width="144px" height="144px" style={{marginRight: 24, borderRadius: 16, boxShadow: '0 2px 8px #e0e0e0', objectFit: 'contain', height: '100%'}} />
        </Link>
      </h3>
      {isNavigationOpen && (
        <Modal onClose={hideNavigationModalHandler}>
          <div className="nav-modal flex h-full">
            <NavItems
              hideNavigation={hideNavigationModalHandler}
              modalNavigation={isNavigationOpen}
            />
            <button className="self-start" onClick={hideNavigationModalHandler}>
              <CgClose />
            </button>
          </div>
        </Modal>
      )}
      <NavItems modalNavigation={false} />
      <button className="hamburger-menu" onClick={showNavigationModalHandler}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default NavBar;
