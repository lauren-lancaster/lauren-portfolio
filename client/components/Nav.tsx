import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div id="home-nav">
      <a href="/files/cv.pdf" download>
        <p className="underline">CV</p>
      </a>
      <Link to={`/aboutme`}>
        <p className="underline">About Me</p>
      </Link>
      <a
        href="https://github.com/lauren-lancaster"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="underline">GitHub</p>
      </a>
      <a
        href="https://www.linkedin.com/in/lauren-lancaster-7a33b7192/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="underline">LinkedIn</p>
      </a>
      <a href="mailto:737lanc@gmail.com">
        <p className="underline">Contact Me</p>
      </a>
    </div>
  )
}

export default Nav
