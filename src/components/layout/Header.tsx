import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check user's motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav 
        className="container mx-auto px-4 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <motion.a
          href="/"
          className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Flora home"
        >
          <HeartHandshake className="h-8 w-8 text-primary" aria-hidden="true" />
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-teal-600">
            Flora
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="shadow-sm hover:shadow-md transition-shadow"
            aria-label="Login with Google account"
          >
            Login with Google
          </Button>
        </motion.div>
      </nav>
    </motion.header>
  );
}