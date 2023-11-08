import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageURL, description, title, webUrl} = projectDetails
  return (
    <li className="project-item-container">
      <img
        className="project-item-image"
        src={imageURL}
        alt={`project-item ${projectId}`}
      />
      <div className="project-item-details-container">
        <h1 className="project-item-title">{title}</h1>
        <p className="project-item-description">{description}</p>
        <a
          className="project-link"
          target="_blank"
          rel="noreferrer"
          href={webUrl}
        >
          Visit Website
        </a>
      </div>
    </li>
  )
}

export default ProjectItem
