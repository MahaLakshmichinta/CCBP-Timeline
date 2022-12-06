// Write your code here
import {Component} from 'react'

import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    const courseDetails = timelineItemsList.filter(
      e => e.categoryId === 'COURSE',
    )
    const projectDetails = timelineItemsList.filter(
      e => e.categoryId === 'PROJECT',
    )
    return (
      <div className="app-container">
        <h1 className="journey-heading">
          MY JOURNEY OF
          <br /> <br />
          <span className="journey-heading1"> CCBP 4.0</span>
        </h1>
        <div className="chron-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            theme={{
              primary: '#0967d2',
              secondary: 'white',
              cardBgColor: 'white',
              cardForeColor: '#1e293b',
              titleColor: '#0967d2',
            }}
          >
            {courseDetails.map(element => (
              <CourseTimelineCard key={element.id} course={element} />
            ))}

            {projectDetails.map(element => (
              <ProjectTimelineCard key={element.id} project={element} />
            ))}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
