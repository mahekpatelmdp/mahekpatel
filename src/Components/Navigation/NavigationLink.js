import { NavLink } from 'react-router-dom';

const NavigationLink = (props) => {
  return (
    <NavLink
      onClick={props.clickHandle}
      className="nav-links"
      to={props.link}
      title={props.name}
    >
      {props.name}
    </NavLink>
  );
};

export default NavigationLink;
