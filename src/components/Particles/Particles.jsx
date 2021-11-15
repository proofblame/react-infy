import React, { useEffect } from 'react'
import Particle from "react-tsparticles";



const Particles = () => {
  useEffect(() => {

  }, [])

  return (


    <div>
      <Particle
        style={{ position: `absolute`, zIndex: `-1` }}
        id="tsparticles"
        options={{
          // background: {
          //   color: {
          //     value: "none"
          //   }
          // },
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
                distance: 400,
                duration: 8,
                opacity: 0.8,
                size: 4
              },
              push: {
                quantity: 4
              },
              repulse: {
                distance: 100,
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
              distance: 200,
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
              speed: 2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                value_area: 600
              },
              value: 30
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
    </div>


  )
}

export default Particles
