import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function About() {
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
          <h1 id="page-title">Lauren Lancaster</h1>
          <h2 id="page-school">Full Stack Software Dev</h2>
          <h3>She/Her</h3>
          <h4>Dev Academy Graduate</h4>
          <h5>BMUS Hons first class at VUW</h5>
        </div>
        <div className="page" id="about-page">
          <p>
            Kia ora! I’m Lauren and I’m a software developer with a background
            in in classical music and music technologies.
          </p>
          <p>
            Up until recently I have been studying a bachelor of music at
            Victoria University of Wellington (which I have now graduated with
            first class honours). My major was in classical performance on the
            French horn and my minor in music technologies. It was my minor that
            sparked my interest in tech. Papers included recording, mixing,
            audio production (which to my excitement included film post
            production at Park Road Post), synthesis and electronic music
            recording.
          </p>
          <p>
            In my third year I did a paper that taught how to make audio
            visualisers with the P5JS sound library. I loved the structure of
            code and the challenge of problem solving with it, as well as the
            limitless creative projects I could create with it. I chose to do
            the corresponding fourth year paper the following year instead of
            the recommended orchestra paper. I continued to be inspired by code
            and decided that after I finished my degree, I would make the
            transition into the tech industry. I signed up to Dev Academy as
            soon as I graduated and haven’t looked back since.
          </p>
          <p>
            Dev Academy has taught me a wide range of skills, including
            Javascript, React and Redux, but also how to work in a team, and how
            the basics of agile methodologies. I’m really looking forward to
            growing these skills in my future career and creating code that
            makes an impact.
          </p>
          <p>
            Outside of tech I work part time at Lush cosmetics and as a musician
            in the Royal New Zealand Air Force Band. I also love to go tramping,
            read fiction books, and play social volleyball.
          </p>
          <div className="gallery">
            <div className="about-image">
              <img src="/images/DevAc.jpg" alt="Dev Academy" id="about-img" />
              <div className="desc">Final Presentations at Dev Academy</div>
            </div>
            <div className="about-image">
              <img
                src="/images/tongariro.jpg"
                alt="Tongariro northern circuit"
                id="about-img"
              />
              <div className="desc">
                Tramping the Tongariro Northern Circuit
              </div>
            </div>
            <div className="about-image">
              <img
                src="/images/play-fh.jpg"
                alt="Air Force Band"
                id="about-img"
              />
              <div className="desc">Performing with the Air Force Band</div>
            </div>
            <div className="about-image">
              <img
                src="/images/protools.png"
                alt="Protools session"
                id="about-img"
              />
              <div className="desc">ProTools session for film music</div>
            </div>
          </div>
          <Link to={`/`}>
            <button id="project-btn">Home</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
