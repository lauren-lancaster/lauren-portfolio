import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import Nav from './Nav'

function Project() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="page-nav">
        <Nav />
      </div>
      <div className="home-container">
        <div className="page-header">
          <h1 id="page-title">Reading Tracker</h1>
          <h2 id="page-school">Dev Academy</h2>
          <h3>Solo Project</h3>
          <h4>In Progress</h4>
          <h5>2023</h5>
          <a
            href="https://github.com/lauren-lancaster/my-fullstack-collection"
            className="page-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>GitHub</p>
          </a>
          <a
            href="http://lauren-book-collection.devacademy.nz/"
            className="page-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>View Project</p>
          </a>
        </div>
        <div className="page">
          <p>
            SKILLS: Typescript, Javascript, React, Redux, SQLite3, Knex, SCSS
          </p>
          <p>
            This is a website that allows you to view information on books you
            have read, as well as your rating and review of them. You can also
            add, update and delete the books. This project is still in progress.
            In future users will be able to click on the individual book cards
            and be taken to a new webpage with more detailed information. I also
            want to add authentication so users can log in to add their own
            books.
          </p>
          <p>
            The reading tracker was my second solo project at Dev Academy. Most
            work at Dev is done in pairs. At this stage in my learning I had
            been working in fullstack for less than a week, so this project was
            a way for me to teach myself how to connect the back end to the
            front end. Working on such new content individually was a challenge,
            especially because I fell sick this week and had to switch to
            working from home, however during the foundations part of Dev
            Academy I had built some strong working habits for working at home
            so the switch back wasn't too difficult. I wrote down my thoughts
            and reflections as I went and stayed in regular contact with the Dev
            Academy facilitators. Because I was working by myself all the areas
            of new knowledge I hadn't quite cemented became very obvious and I
            was able to quickly identify which areas needed a bit of deeper
            learning. The project was slow going, hence why it is yet to be
            completed, but I had a lot of fun learning new things throughout it
            and future projects were much easier because I had spent the time on
            it first.
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
