import NavigationLink from './NavigationLink';

const NavItems = (props) => {
  const navigationItemsClasses =
    'navigation-items ' +
    (props.modalNavigation
      ? 'mobile-navigation flex-col m-auto'
      : 'desktop-navigation');

  return (
    <nav className={navigationItemsClasses}>

      <NavigationLink
        clickHandle={props.hideNavigation}
        name="Resume"
        link="/resume"
      />
      <NavigationLink
        clickHandle={props.hideNavigation}
        name="Contact"
        link="/contact"
      />
      <NavigationLink
        clickHandle={props.hideNavigation}
        name="About"
        link="/about"
      />

      {/* Icons inline (same row) */}
   

    </nav>
  );
};

export default NavItems;