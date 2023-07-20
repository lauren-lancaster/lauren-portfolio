import { Link } from 'react-router-dom'

function Project() {
  return (
    <>
      <div className="project">
        <p className="project-name">ESC</p>
        <p className="project-school">Dev Academy</p>
        <p className="project-group">Group Project</p>
        <p className="project-complete">Complete</p>
        <p className="project-description">
          A virtual escape room that tracks your time through a series of
          puzzles and mini games
        </p>
        <Link to={`/project/esc`}>
          <button id="project-btn">Learn More</button>
        </Link>
      </div>
      <div className="project">
        <p className="project-name">Reading Tracker</p>
        <p className="project-school">Dev Academy</p>
        <p className="project-group">Solo Project</p>
        <p className="project-complete">In Progress</p>
        <p className="project-description">
          An app where you can list and review the books you have read
        </p>
        <Link to={`/project/read`}>
          <button id="project-btn">Learn More</button>
        </Link>
      </div>
      <div className="project">
        <p className="project-name">Effects Controller</p>
        <p className="project-school">VUW Sonic Arts</p>
        <p className="project-group">Solo Project</p>
        <p className="project-complete">Complete</p>
        <p className="project-description">
          The design and prototype for a French horn effects controller
        </p>
        <Link to={`/project/effects`}>
          <button id="project-btn">Learn More</button>
        </Link>
      </div>
      <div className="project">
        <p className="project-name">Audio Visualiser</p>
        <p className="project-school">VUW Sonic Arts</p>
        <p className="project-group">Solo Project</p>
        <p className="project-complete">Complete</p>
        <p className="project-description">
          An audio visualiser that can record, save, and playback sound
        </p>
        <Link to={`/project/visualiser`}>
          <button id="project-btn">Learn More</button>
        </Link>
      </div>
    </>
  )
}

export default Project
