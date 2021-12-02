import React, { useEffect } from 'react'
import Particle from "react-tsparticles";
import config from './particlesConfigNoHover'
import './particles.css'



const Particles = () => {
  useEffect(() => {

  }, [])

  return (


    <div>
      <Particle
        id="tsparticles"
        options={config}
      >

      </Particle>
    </div>


  )
}

export default Particles
