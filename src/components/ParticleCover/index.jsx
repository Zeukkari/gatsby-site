import React, { Component } from 'react'
import Particles from 'react-particles-js'

const params = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: false,
      },
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 2,
        color: '#fff',
      },
      polygon: {
        nb_sides: 6,
      },
    },
    size: {
      value: 80,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 400,
      opacity: 0.5,
      width: 4,
    },
    move: {
      enable: true,
      speed: 2.2,
      direction: 'none',
      bounce: true,
      out_mode: 'bounce',
      straight: false,
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: false,
      },
      onresize: {
        enable: true,
      },
    },
    modes: {
      push: {
        particles_nb: 12,
      },
    },
  },
}

class ParticleCover extends Component {
  render() {
    return (
      <Particles
        width="100%"
        height="100%"
        params={params}
        style={{
          backgroundColor: '#252527',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5,
          zIndex: -1,
        }}
      />
    )
  }
}
export default ParticleCover
