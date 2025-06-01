
"use client";
import type { Engine, ISourceOptions } from "tsparticles-engine"; // Main type can often be inferred or Engine is sufficient
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Slim bundle loader
import React, { useCallback, useMemo } from "react";

const ParticleJSBackground = () => {
  // Removed particleThemeColor state and useEffect as colors are now hardcoded as per request.

  const customInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any | undefined): Promise<void> => {
    // console.log("Particles loaded", container);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "transparent", 
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse", 
          },
        },
        modes: {
          push: {
            quantity: 2, 
          },
          repulse: {
            distance: 100, 
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#1D0E33", // User requested particle color
        },
        links: {
          color: "#C77DFF", // User requested node/link color
          distance: 180, 
          enable: true,
          opacity: 0.6, // Increased from 0.3 for better visibility
          width: 1,
        },
        collisions: {
          enable: false, 
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
        },
        number: {
          density: {
            enable: true,
            area: 1000, // Decreased from 1200 to slightly increase density
          },
          value: 70, // Increased from 50
        },
        opacity: {
          value: {min: 0.2, max: 0.6}, // Increased range from {min: 0.1, max: 0.4}
          animation: {
            enable: true,
            speed: 0.8, // Slightly increased speed
            minimumValue: 0.2, // Increased from 0.1
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 }, // Slightly increased max size from 3
          animation: {
            enable: true,
            speed: 1.5,
            minimumValue: 0.5,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [] // No dependencies as colors are now static within this configuration
  );

  return (
    <Particles
      id="tsparticles"
      init={customInit}
      loaded={particlesLoaded}
      options={options}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10, 
      }}
    />
  );
};

export default React.memo(ParticleJSBackground);
