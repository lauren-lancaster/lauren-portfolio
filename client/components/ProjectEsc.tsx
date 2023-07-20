import { Link } from 'react-router-dom'

import Nav from './Nav'

function Project() {
  return (
    <>
      <div className="page-nav">
        <Nav />
      </div>
      <div className="home-container">
        <div className="page-header">
          <h1 id="page-title">ESC</h1>
          <h2 id="page-school">Dev Academy</h2>
          <h3>Group Project</h3>
          <h4>Complete</h4>
          <h5>2023</h5>
          <a
            href="https://github.com/lauren-lancaster/Esc"
            className="page-link"
          >
            <p>GitHub</p>
          </a>
        </div>
        <div className="page">
          <p>SKILLS: Typescript, Javascript, React, Redux, SQLite3, Knex</p>
          <p>
            For the Dev Academy final group projects, I pitched the idea of
            making an escape room. I chose it because I was excited about
            applying the skills I'd learned throughout boot camp in a creative
            and fun way. I worked in a group of five to achieve this project.
            Together we planned out five puzzle rooms that the player must work
            through. If the player is successful they will also have their time
            updated to the scoreboard. We spent a day in the planning and
            documentation stage, working out all of our features, data, routes,
            database functions, and wireframes in advance. We also set up a
            kanban board that we used throughout the week and wrote up a daily
            schedule and sprint goals that we referred to every day. Within our
            group I had the role of co-scrum lead, which meant I was responsible
            for the schedule, the sprint goals, and guiding our stand up
            meetings. By the end of the project we had met all of our product
            goals and had created an immersive virtual escape room experience.
          </p>
          <p>
            This was a really valuable learning experience that I got a lot out
            of. Tech wise, it helped to solidify all of the knowledge I had been
            learning for the past few weeks. I also learned how to use a sound
            library in React, and how to Route all my pages using
            react-router-dom. I also discovered the value of a thorough planning
            session. In the past I have been the type to right up the start of a
            plan, then wing the rest. Having the whole project planned and
            documented right from the get-go significantly sped up my workflow
            as I always new which tasks needed to be worked on and when. There
            was also much less time spent on decision making. /n At the end of
            the week we spent a day preparing to present our projects to an
            audience. For the speech, I had to adapt the way I talked about the
            project and the product to a non-technical audience.
          </p>
          <Link to={`/`}>
            <button id="project-btn">Home</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Project
