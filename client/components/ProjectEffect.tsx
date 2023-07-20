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
          <h1 id="page-title">Effects Controller</h1>
          <h2 id="page-school">VUW Sonic Arts</h2>
          <h3>Solo Project</h3>
          <h4>Complete</h4>
          <h5>2022</h5>
          <a
            href="https://github.com/lauren-lancaster/Electronic-Horn"
            className="page-link"
          >
            <p>GitHub</p>
          </a>
        </div>
        <div className="page">
          <p>SKILLS: C++, arduino, teensyduino, Fusion360</p>
          <p>
            As the major assignment for my CMPO402 paper I was invited to create
            any kind of audio device using a micro-controller. After searching
            the NIME archives for inspiration, I discovered that an effects
            controller, while being popular with other instruments, had yet to
            be designed and built for my instrument, the French Horn. I drew up
            some sketches for how this might look for the horn, taking the
            ergonomics of playing the instrument into consideration. I wanted to
            create a controller that could be used instinctively by the player
            so there was as little a learning curve as possible. I decided on
            attaching buttons around the keys of the horn to trigger effects,
            and placing force pressure sensors inside the bell of the instrument
            where the right hand sits to adjust effect parameters. I also drew
            up a circuit diagram for my teensyduino, and wrote my own code to
            program it. With the planning in place I finalised my code,
            connected it to the effects in the digital audio workstation I'd be
            using, built and soldered my circuit, and 3D printed the parts I'd
            need to attach the sensors and circuitry to my instrument.
          </p>
          <p>
            If I were to recreate this project again in future I would like to
            smooth out my parameter adjustments. When a button on the handgrip
            is pressed (say the one for reverb), the effect will read the values
            it’s receiving from the pressure sensors. When that button is
            switched off the effect will hold the last read value from when the
            button was on. The problem arises when the button is pressed on
            again. The parameters will instantly switch to the new value being
            read by the sensors. I would prefer a slower and smoother transition
            to the new value. I would also make my mounting component on the
            handgrip smaller, and if possible, find smaller buttons as well. I
            believe smaller buttons will make holding the horn and controlling
            the keys much easier for the horn player, and would increase the
            fluidity with which they can play the instrument. My last adjustment
            would be to experiment with DAWs outside of Ableton. If someone were
            to repeat this experiment and use more components that required MIDI
            mapping, I would definitely recommend looking for options outside of
            Ableton that allow multiple components to be mapped at a time.
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
