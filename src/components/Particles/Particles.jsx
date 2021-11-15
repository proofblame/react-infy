import React from 'react'
import Particle from "react-tsparticles";



const Particles = () => {

  return (

    <Particle
      style={{ position: `absolute`, zIndex: `-1` }}
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "none"
          }
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 800,
              duration: 2,
              opacity: 0.8,
              size: 2
            },
            push: {
              quantity: 2
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: "#441E78"
          },
          links: {
            color: "#633D8D",
            distance: 150,
            // Исправлено
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 15
            },
            value: 2
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: true
      }}
    >

    </Particle>


  )
}

export default Particles
