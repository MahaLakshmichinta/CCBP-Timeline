// Write your code here
import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {project} = props
  const {projectTitle, imageUrl, duration, description, projectUrl} = project
  return (
    <div>
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="container">
        <h1 className="heading">{projectTitle}</h1>
        <div className="c-project">
          <AiFillCalendar className="calender" />
          <p className="para">{duration}</p>
        </div>
      </div>
      <p className="project-para">{description}</p>
      <a href={projectUrl} target="_click" className="link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
