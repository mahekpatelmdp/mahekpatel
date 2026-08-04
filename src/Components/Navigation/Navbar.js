import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import NavItems from './NavItems';
import { Modal } from '../UI/Modal';
import { CgClose } from 'react-icons/cg';

const NavBar = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const showNavigationModalHandler = () => setIsNavigationOpen(true);
  const hideNavigationModalHandler = () => setIsNavigationOpen(false);

  return (
    <header className="site-header sticky top-0 z-50 px-6 lg:px-10 py-4">
      <NavItems modalNavigation={false} />

      <button className="hamburger-menu" onClick={showNavigationModalHandler} aria-label="Open menu">
        <GiHamburgerMenu />
      </button>

      {isNavigationOpen && (
        <Modal onClose={hideNavigationModalHandler}>
          <div className="nav-modal flex h-full">
            <NavItems
              hideNavigation={hideNavigationModalHandler}
              modalNavigation={true}
            />
            <button className="modal-close self-start" onClick={hideNavigationModalHandler} aria-label="Close menu">
              <CgClose />
            </button>
          </div>
        </Modal>
      )}
    </header>
  );
};

export default NavBar;
