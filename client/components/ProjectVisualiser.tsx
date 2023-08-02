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
          <h1 id="page-title">Audio Visualiser</h1>
          <h2 id="page-school">VUW Sonic Arts</h2>
          <h3>Solo Project</h3>
          <h4>Complete</h4>
          <h5>2021</h5>
          <a
            href="https://github.com/lauren-lancaster/p5js-CMPO385"
            className="page-link"
          >
            <p>GitHub</p>
          </a>
          <a
            href="https://editor.p5js.org/LaurenL737/full/QlV8P7b3-m"
            className="page-link"
          >
            <p>View Project</p>
          </a>
        </div>
        <div className="page">
          <p>SKILLS: P5JS</p>
          <p>
            This project was the major assignment for my CMPO385 paper. For this
            course I learned to create audio visualisers using the p5js sound
            library, which is a Javascript library for creative coding. This
            product is an audio recorder and playback device. When the user
            clicks the page, recording will start. The code will monitor the
            volume of the sound input and give visual feedback on these levels
            to the user (a small green circle is quiet, a large red circle is
            loud). The recording will stop on the next click. On the third click
            the sound will save to your computer and playback of the audio will
            begin. I make use of FFT (fast fourier transform: transforms signals
            from the time domain to the frequency domain) to create visuals from
            the sound being played back. For better visuals, I'd reccommend
            recording louder createTextSpanFromBounds.
          </p>
          <p>
            This was my first time venturing into Javascript, so much of my code
            from this paper was learned from online tutorials. Even though my
            code lacked originality, I was completely inspired by the
            possibilities of what could be achieved. This paper is where I
            discovered my love of code and what I consider to be the start of my
            journey into the tech world.{' '}
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
