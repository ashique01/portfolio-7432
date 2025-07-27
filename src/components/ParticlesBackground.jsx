import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";


export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
            grab: {
              distance: 200,
              links: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#88CCEE", "#CC6677", "#DDCC77", "#117733", "#332288", "#AA4499", "#44AA99", "#999933", "#661100", "#6699CC", "#888888"], // More diverse color palette
          },
          links: {
            color: {
              value: "#ffffff",
            },
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100, // Increased particle count
          },
          opacity: {
            value: { min: 0.3, max: 0.7 },
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: ["circle", "triangle", "star"], // Varied shapes
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          size: {
            value: { min: 1, max: 5 }, // Varied sizes
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}