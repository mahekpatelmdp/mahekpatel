const NavigationLink = (props) => {
  return (
    <a
      onClick={props.clickHandle}
      className="nav-links"
      href={props.link}
      title={props.name}
    >
      {props.name}
    </a>
  );
};

export default NavigationLink;
