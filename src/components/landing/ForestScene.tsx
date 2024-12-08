import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { createParticleEffect } from "@/lib/utils/particles";

export function ForestScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const brightness = useTransform(scrollYProgress, [0, 0.5], [1, 2]);
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 0.95]);

  useEffect(() => {
    if (containerRef.current) {
      const cleanup = createParticleEffect(containerRef.current);
      return () => cleanup();
    }
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/forest-background.jpg')`,
          filter: `brightness(${brightness.get()})`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      
      <motion.div 
        className="absolute inset-0 bg-white"
        style={{ opacity: overlayOpacity }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-md text-center text-white">
          <motion.h1
            className="text-4xl font-bold mb-6 opacity-0"
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Find Your Path
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}