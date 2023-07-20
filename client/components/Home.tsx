import Projects from './Projects'
import Nav from './Nav'

function Home() {
  return (
    <>
      <div className="home-container">
        <header className="header">
          <h1 id="title">Lauren Lancaster</h1>
          <h2 id="subtitle">Software Developer</h2>
        </header>
        <div className="about">
          <p>Kia Ora! Thanks for stopping by.</p>
          <p>
            I’m Lauren and I’m a software developer with a background in
            classical music and an interest in music technologies. Check out my
            projects below to see what I’ve been working on!
          </p>
        </div>
      </div>
      <div className="navbar">
        <Nav />
      </div>
      <div className="projects">
        <Projects />
      </div>
    </>
  )
}

export default Home
