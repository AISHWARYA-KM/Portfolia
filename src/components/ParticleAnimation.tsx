

```ts
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Canvas context not available");
    return;
  }

  let animationFrameId: number;

  const resizeCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      // Call init here if you want to re-initialize particles on resize
      // init();
    }
  };

  // This should ideally not be in the effect's dependency array if it causes re-renders
  const currentParticles = particlesArrayRef.current;

  const init = () => {
    if (!canvasRef.current) return;
    const newParticlesArray: Particle[] = [];
    const numberOfParticles = 80;
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 5 + 1;
      let x = Math.random() * (canvasRef.current.width - size * 2) + size;
      let y = Math.random() * (canvasRef.current.height - size * 2) + size;
      let directionX = Math.random() * 0.4 - 0.2;
      let directionY = Math.random() * 0.4 - 0.2;
      let color = "hsl(270, 90%, 70%)";
      newParticlesArray.push(
        new Particle(x, y, directionX, directionY, size, color)
      );
    }
    particlesArrayRef.current = newParticlesArray; // Update ref instead of state
  };

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    if (!canvasRef.current || !ctx) return;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Use the ref for particles in animation
    particlesArrayRef.current.forEach((particle) => {
      particle.update(
        ctx,
        canvasRef.current!.width,
        canvasRef.current!.height,
        mousePositionRef.current.x,
        mousePositionRef.current.y
      );
    });
    connect(ctx);
  };

  const connect = (ctx: CanvasRenderingContext2D) => {
    // ... (connect logic using particlesArrayRef.current)
  };

  resizeCanvas();
  init(); // Initial particle setup
  animate();

  const handleMouseMove = (event: MouseEvent) => {
    mousePositionRef.current = { x: event.clientX, y: event.clientY };
  };

  const handleMouseOut = () => {
    mousePositionRef.current = { x: null, y: null };
  };

  const handleClick = () => {
    init(); // Re-initialize particles
  };

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseout", handleMouseOut);
  canvas.addEventListener("click", handleClick);

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseout", handleMouseOut);
    if (canvasRef.current) {
      canvasRef.current.removeEventListener("click", handleClick);
    }
  };
}, []); // Empty dependency array - runs once on mount
```

In this fix, I've replaced `useState` for `particlesArray` and `mousePosition` with `useRef`. This is because these values are frequently updated and directly control the canvas rendering, which doesn't need to trigger React re-renders. The `useEffect` now has an empty dependency array `[]`, so it only runs once when the component mounts and cleans up when it unmounts. This avoids the infinite loop caused by `useEffect` re-running due to changes in its dependencies.

    