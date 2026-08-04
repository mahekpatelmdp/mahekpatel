import NavigationLink from './NavigationLink';

const NAV_LINKS = [
  { name: 'Home', link: '#home' },
  { name: 'About Me', link: '#about' },
  { name: 'Skills', link: '#skills' },
  { name: 'Background', link: '#background' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

const NavItems = (props) => {
  const navigationItemsClasses =
    'navigation-items ' +
    (props.modalNavigation
      ? 'mobile-navigation flex-col m-auto'
      : 'desktop-navigation');

  return (
    <nav className={navigationItemsClasses}>
      {NAV_LINKS.map((item) => (
        <NavigationLink
          key={item.link}
          clickHandle={props.hideNavigation}
          name={item.name}
          link={item.link}
        />
      ))}
    </nav>
  );
};

export default NavItems;
