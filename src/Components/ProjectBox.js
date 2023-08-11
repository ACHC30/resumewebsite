import "../CSS/Projects.css";

const ProjectBox = ({ title, href, image, summary }) => {
  return (
    <div className="items">
      <a href={href}>
        <h1>{title}</h1>
        <img src={image} alt="logo" />
        <p>{summary}</p>
      </a>
    </div>
  );
};

export default ProjectBox;
