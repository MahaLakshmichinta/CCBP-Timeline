// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {course} = props
  const {courseTitle, description, duration, tagsList} = course
  return (
    <div className="container-course-timeline">
      <div className="course-card-1">
        <h1 className="heading-timeline">{courseTitle}</h1>
        <div className="c-course">
          <AiFillClockCircle className="clock" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="list_elements">
        {tagsList.map(list => (
          <p className="para-element" key={list.id}>
            {list.name}
          </p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
