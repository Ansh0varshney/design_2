interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
}

export function createParticleEffect(container: HTMLElement) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const particles: Particle[] = [];
  let animationFrame: number;

  function init() {
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);

    function resize() {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedY: -Math.random() * 0.5 - 0.2,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    function animate() {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';

      particles.forEach((particle, index) => {
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.y += particle.speedY;

        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }
      });

      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
      container.removeChild(canvas);
    };
  }

  return init();
}