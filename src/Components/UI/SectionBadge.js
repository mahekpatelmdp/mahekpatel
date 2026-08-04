const SectionBadge = ({ label, highlight }) => {
  return (
    <span className="section-badge">
      {label} <span className="badge-highlight">{highlight}</span>
    </span>
  );
};

export default SectionBadge;
