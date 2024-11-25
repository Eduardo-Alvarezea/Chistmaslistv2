// Initialize particles.js to create snowflakes
particlesJS('snowflakes', {
  particles: {
    number: {
      value: 100, // Number of snowflakes
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: { value: "#ffffff" }, // Color of snowflakes
    shape: {
      type: "circle", // Snowflakes are circles
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.7, // Snowflakes' opacity
      random: true,
    },
    size: {
      value: 5, // Snowflake size
      random: true, // Randomize size for variety
    },
    move: {
      enable: true,
      speed: 2, // Speed of snowflakes falling
      direction: "bottom", // Snowflakes fall from top to bottom
      random: false,
      straight: false,
      out_mode: "out", // Snowflakes exit the screen
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Snowflakes move away on hover
      },
      onclick: { enable: false }, // Disable click interaction
      resize: true,
    },
  },
  retina_detect: true, // Adjust for high-density screens
});
