particlesJS("particles-js", {
    particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
        },
        opacity: { value: 0.3, random: false },
        size: { value: 5, random: true },
        line_linked: { enable: true, distance: 100, color: "#ffffff", opacity: 0.3, width: 1 },
        move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out", bounce: false },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: false },
            resize: true,
        },
        modes: {
            grab: { distance: 200, line_linked: { opacity: 1 } },
            bubble: { distance: 200, size: 20, duration: 2, opacity: 5, speed: 2 },
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 2 },
            remove: { particles_nb: 1 },
        },
    },
    retina_detect: true,
});
