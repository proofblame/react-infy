const config = {
  autoPlay: true,
  fullScreen: {
    enable: true,
    zIndex: 1
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 60,
  particles: {
    color: {
      value: "#441E78",
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true
        }
      }
    },
    links: {
      blink: false,
      color: {
        value: "#633D8D"
      },
      consent: false,
      distance: 150,
      enable: true,
      frequency: 1,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: "#633D8D"
        },
        enable: false
      },
      triangles: {
        enable: false,
        frequency: 1
      },
      width: 1,
      warp: false
    },
    move: {
      angle: {
        offset: 0,
        value: 90
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0
        },
        enable: false,
        options: {}
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out"
      },
      random: false,
      size: false,
      speed: 2,
      spin: {
        acceleration: 0,
        enable: false
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#441E78"
        }
      },
      vibrate: false,
      warp: false
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000
      },
      limit: 0,
      value: 50
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1
      },
      value: {
        min: 0.1,
        max: 0.5
      },
      animation: {
        count: 0,
        enable: true,
        speed: 1,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.1
      }
    },

    reduceDuplicates: true,

  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  themes: [],
  zLayers: 100

}

export default config