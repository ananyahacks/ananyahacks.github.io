// js/app.js

// This script initializes the particles.js background effect.
// Ensure that particles.js library (js/particles.js) is loaded BEFORE this file in your HTML.

// particlesJS.load takes two arguments:
// 1. The ID of the HTML element where particles should be rendered (your 'particles-js' div).
// 2. The path to your particles.json configuration file (or a direct JSON object).
//    Since you don't have a particles.json, we'll provide a basic configuration object directly.

particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // Number of particles
            "density": {
                "enable": true,
                "value_area": 800 // Area to distribute particles
            }
        },
        "color": {
            "value": "#ffffff" // Color of particles (white)
        },
        "shape": {
            "type": "circle", // Shape of particles
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5, // Opacity of particles
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3, // Size of particles
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150, // Max distance for lines to connect
            "color": "#ffffff", // Color of lines
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6, // Speed of particle movement
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab" // Particles react when mouse hovers
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Particles push away on click
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
