import './ProjectUI.css';

const ProjectUI = ({
  backgroundImage,
  title,
  description,
  websiteLink,
  githubLink,
}) => {
  const flipCardHandler = (event) => {
    event.currentTarget.closest('.card-inner').classList.toggle('is-flipped');
  };

  const descriptionArray = Array.isArray(description) ? description : [];

  return (
    <div className="project-card">
      <div className="card-inner p-4">
        <div
          className="front card-face flex justify-around items-center flex-col p-4"
          style={{
            background: `url(${backgroundImage})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="overlay"></div>
          <h1 className="text-white text-4xl z-10 font-bold m-auto">{title}</h1>
          <button
            onClick={flipCardHandler}
            className="details-button z-10 self-end"
          >
            Click for details <span>&#8594;</span>
          </button>
        </div>
        <div className="back card-face z-10 flex justify-around items-center p-4 flex-col">
          <button onClick={flipCardHandler} className="back-button self-start">
            <span>&#8592;</span> Back
          </button>
          <p className="text-ellipsis">
            <span className="font-bold">Project Description:</span>
            <ul>
              {descriptionArray.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {websiteLink && (
              <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Visit Website
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectUI;
